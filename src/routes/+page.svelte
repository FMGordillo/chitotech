<script>
  import Button from "../components/Button.svelte";
  import IntersectionObserver from "./IntersectionObserver.svelte";
  import { _ } from "svelte-i18n";
  const CALENDLY_URL = "https://calendly.com/chirotech/30min";

  let isIntersectingHeader = true;
</script>

<head>
  <title>Chiro Tech - Software Consultancy</title>
</head>

<header
  class="fixed inset-x-0 top-0 z-10 mx-auto flex justify-between bg-zinc-950 p-4 transition"
>
  <div class="flex items-center gap-2">
    <img class="w-10" alt="Logo" src="/logo.png" />
    <span class="hidden font-bold sm:block">ChiroTech</span>
  </div>
  <a
    href={CALENDLY_URL}
    target="_blank"
    rel="noreferrer noopener"
    class="text-l rounded-full border border-gray-300 px-4 py-2 hover:bg-cyan-800"
    >{$_("lets_talk")} <span aria-hidden="true">🗓️</span></a
  >
</header>

<section
  class="grid h-screen bg-[url('/background_title.svg')] bg-cover bg-center
  bg-no-repeat pt-48 md:pt-64"
>
  <div class="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-8 md:grid-cols-2">
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <img class="hidden h-16 w-16 md:block" src="/logo.png" />
        <h1 class="text-6xl font-bold">ChiroTech</h1>
      </div>
      <p class="">Nuestro lema, <strong>muy importante</strong></p>
    </div>

    <div class="flex flex-col items-center gap-4">
      <Button>Chat</Button>
      <Button>About us</Button>
    </div>
  </div>
</section>

<h1 class="mt-32 text-center text-2xl">What we do</h1>

<section
  class="flex h-96 items-center bg-[url('/background_blockchain.svg')] bg-no-repeat"
>
  <div class="h-1 w-2/5" />
  <div class="w-3/5">
    <div class="flex max-w-xs flex-col gap-2">
      <h1 class="border-l-2 border-teal-500 pl-5 text-xl font-bold">
        Something to tell
      </h1>
      <p>
        Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,Lorem
        ipsum,Lorem ipsum,Lorem ipsum
      </p>
    </div>
  </div>
</section>

<section
  class="flex h-96 items-center bg-[url('/background_cybersecurity.svg')] bg-right bg-no-repeat"
>
  <div class="h-1 w-1/5" />
  <div class="w-4/5">
    <div class="flex max-w-xs flex-col gap-2">
      <h1 class="border-l-2 border-teal-500 pl-5 text-xl font-bold">
        Something to tell
      </h1>
      <p>
        Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,Lorem
        ipsum,Lorem ipsum,Lorem ipsum
      </p>
    </div>
  </div>
</section>

<section class="border border-red-500">
  <h1>Lorem ipsum</h1>
  <p>
    Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,Lorem
    ipsum,Lorem ipsum,Lorem ipsum
  </p>
</section>
