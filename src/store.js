import {writable as writableLocal} from 'svelte-persistent-store/dist/local'
  import {writable} from 'svelte/store';

export function booleanLocalStore(key, initial) {
  const value = writableLocal(key, initial)
  const {set, update} = value
  return {
    current: value,
    open: () => set(true),
    close: () => set(false),
    toggle: () => update((n) => !n),
  }
}

export function booleanStore(initial) {
  const value = writable(initial)
  const {set, update} = value
  return {
    current: value,
    open: () => set(true),
    close: () => set(false),
    toggle: () => update((n) => !n),
  }
}