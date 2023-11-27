<script>
  export let onClick;
</script>

<a
  on:click={onClick}
  class="min-w-[180px] rounded-md border-2 border-black ring-cyan-600 bg-cyan-800 p-4 text-center drop-shadow-sm transition-all hover:border-white active:ring"
  {...$$props}><slot /></a
>
