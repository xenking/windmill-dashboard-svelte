<script>
  import {getContext} from 'svelte'
  import ThemeToggle from "./ThemeToggle.svelte";
  import NotificationsMenu from "./NotificationsMenu.svelte";
  import ProfileMenu from "./ProfileMenu.svelte";
  import Search from "./Search.svelte";

  export let button_theme;
  export let button_menu;

  const mobile = getContext('mobile');
  const {current, toggle} = mobile;
</script>
<div class="z-10 py-4 bg-white shadow-md md:z-0 dark:bg-gray-800">
  <div
      class="container flex items-center justify-between h-full px-6 md:pl-1 mx-auto text-purple-600 dark:text-purple-300">
    <!-- Mobile hamburger -->
    <button class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
        on:click={toggle}
        bind:this={button_menu}
        aria-label="Menu">
      <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
      >
        <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <Search />
    <ul class="flex items-center flex-shrink-0 space-x-6">
      <li class="flex">
        <ThemeToggle bind:button_theme={button_theme} />
      </li>
      <li class="relative">
        <NotificationsMenu exclude={[button_theme]} />
      </li>
      <!-- Profile menu -->
      <li class="relative">
        <ProfileMenu exclude={[button_theme]} />
      </li>
    </ul>
  </div>
</div>