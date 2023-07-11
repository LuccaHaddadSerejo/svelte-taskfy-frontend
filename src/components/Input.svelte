<script lang="ts">
  export let placeholder: string = undefined;
  export let inputheader: boolean = false;
  export let inputnewtask: boolean = false;
  export let inputedittitle: boolean = false;
  export let value: string = undefined;
</script>

<input
  class="input"
  class:inputheader
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
    background-color: #262626;
    padding: 1rem;

    &:focus {
      outline: none;
      background-color: #dcdcdc;
    }

    &::placeholder {
      color: #dcdcdc;
      font-size: 0.875rem;
    }
  }

  .inputheader {
    width: min(100%, 850px);
    height: 45px;
    border: transparent;
  }

  .inputnewtask {
    width: min(100%, 600px);
    border-radius: 8px;
    border: 1px solid #0d0d0d;
  }

  .inputedittitle {
    background-color: #dcdcdc;
    width: min(100%);
    border-radius: 8px;
    border: 1px solid #0d0d0d;

    &:focus {
      outline: none;
    }
  }
</style>
