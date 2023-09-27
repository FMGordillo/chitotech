<script>
import { _ } from 'svelte-i18n'
  import Logo from "./Logo.svelte";

</script>

<footer class="flex items-center justify-around h-20">
    <Logo/>
    <p>
      @2023 <strong>ChiroTech</strong> - {$_("rights")}
    </p>
 </footer>