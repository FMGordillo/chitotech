<script>
  import { _ } from "svelte-i18n";
  import Logo from "./Logo.svelte";

  const year = new Date().getFullYear();
</script>

<footer class="footer mb-16">
  <div class="column">
    <div class="row mb-2">
      <div class="title-container">
        <h4><strong>Company</strong></h4>
      </div>
    </div>
    <div class="row">
      <p>ChiroTech @ {year}</p>
    </div>
    <div class="row flex gap-4">
      <a
        href="mailto:facundo@chirotech.dev"
        target="_blank"
        rel="noreferrer
        noopener"
      >
        <img alt="Email" class="h-8 w-8" src="/mail_icon.svg" />
      </a>
      <a
        href="https://www.linkedin.com/company/chirotech-dev"
        target="_blank"
        rel="noreferrer
        noopener"
      >
        <img alt="Linkedin" class="h-8 w-8" src="/linkedin_icon.svg" />
      </a>
    </div>
  </div>
  <div class="column">
    <div class="row mb-2">
      <div class="title-container">
        <h4><strong>Locations</strong></h4>
      </div>
    </div>
    <div class="row">
      <ul>
        <li>{$_("spain-street")}</li>
        <li>{$_("arg-street")}</li>
      </ul>
    </div>
  </div>
</footer>

<style>
  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 100px;
  }
  .row {
    margin-top: 1rem;
  }
  .column {
    min-width: 150px;
  }
  .title-container {
    border-bottom: 2px solid #08fcfe;
    width: fit-content;
  }
  .row ul li {
    margin-top: 15px;
  }
  @media (width < 600px) {
    .footer {
      flex-direction: column;
      height: fit-content;
    }
    .column:not(:last-child) {
      margin-bottom: 20px;
    }
  }
</style>
