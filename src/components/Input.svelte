<script lang="ts">
  export let placeholder: string = undefined;
  export let inputnewtask: boolean = false;
  export let inputedittitle: boolean = false;
  export let value: string = undefined;
</script>

<input
  class="input"
  class:inputnewtask
  class:inputedittitle
  type="text"
  {placeholder}
  on:blur
  on:focus
  bind:value
/>

<style lang="scss">
  .input {
    background-color: var(--color-gray-2);
    padding: var(--padding-2);

    &:focus {
      outline: none;
      background-color: var(--color-gray-4);
    }

    &::placeholder {
      color: var(--color-gray-4);
      font-size: var(--placeholder-1);
    }
  }

  .inputnewtask {
    width: min(100%, 600px);
    border-radius: var(--radius-1);
    border: 1px solid var(--color-gray-1);
  }

  .inputedittitle {
    background-color: var(--color-gray-4);
    width: min(100%);
    border-radius: var(--radius-1);
    border: 1px solid var(--color-gray-1);
  }
</style>
