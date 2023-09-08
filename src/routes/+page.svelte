<script>
  const CALENDLY_URL = "https://calendly.com/lpc-squad-temporal/30min";
</script>

<head>
  <title>Chiro Tech - Software Consultancy</title>
</head>

<main class="">
  <header
    class="fixed inset-x-0 top-0 z-10 mx-auto flex justify-between bg-zinc-950 p-4"
  >
    <div class="flex items-center gap-2">
      <img class="w-10" alt="Logo" src="/logo.png" />
      <span class="hidden sm:block font-bold">ChiroTech</span>
    </div>
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noreferrer noopener"
      class="rounded-md border-2 border-gray-300 bg-gray-700 px-8 py-4 text-xl hover:bg-cyan-800"
      >Charlemos</a
    >
  </header>

  <section class="relative inset-x-0 isolate h-screen bg-slate-900 pb-14">
    <video class="absolute z-0 h-full w-full object-cover" autoplay muted loop>
      <source src="/background.mp4" />
    </video>

    <div
      class="absolute inset-0 bg-gradient-to-t from-transparent to-zinc-700 mix-blend-multiply"
    />

    <div
      class="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-10"
    >

      <div class="flex flex-col sm:hidden items-center gap-4">
        <img class="w-20 md:w-24 lg:w-32" alt="Logo" src="/logo.png" />
        <h1 class="text-5xl font-extrabold md:text-6xl lg:text-8xl">
          ChiroTech
        </h1>
      </div>

      <div class="hidden sm:flex items-center gap-4">
        <img class="w-20 md:w-24 lg:w-32" alt="Logo" src="/logo.png" />
        <h1 class="text-5xl font-extrabold md:text-6xl lg:text-8xl">
          ChiroTech
        </h1>
        <img class="w-20 md:w-24 lg:w-32" alt="Logo" src="/logo.png" />
      </div>

      <p class="text-center text-lg md:text-left md:text-xl lg:text-3xl">
        Construyendo el futuro juntos: <strong>Un bloque a la vez</strong>
      </p>
    </div>

    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent
      to-stone-950"
    />
  </section>

  <section class="flex h-64 flex-col items-center justify-center">
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noreferrer noopener"
      class="rounded-md border-2 border-gray-300 bg-gray-700 px-8 py-4 text-xl hover:bg-cyan-800"
      >Charlemos</a
    >
  </section>

  <!-- <section class="flex justify-center basis-14 gap-8"> -->
  <!--   <div class="grid grid-cols-[24px_auto] gap-x-8 grid-rows-[auto_auto]"> -->
  <!--     <div class="flex rounded justify-center items-center w-12 h-12 bg-zinc-200 row-span-2"> -->
  <!--       <img class="w-6" alt="here" src="/icons/shield-half-outline.svg" /> -->
  <!--     </div> -->
  <!--     <h2>Blockchain</h2> -->
  <!--     <p>Building and deploying should be as easy as a single tap.</p> -->
  <!--   </div> -->
  <!--   <div> -->
  <!--     <img src="" /> -->
  <!--     <h2>Blockchain</h2> -->
  <!--     <p>Something here</p> -->
  <!--   </div> -->
  <!--   <div> -->
  <!--     <img src="" /> -->
  <!--     <h2>Blockchain</h2> -->
  <!--     <p>Something here</p> -->
  <!--   </div> -->
  <!-- </section> -->

  <section class="flex flex-col gap-8">
    <div
      class="relative grid h-80 grid-cols-[1fr]
      items-center sm:grid-cols-[2fr_1fr] md:grid-cols-[1fr_1fr]"
    >
      <div
        class="z-10 flex h-full flex-col justify-center gap-2 bg-gradient-to-r from-teal-950 to-transparent p-8"
      >
        <h1 class="border-l-2 border-teal-600 pl-5 text-xl font-bold">
          🔒 Innovación en Blockchain
        </h1>
        <p class="leading-relaxed text-neutral-300">
          Nuestro equipo domina la tecnología blockchain, creando contratos
          inteligentes y aplicaciones descentralizadas seguras que redefinen la
          confianza digital.
        </p>
      </div>
      <img
        class="absolute right-0 max-h-full"
        alt="blockchain"
        src="https://images.unsplash.com/photo-1639322537231-2f206e06af84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
      />
    </div>

    <div
      class="relative grid h-80 grid-cols-[1fr]
      items-center sm:grid-cols-[1fr_2fr] md:grid-cols-[1fr_1fr]"
    >
      <div
        class="z-10 col-start-2 flex h-full flex-col justify-center gap-2 bg-gradient-to-l
        from-sky-950 to-transparent p-8"
      >
        <h1 class="border-l-2 border-sky-500 pl-5 text-xl font-bold">
          🛡️ Protegiendo tus activos
        </h1>
        <p class="leading-relaxed text-neutral-300">
          Nos especializamos en fortalecer tus activos digitales contra amenazas
          cambiantes, implementando protocolos de seguridad de vanguardia para
          mantener tus sistemas y datos a salvo.
        </p>
      </div>
      <img
        alt="cybersecurity"
        class="absolute left-0 max-h-full"
        src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />
    </div>

    <div
      class="relative grid h-80 grid-cols-[1fr]
      items-center sm:grid-cols-[2fr_1fr] md:grid-cols-[1fr_1fr]"
    >
      <div
        class="z-10 flex h-full flex-col justify-center gap-2 bg-gradient-to-r
        from-red-950 to-transparent p-8"
      >
        <h1 class="border-l-2 border-red-600 pl-5 text-xl font-bold">
          🚀 Formando el Futuro
        </h1>
        <p class="leading-relaxed text-neutral-300">
          Con experiencias variadas en JavaScript, TypeScript y más, lideramos
          la innovación en Web3, HTMX y Svelte para llevar tus proyectos al
          siguiente nivel.
        </p>
      </div>
      <img
        alt="team meeting"
        class="absolute right-0 max-h-full"
        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />
    </div>
  </section>
</main>
