<script>
  import { _ } from "svelte-i18n";

  const HUBSPOT_MEET_URL = "https://meetings-eu1.hubspot.com/facundo-gordillo";
</script>

<header class="fixed inset-x-0 top-0 z-10 bg-zinc-900 p-2 transition">
  <div class="container flex mx-auto items-center justify-between">

      <div class="flex gap-2 items-center">
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

      <div class="divide-x">
        <a href="/">Home</a>
        <a class="pl-1" href="/about-us">About</a>
      </div>

  </div>
</header>
