<script context="module">
  // for passing focus on to the next Modal in the queue.
  // A module context level object is shared among all its component instances. [Read More Here](https://svelte.dev/tutorial/sharing-code)
  const modalList = []
</script>

<script>
  import {booleanStore} from '../store'
  import {fly} from 'svelte/transition';

  const state = booleanStore(false)
  const {current, open, close} = state

  function keydown(e) {
    e.stopPropagation()
    if (e.key === 'Escape') {
      close()
    }
  }

  function transitionend(e) {
    const node = e.target
    // let focused = document.activeElement
    let contain = modalList.some(el => el.contains(node))
    if (!contain) {
      node.focus()
    }
  }

  function modalAction(node) {
    const returnFn = []
    // for accessibility
    if (document.body.style.overflow !== 'hidden') {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      returnFn.push(() => {
        document.body.style.overflow = original
      })
    }
    node.addEventListener('keydown', keydown)
    focusTrap(node)
    modalList.push(node)
    returnFn.push(() => {
      node.removeEventListener('keydown', keydown)
      modalList.pop()
      // Optional chaining to guard against empty array.
      modalList[modalList.length - 1]?.focus()
    })
    return {
      destroy: () => returnFn.forEach((fn) => fn()),
    }
  }

  function focusTrap(element) {
    const focusableElements = getFocusableElements(element)
    const firstFocusableEl = focusableElements[0]
    const lastFocusableEl = focusableElements[focusableElements.length - 1]

    // Wait for the case the element was not yet rendered
    setTimeout(() => firstFocusableEl.focus(), 50)

    function getFocusableElements(element = document) {
      return [
        ...element.querySelectorAll(
          'a, button, details, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ),
      ].filter((e) => !e.hasAttribute('disabled'))
    }

    function handleKeyDown(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus()
            e.preventDefault()
          }
        }
      }
    }

    element.addEventListener('keydown', handleKeyDown)

    return function cleanup() {
      element.removeEventListener('keydown', handleKeyDown)
    }
  }

</script>

<style>
    div.modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
    }

    div.modal:not(:focus-within) {
        transition: opacity 0.1ms;
        opacity: 0.99;
    }

    div.backdrop {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    div.content-wrapper {
        z-index: 100;
        max-width: 100vw;
        overflow: hidden;
    }
</style>

<slot name="trigger" {open} />

{#if $current}
  <div class="modal" use:modalAction tabindex="0">
    <div class="backdrop" on:click={close} transition:fly="{{ duration: 200, delay: 30 }}">
      <slot name="backdrop" />
    </div>

    <div class="content-wrapper" transition:fly="{{ y: 50, duration: 200 }}">
      <slot name="content" {close} />
    </div>
  </div>
{/if}
