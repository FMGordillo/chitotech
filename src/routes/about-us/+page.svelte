<script>
  import { _ } from "svelte-i18n";
  import Header from "../../components/Header.svelte";
</script>

<head>
  <title>About us - Chiro Tech - Software Consultancy</title>
  <meta
    name="description"
    content="Top-notch Software Consultancy in Health, Finance and Legal"
  />

  <meta property="og:title" content="Chiro Tech - Software Consultancy" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://chirotech.dev" />
  <meta
    property="og:image"
    content="https://chirotech.dev/twitter_thumbnail.png"
  />
  <meta
    property="og:description"
    content="Top-notch Software Consultancy in Health, Finance and Legal"
  />

  <meta name="twitter:card" value="summary" />
  <meta
    name="twitter:image"
    value="https://chirotech.dev/twitter_large_image.png"
  />
</head>

<Header />

<section class="relative isolate mb-8 flex h-96 flex-col items-center justify-center">
  <div
    class="absolute inset-0 z-0 bg-[url(/mission_background.gif)] bg-cover opacity-50"
  />
  <div class="absolute z-10 flex flex-col items-center justify-center">
    <h2 class="mb-1 text-3xl font-bold">{$_("about-us.mission-title")}</h2>
    <p class="max-w-prose text-xl">{$_("about-us.mission")}</p>
  </div>
</section>

<section class="flex flex-col items-center justify-center">
  <h2 class="mb-8 text-3xl font-bold">{$_("about-us.timeline-title")}</h2>

  <ol
    class="container relative max-w-lg border-s border-gray-200 dark:border-gray-700"
  >
    <li class="mb-10 ms-4">
      <div
        class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
      ></div>
      <time
        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
        >2023</time
      >
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        {$_("about-us.timeline-1-title")}
      </h3>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        {$_("about-us.timeline-1-description")}
      </p>
    </li>
    <li class="mb-10 ms-4">
      <div
        class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
      ></div>
      <time
        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
        >2020</time
      >
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        {$_("about-us.timeline-2-title")}
      </h3>
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {$_("about-us.timeline-2-description")}
      </p>
      <a
        href="https://favforme.chirotech.dev"
        target="_blank"
        class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >{$_("about-us.timeline-2-button")}
        <svg
          class="ms-2 h-3 w-3 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg></a
      >
    </li>
    <li class="ms-4">
      <div
        class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
      ></div>
      <time
        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
        >2020</time
      >
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        {$_("about-us.timeline-3-title")}
      </h3>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        {$_("about-us.timeline-3-description")}
      </p>
    </li>
  </ol>
</section>

<footer class="relative isolate mt-8 flex h-96 flex-col items-center justify-center">
  <div
    class="absolute inset-0 z-0 bg-[url(/mission_footer_background.gif)] bg-cover opacity-50"
  />
  <div class="absolute z-10 flex flex-col items-center justify-center">
    <h2 class="mb-4 text-3xl font-bold">{$_("about-us.footer-title")}</h2>

    <div class="flex gap-4">
      <a
        class="rounded-lg border px-5 py-3 ring-cyan-500 transition-all hover:cursor-pointer hover:bg-cyan-400/20 focus:ring"
        target="_blank"
        href="https://meetings-eu1.hubspot.com/facundo-gordillo"
        >{$_("about-us.footer-meeting")}</a
      >
      <a
        class="rounded-lg px-5 py-3 ring-cyan-500 transition-all hover:cursor-pointer hover:bg-cyan-400/20 focus:ring"
        href="mailto:facundo@chirotech.dev">{$_("about-us.footer-mail")}</a
      >
    </div>
  </div>
</footer>

<!-- <section class="flex h-96 flex-col items-center"> -->
<!--   <h2>Our team</h2> -->
<!--   <div class="flex max-w-lg gap-4"> -->
<!--     <div class="w-1/2"> -->
<!--       <img src="/facu_ai.jpeg" alt="" /> -->
<!--       <span>saofdj</span> -->
<!--     </div> -->
<!--     <div class="w-1/2"> -->
<!--       <img src="/mati_ai.jpeg" alt="" /> -->
<!--     </div> -->
<!--   </div> -->
<!-- </section> -->
