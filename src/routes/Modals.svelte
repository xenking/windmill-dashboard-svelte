<script>
  import Modal from "../components/Modal.svelte";

  let modal_elem;
</script>


<div class="container px-6 mx-auto grid">
  <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
    Modals
  </h2>
  <div class="max-w-2xl px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <p class="mb-4 text-gray-600 dark:text-gray-400">
      This is possibly
      <strong>the most accessible a modal can get</strong>
      , using JavaScript. When opened, it uses
      <code>assets/js/focus-trap.js</code>
      to create a
      <em>focus trap</em>
      , which means that if you use your keyboard to navigate around,
      focus won't leak to the elements behind, staying inside the
      modal in a loop, until you take any action.
    </p>

    <p class="text-gray-600 dark:text-gray-400">
      Also, on small screens it is placed at the bottom of the screen,
      to account for larger devices and make it easier to click the
      larger buttons.
    </p>
  </div>
  <div>
    <Modal >
      <button slot="trigger" let:open on:click={open}
          class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
        Open Modal
      </button>
      <div slot="backdrop"
          class="fixed inset-0 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center">
      </div>
      <div slot="content" let:close
          class="w-full px-6 py-4 z-40 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl z-40"
          role="dialog">
        <!-- Remove header if you don't want a close icon. Use modal body to place modal tile. -->
        <div class="flex justify-end">
          <button
              class="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
              aria-label="close" on:click={close}>
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" role="img" aria-hidden="true">
              <path
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="mt-4 mb-6">
          <!-- Modal title -->
          <p class="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Modal header
          </p>
          <!-- Modal description -->
          <p class="text-sm text-gray-700 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
            eligendi repudiandae voluptatem tempore!
          </p>
        </div>
        <div
            class="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
          <button on:click={close}
              class="w-full px-5 py-3 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
            Cancel
          </button>
          <button
              class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            Accept
          </button>
        </div>
      </div>
    </Modal>
  </div>
</div>