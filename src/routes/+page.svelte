<script lang="ts">
  import { Jumper } from "svelte-loading-spinners";
  import Button from "../components/Button.svelte";
  import IntersectionObserver from "./IntersectionObserver.svelte";
  import { _ } from "svelte-i18n";
  import { locale } from "svelte-i18n";
  import { defaultLocale, locales } from "$lib/i18n";
  import Logo from "../components/Logo.svelte";
  import Footer from "../components/Footer.svelte";
  import { onMount } from "svelte";

  const VITE_URL_BACKEND =
    import.meta.env.VITE_URL_BACKEND || "http://localhost:8080/api/";
  const CALENDLY_URL = "https://calendly.com/chirotech/30min";

  let isIntersectingHeader = true;

  locale.set(defaultLocale);

  const team = [
    {
      name: "Santiago Feijoó",
      role: "Chief Tech Officer",
      image: "team_santiago.jpeg",
      url: "https://www.linkedin.com/in/santiago-iv%C3%A1n-feijoo-b6b72b1a4/",
    },
    {
      name: "Matias Gonzalez",
      role: "Chief Sales Officer",
      image: "team_matias.jpeg",
      url: "https://www.linkedin.com/in/mat%C3%ADas-gonz%C3%A1lez-6a8228155/",
    },
    {
      name: "Facundo Gordillo",
      role: "CEO & Founder",
      image: "team_facundo.jpeg",
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
      const response = await fetch(VITE_URL_BACKEND + "message", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, organization, email, msg }),
      });
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
        "cards-container"
      ); /* Voy a mover hacia los costados este contenedor */

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
  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</head>

<header
  class="fixed inset-x-0 top-0 z-10 mx-auto flex justify-between bg-zinc-950 p-4 transition"
>
  <Logo />
  <div class="flex items-center gap-2">
    <select
      class="button-secondary-transition h-10 rounded border border-gray-300 bg-zinc-950 pl-2 hover:bg-cyan-800"
      bind:value={$locale}
    >
      {#each locales as l}
        <option value={l}>{l}</option>
      {/each}
    </select>
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noreferrer noopener"
      class="text-l button-transition button-secondary-transition ml-4 rounded-full border border-gray-300 px-4 py-2"
      >{$_("lets_talk")} <span aria-hidden="true">🗓️</span></a
    >
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
      <Button href={CALENDLY_URL} target="_blank" rel="noreferrer noopener"
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
  class="flex h-96 items-center justify-center text-center text-4xl font-bold"
>
  {$_("our_industries")}
</h1>

<section class="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
  <!-- Sección de Finanzas -->
  <div class="flex flex-col gap-4 rounded-lg p-4 shadow-lg">
    <div class="text-center">
      <ion-icon name="cash" class="mx-auto mb-4 h-16 w-16"></ion-icon>
      <h2 class="text-xl font-semibold">Finanzas</h2>
    </div>
    <p class="mt-2">
      Nuestra experiencia en tecnologías como JavaScript y TypeScript nos
      permite ofrecer soluciones innovadoras para la industria financiera.
    </p>
    <Button
      href="https://calendly.com/d/4gj-3mf-5v8/30-minutes-meeting-finance"
      target="blank"
      rel="noreferrer noopener">{$_("lets_talk")}</Button
    >
  </div>

  <!-- Sección de Legales -->
  <div class="flex flex-col gap-4 rounded-lg p-4 shadow-lg">
    <div class="text-center">
      <ion-icon name="briefcase" class="mx-auto mb-4 h-16 w-16"></ion-icon>
      <h2 class="text-xl font-semibold">Legales</h2>
    </div>
    <p class="mt-2">
      Trabajamos en colaboración con profesionales legales para desarrollar
      aplicaciones que simplifiquen procesos y optimicen la gestión de casos.
    </p>
    <Button
      href="https://calendly.com/d/4dn-sk6-shj/30-minutes-meeting-legal"
      target="blank"
      rel="noreferrer noopener">{$_("lets_talk")}</Button
    >
  </div>

  <!-- Sección de Salud -->
  <div class="flex flex-col gap-4 rounded-lg p-4 shadow-lg">
    <div class="text-center">
      <ion-icon name="medkit" class="mx-auto mb-4 h-16 w-16"></ion-icon>
      <h2 class="text-xl font-semibold">Salud</h2>
    </div>
    <p class="mt-2">
      Exploramos tecnologías como Web3 para mejorar la atención médica y el
      seguimiento de la salud de los pacientes en colaboración con profesionales
      de la salud.
    </p>
    <Button
      href="https://calendly.com/d/4vc-9wn-nyr/30-minutes-meeting-health"
      target="blank"
      rel="noreferrer noopener">{$_("lets_talk")}</Button
    >
  </div>
</section>

<h1
  class="cool-title flex h-56 items-center justify-center text-center text-4xl font-bold"
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
    class="flex h-screen items-center justify-center bg-[url('/background_with_opacity.svg')]"
  >
    <div
      class="bg-card text-card-foreground form-wrapper rounded-lg border shadow-sm"
    >
      <div class="p-6">
        <div class="space-y-8">
          <div class="space-y-2">
            <h2 class="text-3xl font-semibold">{$_("form-title")}</h2>
            <p class="text-zinc-500 dark:text-zinc-400">
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
                  required
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
                  required
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
                required
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
    width: 500px;
    height: 600px;
    background-color: #241f31;
    border-radius: 32px;
    box-shadow:
      -42px 42px 71px #120f18,
      42px -42px 71px #362f4a;
    overflow: hidden;
    position: relative;
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
    width: 80%;
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
      0px 0px 5px #b393d3,
      0px 0px 10px #b393d3,
      0px 0px 10px #b393d3,
      0px 0px 20px #b393d3;
    font-size: 50px;
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
