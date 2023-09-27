<script>
  export let onClick;
</script>
<a on:click={onClick} class="text-center border-2 border-black drop-shadow-sm min-w-[180px]
  rounded-md bg-cyan-800 px-4 py-4" {...$$props}><slot /></a>

  <style>
    a{
      /* transition: outline 0.1s linear; */
    }
    a:hover{
      outline: 2px solid white;
    }
  </style>

