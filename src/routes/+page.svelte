<script lang="ts">
  import { Jumper } from "svelte-loading-spinners";
  import Button from "../components/Button.svelte";
  import IntersectionObserver from "./IntersectionObserver.svelte";
  import { _ } from "svelte-i18n";

  const VITE_URL_BACKEND =
    import.meta.env.VITE_URL_BACKEND || "http://localhost:8080/api/";
  const CALENDLY_URL = "https://calendly.com/chirotech/30min";

  let isIntersectingHeader = true;

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

  function handleAboutUsScroll(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
    });
  }

  // Para el form
  let name = "";
  let email = "";
  let msg = "";
  const clearFormData = () => {
    name = "";
    email = "";
    msg = "";
  };

  // Para el spinner
  let loading = false;

  // Para el snackbar
  let onSuccess = false;
  let onError = false;
  let snackbar: HTMLElement;
  let snackbarMsg = "sucess";
  let snackbarOpen = true;

  const showSnackbar = (status: Number) => {
    if (status == 201) {
      snackbarMsg = "Message sent successfully!";
      snackbarOpen = true;
      onSuccess = true;
    } else {
      snackbarMsg = "Whoops!";
      onError = true;
    }
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
    loading = true;
    const response = await fetch(VITE_URL_BACKEND + "message", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, msg }),
    });
    // solo para ver el spinner
    setTimeout(() => {
      loading = false;
      clearFormData();
      showSnackbar(response.status);
    }, 2000);
  };
</script>

<head>
  <title>Chiro Tech - Software Consultancy</title>
</head>

<header
  class="fixed inset-x-0 top-0 z-10 mx-auto flex justify-between bg-zinc-950 p-4 transition"
>
  <div class="flex items-center gap-2">
    <img class="w-10" alt="Logo" src="/logo.png" />
    <span class="hidden font-extrabold md:block">ChiroTech</span>
  </div>
  <a
    href={CALENDLY_URL}
    target="_blank"
    rel="noreferrer noopener"
    class="text-l rounded-full border border-gray-300 px-4 py-2 hover:bg-cyan-800"
    >{$_("lets_talk")} <span aria-hidden="true">🗓️</span></a
  >
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
        <img class="hidden h-16 w-16 md:block" src="/logo.png" />
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
        🔒 {$_("section_1-title")}
      </h1>
      <p>
        {$_("section_1-text")}
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
        🛡️ {$_("section_2-title")}
      </h1>
      <p>
        {$_("section_2-text")}
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
        🚀 {$_("section_3-title")}
      </h1>
      <p>
        {$_("section_3-text")}
      </p>
    </div>
  </div>
  <div
    class="absolute inset-0 z-0 hidden bg-[url('/background_team-reversed.svg')] bg-right bg-no-repeat lg:block"
  />
</section>

<h1
  class="flex h-56 items-center justify-center text-center text-4xl font-bold"
>
  {$_("about_team")}
</h1>

<section class="container mx-auto px-8">
  <ul class="flex flex-wrap justify-center gap-8">
    {#each team as member}
      <a target="_blank" rel="noreferrer noopener" href={member.url}>
        <li class="flex flex-col items-center">
          <img
            src={`/${member.image}`}
            class="mb-2 w-32 rounded-lg object-cover"
          />
          <h1 class="font-semibold">{member.name}</h1>
          <h2>{member.role}</h2>
        </li>
      </a>
    {/each}
  </ul>
</section>

<h1
  class="flex h-56 items-center justify-center text-center text-4xl font-bold"
>
  {$_("contact_us")}
</h1>

<div class="my-20 flex flex-col items-center gap-2">
  <h1 class="my-10 text-4xl font-extrabold md:text-5xl lg:text-6xl">
    Contact us
  </h1>

  <form
    class="w-full max-w-xl"
    method="POST"
    on:submit|preventDefault={handleSubmit}
  >
    <div class="mb-6 md:flex md:items-center">
      <div class="md:w-1/3">
        <label
          class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
          for="name"
        >
          Your name
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          class="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
          id="name"
          name="name"
          required
          type="text"
          bind:value={name}
        />
      </div>
    </div>

    <div class="mb-6 md:flex md:items-center">
      <div class="md:w-1/3">
        <label
          class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
          for="email"
        >
          Your email
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          class="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
          id="email"
          name="email"
          required
          type="email"
          bind:value={email}
        />
      </div>
    </div>

    <div class="mb-6 md:flex md:items-center">
      <div class="md:w-1/3">
        <label
          class="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
          for="msg"
        >
          Message
        </label>
      </div>
      <div class="md:w-2/3">
        <textarea
          class="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
          id="msg"
          name="msg"
          placeholder="Write your feelings down uwu"
          rows="5"
          required
          bind:value={msg}
        ></textarea>
      </div>
    </div>

    <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
        {#if loading}
          <Jumper size="60" color="#87CEEB" unit="px" />
        {:else}
          <button
            class="mt-4 rounded-full border-2 border-gray-300 bg-gray-700 px-8 py-4 text-xl hover:bg-cyan-800"
            type="submit"
          >
            Contact us!
          </button>
        {/if}
      </div>
    </div>
  </form>
</div>
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
>>>>>>> 5fcf468 (snackbar + fix en el config porque no andaba ts)

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
    background-color: rgb(65, 65, 62);
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .open {
    visibility: visible;
    opacity: 1;
  }
  .success {
    background-color: rgb(6, 129, 37);
  }
  .error {
    background-color: rgb(126, 8, 8);
  }
</style>
