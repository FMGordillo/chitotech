<script lang="ts">
  import { Jumper } from "svelte-loading-spinners";
  import Button from "../components/Button.svelte";
  import IntersectionObserver from "./IntersectionObserver.svelte";
  import { _ } from "svelte-i18n";
  import {locale} from 'svelte-i18n'
  import { defaultLocale, locales } from "$lib/i18n"
  import Logo from "../components/Logo.svelte";
  import Footer from "../components/Footer.svelte";

  const VITE_URL_BACKEND =
    import.meta.env.VITE_URL_BACKEND || "http://localhost:8080/api/";
  const CALENDLY_URL = "https://calendly.com/chirotech/30min";

  let isIntersectingHeader = true;

  locale.set(defaultLocale)

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
  let onSuccess = false
  let onError = false
  let snackbar: HTMLElement
  let snackbarMsg: string
  let snackbarOpen = false

  const showSnackbar = (status: Number) => {
    if (status == 201) {
      snackbarMsg = $_("snackbar-ok");
      onSuccess = true;
    } else {
      snackbarMsg = $_("snackbar-failed");
      onError = true;
    }
    snackbarOpen = true
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
    try{
      loading = true
      const response = await fetch(VITE_URL_BACKEND + "message", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, organization, email, msg }),
      })
      showSnackbar(response.status)
    }catch(e){
      console.log("Error on Submit: ", e)
      showSnackbar(500)
    }finally{
      clearFormData()
      loading = false
    }
  };

</script>

<head>
  <title>Chiro Tech - Software Consultancy</title>
</head>

<header
  class="fixed inset-x-0 top-0 z-10 mx-auto flex justify-between bg-zinc-950 p-4 transition"
>
<Logo/>
<div class="flex items-center gap-2">
    <select class="rounded pl-2 h-10 bg-zinc-950 hover:bg-cyan-800 border border-gray-300 button-secondary-transition"
    bind:value={$locale}>
      
      {#each locales as l}
      <option value={l}>{l}</option>
      {/each}
    </select>
  <a
    href={CALENDLY_URL}
    target="_blank"
    rel="noreferrer noopener"
    class="ml-4 text-l rounded-full border border-gray-300 px-4 py-2 button-transition button-secondary-transition"
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
        <img class="hidden h-16 w-16 md:block" src="/logo.png" alt="logo-chiro"/>
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

<form
   method="POST"
   on:submit|preventDefault={handleSubmit}
 >
 <div class="flex items-center justify-center h-screen bg-[url('/background_with_opacity.svg')]">
   <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
     <div class="p-6">
       <div class="space-y-8">
         <div class="space-y-2">
           <h2 class="text-3xl font-semibold">{$_("form-title")}</h2>
           <p class="text-zinc-500 dark:text-zinc-400">
            {$_("form-subtitle")}
           </p>
         </div>
         <div class="space-y-4">
           <div class="grid grid-cols-2 gap-4">
             <div class="space-y-2">
               <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="name">{$_("form-label-name")}</label>
               <input
                 bind:value={name}
                 class="text-black flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                 id="name"
                 name="name"
                 required
                 type="text"
                 placeholder={$_("form-placeholder-name")}>
             </div>
             <div class="space-y-2">
               <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="last-name">{$_("form-label-organization")}</label>
               <input class="text-black flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                 id="organization"
                 name="organization"
                 type="text"
                 required
                 bind:value={organization}
                 placeholder={$_("form-placeholder-organization")}>
             </div>
             </div>
             <div class="space-y-2">
               <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label>
               <input
                 class="text-black flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                 id="email"
                 name="email"
                 required
                 type="email"
                 bind:value={email}
                 placeholder={$_("form-placeholder-email")}>
             </div>
             <div class="space-y-2">
               <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="message">{$_("form-label-msg")}</label>
               <textarea
                 class="text-black flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                 id="msg"
                 name="msg"
                 required
                 bind:value={msg}
                 placeholder={$_("form-placeholder-msg")}></textarea>
             </div>
             {#if loading}
                 <Jumper size="60" color="#87CEEB" unit="px" />
             {:else}
               <button
                 class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-gray-800 text-white"
                 type="submit">
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
     <Footer/>

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
  .button-secondary-transition{
    transition: background-color 0.1s ease-in;
  }
  .button-secondary-transition:hover {
    background-color: #00838F;
  }

  
</style>
