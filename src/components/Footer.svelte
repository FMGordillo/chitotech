<script>
import { _ } from 'svelte-i18n'
  import Logo from "./Logo.svelte";
</script>

<!-- <p class="company-title"><strong>Company</strong></p>
<div class="flex flex-row items-center jusitfy-start">
  <div class="w-2/4">
    <Logo/>
  </div>
  <p class="w-2/4"><strong class="footer-org-name">ChiroTech</strong> @2023</p>
</div>
<p class="locations-title"><strong>Locations</strong></p>
<div class="">
  
</div> -->

<footer class="footer">
  <div class="column">
    <div class="row mb-2">
      <div class="title-container">
        <h4><strong>Company</strong></h4>
      </div>
    </div>
    <div class="row">
      <p>ChiroTech @2023</p>
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
    height: 100px
  }
  .row{
    margin-top: 1rem;
  }
  .column {
    min-width: 150px;
  }
  .title-container {
    border-bottom: 2px solid #08fcfe;
    width: fit-content;
  }
  .row ul li{
    margin-top: 15px;
  }
  @media (width < 600px){
    .footer{
      flex-direction: column;
      height: fit-content;
    }
    .column:not(:last-child){
      margin-bottom: 20px;
    }

  }
</style>