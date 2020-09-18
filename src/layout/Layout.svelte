<script>
  import SideBar from "./SideBar.svelte";
  import HeaderBar from "./HeaderBar.svelte";
  import BodyRouter from "../BodyRouter.svelte";
  import {getContext} from 'svelte'

  const mobile = getContext('mobile')
  let {current} = mobile;
  let button_theme;
  let button_menu;
</script>

<div class="flex h-screen bg-gray-50 dark:bg-gray-900" class:overflow-hidden="{$current}">
  <SideBar exclude={[button_menu, button_theme]} />
  <div class="flex flex-col flex-1">
    <HeaderBar bind:button_theme bind:button_menu />
    <div class="h-full pb-16 overflow-y-auto">
      <BodyRouter />
    </div>
  </div>
</div>
