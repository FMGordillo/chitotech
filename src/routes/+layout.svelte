<script>
  import "../app.css";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  import { browser } from "$app/environment";
  import "$lib/i18n"; // Import to initialize. Important :)
  import { locale, waitLocale } from "svelte-i18n";

  inject({ mode: dev ? "development" : "production" });

  export const load = async () => {
    if (browser) {
      locale.set(window.navigator.language);
    }
    await waitLocale();
  };
</script>

<slot />

<style>
  :global(body) {
    color: theme("colors.gray.50");
    background: theme("colors.stone.950");
  }
</style>
