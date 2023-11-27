<script lang="ts">
  import Button from "../components/Button.svelte";
  import Footer from "../components/Footer.svelte";
  import IntersectionObserver from "./IntersectionObserver.svelte";
  import Logo from "../components/Logo.svelte";
  import { Jumper } from "svelte-loading-spinners";
  import { _ } from "svelte-i18n";
  import { defaultLocale, locales } from "$lib/i18n";
  import { locale } from "svelte-i18n";
  import { onMount } from "svelte";

  const VITE_URL_BACKEND =
    import.meta.env.VITE_URL_BACKEND || "http://localhost:8080/api/";
  const VITE_CHIRO_BACKEND =
    import.meta.env.VITE_CHIRO_BACKEND || "http://localhost:3001";
  const HUBSPOT_MEET_URL = "https://meetings-eu1.hubspot.com/facundo-gordillo";

  let isIntersectingHeader = true;

  locale.set(defaultLocale);

  const team = [
    {
      name: "Santiago Feijoó",
      role: "Chief Tech Officer",
      image: "team_santiago.webp",
      url: "https://www.linkedin.com/in/santiago-iv%C3%A1n-feijoo-b6b72b1a4/",
    },
    {
      name: "Matias Gonzalez",
      role: "Chief Sales Officer",
      image: "team_matias.webp",
      url: "https://www.linkedin.com/in/mat%C3%ADas-gonz%C3%A1lez-6a8228155/",
    },
    {
      name: "Facundo Gordillo",
      role: "CEO & Founder",
      image: "team_facundo.webp",
      url: "https://www.linkedin.com/in/fmgordillo/",
    },
  ];

  // All team members are equal here
  for (let i = team.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = team[i];
    team[i] = team[j];
    team[j] = k;
  }
  // @ts-ignore
  function handleAboutUsScroll(e) {
    e.preventDefault();
    // @ts-ignore
    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
    });
  }

  // Para el form
  let name = "";
  let email = "";
  let msg = "";
  let organization = "";
  const clearFormData = () => {
    name = "";
    email = "";
    msg = "";
    organization = "";
  };

  // Para el spinner
  let loading = false;

  // Para el snackbar
  let onSuccess = false;
  let onError = false;
  let snackbar: HTMLElement;
  let snackbarMsg: string;
  let snackbarOpen = false;

  const showSnackbar = (status: Number) => {
    if (status == 201) {
      snackbarMsg = $_("snackbar-ok");
      onSuccess = true;
    } else {
      snackbarMsg = $_("snackbar-failed");
      onError = true;
    }
    snackbarOpen = true;
    setTimeout(() => {
      closeSnackbar();
    }, 3000);
  };

  const closeSnackbar = () => {
    snackbarMsg = "";
    snackbarOpen = false;
  };

  const handleSnackbarClosed = () => {
    closeSnackbar();
  };

  const handleSubmit = async () => {
    try {
      loading = true;
      const response = await fetch(`${VITE_URL_BACKEND}/message`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, organization, email, msg }),
      });

      // We don't want to wait it out
      fetch(
        `${VITE_CHIRO_BACKEND}/hubspot/form/bfc5deca-26b9-4f4d-a641-8e2fb109f5c5`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company: organization,
            email,
            firstname: name,
          }),
        },
      );

      showSnackbar(response.status);
    } catch (e) {
      console.log("Error on Submit: ", e);
      showSnackbar(500);
    } finally {
      clearFormData();
      loading = false;
    }
  };

  let currentIndex = 0;
  let leftBtn, rightBtn, cardsContainer: any;

  onMount(() => {
    /* CAROUSEL */
    leftBtn = document.getElementById("carousel__btn-left");
    rightBtn = document.getElementById("carousel__btn-right");
    cardsContainer =
      document.getElementById(
        "cards-container",
      ); /* Voy a mover hacia los costados este contenedor */

    setTimeout(() => {
      moveToLeft();
    }, 2000);
    leftBtn?.addEventListener("click", () => moveToLeft());
    rightBtn?.addEventListener("click", () => moveToRight());
  });
  const moveToLeft = () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = team.length - 1;
    }
    cardsContainer.style.transition = "all ease 0.5s";
    cardsContainer.style.transform = `translateX(${
      -currentIndex * (100 / team.length)
    }%)`;
    setTimeout(() => {
      moveToLeft();
    }, 5000);
  };
  const moveToRight = () => {
    currentIndex++;
    if (currentIndex >= team.length) {
      currentIndex = 0;
    }
    cardsContainer.style.transition = "all ease 0.5s";
    cardsContainer.style.transform = `translateX(${
      -currentIndex * (100 / team.length)
    }%)`;
  };
</script>

<head>
  <title>Chiro Tech - Software Consultancy</title>
  <meta
    name="description"
    content="Top-notch Software Consultancy in Health, Finance and Legal"
  />

  <meta property="og:title" content="Chiro Tech - Software Consultancy" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://chirotech.dev" />
  <meta
    property="og:image"
    content="https://chirotech.dev/twitter_thumbnail.png"
  />
  <meta
    property="og:description"
    content="Top-notch Software Consultancy in Health, Finance and Legal"
  />

  <meta name="twitter:card" value="summary" />
  <meta
    name="twitter:image"
    value="https://chirotech.dev/twitter_large_image.png"
  />
</head>

<header class="fixed inset-x-0 top-0 z-10 bg-zinc-900 p-2 transition">
  <div class="container mx-auto flex gap-2">
    <div class="containter flex items-center gap-5">
      <a class="flex items-center gap-2" href="tel:+34692698119">
        <img class="h-4 w-4" src="/call.svg" />
        692 698 119</a
      >
      <a
        href="mailto:facundo@chirotech.dev"
        target="_blank"
        rel="noreferrer
          noopener"
      >
        <img alt="Email" class="h-4 w-4" src="/mail_icon.svg" />
      </a>
      <a
        href="https://www.linkedin.com/company/chirotech-dev"
        target="_blank"
        rel="noreferrer
          noopener"
      >
        <img alt="Linkedin" class="h-4 w-4" src="/linkedin_icon.svg" />
      </a>
      <a
        href={HUBSPOT_MEET_URL}
        target="_blank"
        rel="noreferrer noopener"
        class="text-l rounded-full"
        ><span aria-hidden="true">🗓️</span> {$_("lets_talk")}
      </a>
    </div>
  </div>
</header>

<section class="relative isolate grid h-screen">
  <div class="absolute inset-0 overflow-hidden">
    <div
      id="animated_background"
      class="bg-left-center absolute inset-0 z-0 bg-[url('/background_animated.svg')] bg-contain"
    />
  </div>

  <div
    class="absolute inset-0 z-0 bg-[url('/background_title.svg')] bg-right-bottom bg-repeat-x"
  />

  <div class="absolute inset-0 z-0 bg-black/10" />

  <div
    class="z-10 mx-auto grid max-w-5xl grid-cols-1 gap-4 px-8 pt-48 md:grid-cols-2 md:pt-80"
  >
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <img
          class="hidden h-16 w-16 md:block"
          src="/logo.png"
          alt="logo-chiro"
        />
        <h1 class="text-5xl font-extrabold sm:text-6xl">ChiroTech</h1>
      </div>
      <p class="">{$_("subtitle_1")} <strong>{$_("subtitle_2")}</strong></p>
    </div>

    <div class="flex flex-col items-center gap-4">
      <Button href={HUBSPOT_MEET_URL} target="_blank" rel="noreferrer noopener"
        >{$_("lets_talk")}</Button
      >
      <Button href="#about_us" onClick={handleAboutUsScroll}
        >{$_("about_us")}</Button
      >
    </div>
  </div>
</section>

<h1
  id="about_us"
  class="flex h-96 items-center justify-center
  bg-[url('/background_title-reversed.svg')] bg-left-top bg-repeat-x pt-40
  text-center text-4xl font-bold"
>
  {$_("what_we_do")}
</h1>

<section
  class="relative isolate flex h-96 flex-row-reverse items-center px-4
  md:pr-20 lg:justify-center lg:px-0"
>
  <div
    class="absolute inset-0 z-0 bg-[url('/background_blockchain.svg')] bg-no-repeat"
  />
  <div class="z-10 max-w-md rounded-md bg-cyan-950/70 p-8">
    <div class="flex max-w-xs flex-col gap-2">
      <h1 class="border-l-2 border-teal-500 pl-2 text-xl font-bold">
        🔒 {$_("sections.blockchain-title")}
      </h1>
      <p>
        {$_("sections.blockchain-text")}
      </p>
    </div>
  </div>
  <div
    class="absolute inset-0 z-0 hidden bg-[url('/background_blockchain-reversed.svg')] bg-right bg-no-repeat lg:block"
  />
</section>

<section
  class="relative isolate flex h-96 items-center px-4
  md:pl-20 lg:justify-center lg:px-0"
>
  <div
    class="absolute inset-0 z-0 hidden bg-[url('/background_cybersecurity-reversed.svg')] bg-no-repeat lg:block"
  />
  <div class="z-10 max-w-md rounded-md bg-sky-950/70 p-8">
    <div class="flex max-w-xs flex-col gap-2">
      <h1 class="border-l-2 border-sky-500 pl-2 text-xl font-bold">
        🛡️ {$_("sections.cybersecurity-title")}
      </h1>
      <p>
        {$_("sections.cybersecurity-text")}
      </p>
    </div>
  </div>
  <div
    class="absolute inset-0 z-0
    bg-[url('/background_cybersecurity.svg')] bg-right bg-no-repeat"
  />
</section>

<section
  class="relative isolate flex h-96 flex-row-reverse items-center px-4
  md:pr-20 lg:justify-center lg:px-0"
>
  <div
    class="absolute inset-0 z-0 bg-[url('/background_team.svg')] bg-no-repeat"
  />
  <div class="z-10 max-w-md rounded-md bg-red-950/70 p-8">
    <div class="flex max-w-xs flex-col gap-2">
      <h1 class="border-l-2 border-red-500 pl-2 text-xl font-bold">
        🚀 {$_("sections.skills-title")}
      </h1>
      <p>
        {$_("sections.skills-text")}
      </p>
    </div>
  </div>
  <div
    class="absolute inset-0 z-0 hidden bg-[url('/background_team-reversed.svg')] bg-right bg-no-repeat lg:block"
  />
</section>

<h1
  class="flex h-72 items-center justify-center text-center text-4xl font-bold"
>
  {$_("our_industries")}
</h1>

<section
  class="container mx-auto grid grid-cols-1 justify-items-center gap-8 pb-8 md:grid-cols-3"
>
  <!-- Sección de Finanzas -->
  <div class="flex max-w-sm flex-col gap-4 rounded-lg border p-4 shadow-lg">
    <div class="text-center">
      <div class="mx-auto mb-4 h-16 w-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          ><path
            d="M448 400H64a16 16 0 010-32h384a16 16 0 010 32zM416 448H96a16 16 0 010-32h320a16 16 0 010 32zM32 272H16v48a32 32 0 0032 32h48v-16a64.07 64.07 0 00-64-64z"
          /><path
            d="M480 240h16v-64h-16a96.11 96.11 0 01-96-96V64H128v16a96.11 96.11 0 01-96 96H16v64h16a96.11 96.11 0 0196 96v16h256v-16a96.11 96.11 0 0196-96zm-224 64a96 96 0 1196-96 96.11 96.11 0 01-96 96z"
          /><circle cx="256" cy="208" r="64" /><path
            d="M416 336v16h48a32 32 0 0032-32v-48h-16a64.07 64.07 0 00-64 64zM480 144h16V96a32 32 0 00-32-32h-48v16a64.07 64.07 0 0064 64zM96 80V64H48a32 32 0 00-32 32v48h16a64.07 64.07 0 0064-64z"
          /></svg
        >
      </div>
      <h2 class="text-xl font-semibold">
        {$_("industry_sections.finance-title")}
      </h2>
    </div>
    <p class="mt-2">
      {$_("industry_sections.finance-description")}
    </p>
    <Button
      href="https://calendly.com/d/4gj-3mf-5v8/30-minutes-meeting-finance"
      target="blank"
      rel="noreferrer noopener">{$_("lets_talk")}</Button
    >
  </div>

  <!-- Sección de Legales -->
  <div class="flex max-w-sm flex-col gap-4 rounded-lg border p-4 shadow-lg">
    <div class="text-center">
      <div class="mx-auto mb-4 h-16 w-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          ><path
            d="M336 80H176a16 16 0 00-16 16v16h192V96a16 16 0 00-16-16z"
            fill="none"
          /><path
            d="M496 176a64.07 64.07 0 00-64-64h-48V96a48.05 48.05 0 00-48-48H176a48.05 48.05 0 00-48 48v16H80a64.07 64.07 0 00-64 64v48h480zm-144-64H160V96a16 16 0 0116-16h160a16 16 0 0116 16zM336 264a24 24 0 01-24 24H200a24 24 0 01-24-24v-4a4 4 0 00-4-4H16v144a64 64 0 0064 64h352a64 64 0 0064-64V256H340a4 4 0 00-4 4z"
          /></svg
        >
      </div>
      <h2 class="text-xl font-semibold">
        {$_("industry_sections.legal-title")}
      </h2>
    </div>
    <p class="mt-2">
      {$_("industry_sections.legal-description")}
    </p>
    <Button
      href="https://calendly.com/d/4dn-sk6-shj/30-minutes-meeting-legal"
      target="blank"
      rel="noreferrer noopener">{$_("lets_talk")}</Button
    >
  </div>

  <!-- Sección de Salud -->
  <div class="flex max-w-sm flex-col gap-4 rounded-lg border p-4 shadow-lg">
    <div class="text-center">
      <div class="mx-auto mb-4 h-16 w-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          ><path
            d="M336 64H176a16 16 0 00-16 16v16h192V80a16 16 0 00-16-16z"
            fill="none"
          /><path
            d="M432 96h-48V80a48.05 48.05 0 00-48-48H176a48.05 48.05 0 00-48 48v16H80a64.07 64.07 0 00-64 64v256a64 64 0 0064 64h352a64 64 0 0064-64V160a64.07 64.07 0 00-64-64zm-96 208h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32zm16-208H160V80a16 16 0 0116-16h160a16 16 0 0116 16z"
          /></svg
        >
      </div>

      <h2 class="text-xl font-semibold">
        {$_("industry_sections.health-title")}
      </h2>
    </div>
    <p class="mt-2">
      {$_("industry_sections.health-description")}
    </p>
    <Button
      href="https://calendly.com/d/4vc-9wn-nyr/30-minutes-meeting-health"
      target="blank"
      rel="noreferrer noopener">{$_("lets_talk")}</Button
    >
  </div>
</section>

<h1
  class="cool-title m-0 flex h-40 items-center justify-center p-0 text-center text-4xl font-bold"
>
  {$_("projects.title")}
</h1>

<section class="container mx-auto flex flex-col items-center">
  <div class="grid grid-cols-1 border lg:grid-cols-[720px_1fr]">
    <img src="/portfolio/secret_diary.png" alt="secret diary screenshot" />
    <div class="flex max-w-prose flex-col gap-4">
      <h2 class="text-4xl font-semibold">
        {$_("projects.secret_diary.title")}
      </h2>
      <p class="leading-loose">
        {$_("projects.secret_diary.description")}
      </p>
    </div>
  </div>

  <div class="grid grid-cols-1 border lg:grid-cols-[1fr_720px]">
    <div class="flex max-w-prose flex-col gap-4">
      <h2 class="text-4xl font-semibold">Amaranto</h2>
      <p class="leading-loose">
        {$_("projects.amaranto.description")}
      </p>
    </div>
    <img
      class="-order-1 lg:order-2"
      src="/portfolio/amaranto.png"
      alt="amaranto"
    />
  </div>
</section>

<h1
  class="cool-title m-0 flex h-40 items-center justify-center p-0 text-center text-4xl font-bold"
>
  {$_("about_team")}
</h1>

<section class="flex flex-col items-center">
  <div class="carousel">
    <div class="cards-container" id="cards-container">
      {#each team as member}
        <div class="card">
          <img src={`/${member.image}`} class="card__image" alt="member img" />
          <h1 class="card__name">{member.name}</h1>
          <h2 class="card__role">{member.role}</h2>
        </div>
      {/each}
    </div>
    <button id="carousel__btn-left" class="carousel__btn-left">
      <img src="/left-arrow.svg" alt="left-arrow" />
    </button>
    <button id="carousel__btn-right" class="carousel__btn-right">
      <img src="/right-arrow.svg" alt="right-arrow" />
    </button>
  </div>
</section>

<form method="POST" on:submit|preventDefault={handleSubmit}>
  <div
    class="mt-40 flex h-screen items-center justify-center bg-[url('/background_with_opacity.svg')]"
  >
    <div
      class="bg-card text-card-foreground form-wrapper rounded-lg border bg-stone-950 shadow-sm"
    >
      <div class="p-6">
        <div class="space-y-8">
          <div class="space-y-2">
            <h2 class="text-3xl font-semibold">{$_("form-title")}</h2>
            <p class="text-zinc-300">
              {$_("form-subtitle")}
            </p>
          </div>
          <div class="fields-container space-y-4">
            <div class="subcontainer grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="name">{$_("form-label-name")}</label
                >
                <input
                  bind:value={name}
                  class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm text-black file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="name"
                  name="name"
                  type="text"
                  placeholder={$_("form-placeholder-name")}
                />
              </div>
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="last-name">{$_("form-label-organization")}</label
                >
                <input
                  class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm text-black file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="organization"
                  name="organization"
                  type="text"
                  bind:value={organization}
                  placeholder={$_("form-placeholder-organization")}
                />
              </div>
            </div>
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email">Email</label
              >
              <input
                class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm text-black file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                name="email"
                required
                type="email"
                bind:value={email}
                placeholder={$_("form-placeholder-email")}
              />
            </div>
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="message">{$_("form-label-msg")}</label
              >
              <textarea
                class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[100px] w-full rounded-md border px-3 py-2 text-sm text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="msg"
                name="msg"
                bind:value={msg}
                placeholder={$_("form-placeholder-msg")}
              ></textarea>
            </div>
            {#if loading}
              <Jumper size="60" color="#87CEEB" unit="px" />
            {:else}
              <button
                class="ring-offset-background focus-visible:ring-ring hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                type="submit"
              >
                {$_("form-button-text")}
              </button>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
<div
  bind:this={snackbar}
  class="snackbar"
  class:open={snackbarOpen}
  class:success={onSuccess}
  class:error={onError}
>
  <p>{snackbarMsg}</p>
  <button on:click={handleSnackbarClosed}>X</button>
</div>
<Footer />

<style>
  @keyframes background {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-100vh);
    }
  }

  .ionicon > * {
    fill: white;
  }

  #animated_background {
    height: calc(100vh * 2);
    animation: background 10s linear infinite;
  }

  .snackbar {
    visibility: hidden;
    min-width: 300px;
    margin-left: -125px;
    color: #fff;
    text-align: center;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 17px;
    transition: opacity 0.25s linear;
    left: 50%;
    bottom: 30px;
    opacity: 0;
  }
  .open {
    visibility: visible;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    opacity: 1;
  }
  .success {
    background-color: rgb(6, 129, 37);
  }
  .error {
    background-color: rgb(126, 8, 8);
  }
  .button-secondary-transition {
    transition: background-color 0.1s ease-in;
  }
  .button-secondary-transition:hover {
    background-color: #00838f;
  }

  .carousel {
    width: 400px;
    height: 500px;
    background-color: #0000007e;
    border-radius: 32px;
    box-shadow:
      -12px 12px 21px #120f18,
      12px -12px 21px #00838f6b;
    overflow: hidden;
    position: relative;
    border: 2px solid #00838f;
  }

  .carousel .cards-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0rem;
    width: 300%;
    height: 100%;
    transition: transform 0.2 ease;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% / 3);
  }
  .card__image {
    width: 70%;
    padding-top: 1rem;
    object-fit: cover;
  }
  .card__name {
    font-weight: bold;
    font-size: 25px;
    margin: 1rem 0;
  }
  .card__role {
    font-size: 20px;
  }
  .carousel__btn-left,
  .carousel__btn-right {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute; /* relative es el padre Carousel */
    top: 50%;
    width: 30px;
    height: 30px;
    transition: background 0.2s linear;
    border-radius: 10px;
  }
  .carousel__btn-left {
    left: 0;
  }
  .carousel__btn-right {
    right: 0%;
  }
  .carousel__btn-left img,
  .carousel__btn-right img {
    width: 20px;
    height: 20px;
  }

  .carousel__btn-left:hover,
  .carousel__btn-right:hover {
    background-color: rgba(21, 19, 37, 0.671);
  }
  .carousel__btn-left:active,
  .carousel__btn-right:active {
    box-shadow: 2px 2px 5px #d1d0d0;
  }
  .cool-title {
    text-shadow:
      0px 0px 5px 00838f6b,
      0px 0px 10px 00838f6b;
    font-size: 2.25rem;
  }

  @media (width < 600px) {
    .carousel {
      width: 350px;
      height: 450px;
    }
    .carousel .card__name {
      font-size: 20px;
    }
    .carousel .card__role {
      font-size: 15px;
    }
    .form-wrapper {
      margin-right: 10px;
    }
    .form-wrapper .fields-container {
      display: flex;
      flex-direction: column;
    }
    .form-wrapper .subcontainer {
      display: block; /* asi se le sale el grid a la parte esa*/
    }
  }
</style>
