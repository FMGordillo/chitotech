<script>
  import "../app.css";
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />

<style>
  :global(body) {
    color: theme('colors.gray.50');
    background: theme('colors.stone.950');
  }
</style>
