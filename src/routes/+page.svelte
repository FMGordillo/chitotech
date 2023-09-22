<script>
  import Button from "../components/Button.svelte";
  import IntersectionObserver from "./IntersectionObserver.svelte";
  import { _ } from "svelte-i18n";
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
      <Button href="#about_us" onClick={handleAboutUsScroll}>{$_("about_us")}</Button>
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
</style>
