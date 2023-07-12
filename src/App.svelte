<script lang="ts">
  import Dashboard from "./pages/Dashboard.svelte";
</script>

<Dashboard />

<style lang="scss">
  :global(:root) {
    --color-primary: #4ea8de;
    --color-secondary: #5e60ce;
    --color-gray-1: #0d0d0d;
    --color-gray-2: #262626;
    --color-gray-3: #454545;
    --color-gray-4: #dcdcdc;

    --font-size-1: clamp(2.5rem, 7vw, 3rem);
    --font-size-2: clamp(0.8rem, 4.5vw, 1.4rem);
    --font-size-3: clamp(0.5rem, 4vw, 1.2rem);

    --font-weight-1: 700;
    --font-weight-2: 600;
    --font-weight-3: 400;

    --radius-1: 8px;

    --gap-1: 1rem;
    --gap-2: 0.5rem;
    --gap-3: 0.625rem;

    --height-1: 48px;
    --height-2: 45px;

    --padding-1: 1.25rem;
    --padding-2: 1rem;
    --padding-3: 0.625rem;
    --padding-4: 0.5rem;

    --placeholder-1: 0.875rem;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }
  :global(ol, ul) {
    list-style: none;
  }
  :global(button) {
    cursor: pointer;
  }
  :global(body) {
    background-color: #1a1a1a;
  }
</style>
