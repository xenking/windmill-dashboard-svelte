<script>
  import { setContext } from 'svelte'
  import Tailwind from "./components/Tailwind.svelte"
  import Layout from "./layout/Layout.svelte";
  import AppRouter from "./AppRouter.svelte";
  import {booleanLocalStore} from "./store";

  const theme = booleanLocalStore('theme', false)
  const mobile = booleanLocalStore('mobile',false)

  let {current} = theme

  setContext('theme', theme)
  setContext('mobile', mobile)
</script>

<Tailwind />

<main>
  <div class:theme-dark="{$current}">
    <AppRouter>
      <Layout />
    </AppRouter>
  </div>
</main>
