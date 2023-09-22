<script>
  import "@fontsource/open-sans";
  import "@fontsource/open-sans/600.css";
  import "@fontsource/open-sans/800.css";
  import "../app.css";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  import { browser } from "$app/environment";
  import "$lib/i18n";
  import { locale, waitLocale, isLoading } from "svelte-i18n";

  inject({ mode: dev ? "development" : "production" });

  export const load = async () => {
    if (browser) {
      locale.set(window.navigator.language);
    }
    await waitLocale();
  };
</script>


<!-- This is async, crap. -->
{#if $isLoading}
  <span>Loading...</span>
{:else}
  <slot />
{/if}

<style>
  :global(body) {
    color: theme("colors.gray.50");
    background: theme("colors.stone.950");
  }
</style>
