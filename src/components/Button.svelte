<script lang="ts">
  export let img: boolean = false;
  export let text: boolean = false;
  export let src: string = undefined;
  export let alt: string = undefined;
  export let buttonheader: boolean = false;
  export let buttonnewtask: boolean = false;
  export let buttonaddnewsubtask: boolean = false;
  export let buttonsnewsubstaskdiv: boolean = false;
  export let buttonssubtask: boolean = false;
  export let buttonedittask: boolean = false;
  export let buttonfilter: boolean = false;
  export let buttonclearfilter: boolean = false;
  export let imgheader: boolean = false;
  export let trash: boolean = false;
  export let editAndArrowButton: boolean = false;
  export let disabled: boolean = false;
  export let content: string = undefined;
</script>

<button
  {disabled}
  class="button"
  class:buttonheader
  class:buttonnewtask
  class:buttonaddnewsubtask
  class:buttonsnewsubstaskdiv
  class:buttonssubtask
  class:buttonedittask
  class:buttonfilter
  class:buttonclearfilter
  class:disabled
  on:click
>
  {#if text}
    {content}
  {/if}
  {#if img}
    <img class:imgheader class:trash class:editAndArrowButton {src} {alt} />
  {/if}
</button>

<style lang="scss">
  .button {
    display: inline-flex;
    align-items: center;
    background-color: transparent;
    font-weight: var(--font-weight-2);

    &:hover {
      filter: brightness(1.2);
      transition: all 0.5s;
    }
  }

  .disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .buttonheader {
    justify-content: center;
    padding: var(--padding-4);
    background-color: transparent;
    height: var(--height-1);
    position: relative;
    z-index: 1;
  }

  .imgheader {
    background-color: transparent;
    height: clamp(1rem, 6vw, 1.8rem);
  }

  .buttonnewtask {
    gap: var(--gap-2);
    color: #000000;
    background-color: var(--color-primary);
    border-radius: var(--radius-1);
    padding: var(--padding-2);
    height: var(--height-1);
  }

  .trash {
    width: 34px;
    position: relative;
    top: 2px;
  }

  .editAndArrowButton {
    width: 27px;
    height: 27px;
    filter: brightness(1.2);
  }

  .buttonaddnewsubtask {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    color: var(--color-secondary);
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
    font-weight: var(--font-weight-1);
  }

  .buttonsnewsubstaskdiv {
    color: #000000;
    background-color: var(--color-primary);
    border-radius: var(--radius-1);
    padding: var(--padding-4);
    min-width: 53px;
    justify-content: center;
  }

  .buttonssubtask {
    text-decoration: underline;
    color: var(--color-primary);
    height: 25px;
  }

  .buttonedittask {
    justify-content: center;
    text-decoration: underline;
    color: var(--color-primary);
    height: 40px;
    font-weight: var(--font-weight-1);
  }

  .buttonfilter {
    padding: clamp(0.6rem, 0.8vw, 1.5rem);
    border-radius: var(--radius-1);
    color: #000000;
    background-color: var(--color-primary);
  }

  .buttonclearfilter {
    padding: clamp(0.6rem, 0.8vw, 1.5rem);
    border-radius: var(--radius-1);
    color: #000000;
    background-color: var(--color-secondary);
  }
</style>
