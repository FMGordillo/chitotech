<script>
  import "../app.css";
</script>

<slot />

<style>
  :global(body) {
    color: theme('colors.gray.50');
    background: theme('colors.blue.950');
  }
</style>
