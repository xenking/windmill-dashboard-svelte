<script>
  import ClickOutside from "svelte-click-outside";
  import {booleanStore} from '../store'
  import {fly} from "svelte/transition";

  export let exclude = [];
  export let transition = {};

  const state = booleanStore(false)
  const {current, open, close, toggle} = state
  let trigger;

</script>

<div bind:this={trigger}>
  <slot name="trigger" {close} {toggle} />
</div>

{#if $current}
  <ClickOutside on:clickoutside={close} exclude={[trigger, ...exclude]}
      on:keydown={({keyCode}) => keyCode === 27 ? close(): ''}>
    <div transition:fly="{transition}">
      <slot name="content" {current} />
    </div>
  </ClickOutside>
{/if}
