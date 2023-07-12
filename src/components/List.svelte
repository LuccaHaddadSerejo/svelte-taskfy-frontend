<script lang="ts">
  import { type iTask } from "../interfaces/tasks.";
  import { dndzone } from "svelte-dnd-action";
  import { flip } from "svelte/animate";
  import Card from "./Card.svelte";

  export let items: iTask[];
  const flipDurationMs = 200;

  /*
    Função que é executada com o drag do item.
  */

  function handleConsider(e: CustomEvent<DndEvent<iTask>>) {
    items = e.detail.items;
  }

  /*
    Função que é executada com o drop do item.
  */

  function handleFinalize(e: CustomEvent<DndEvent<iTask>>) {
    items = e.detail.items;
  }
</script>

<ul
  use:dndzone={{
    items,
    flipDurationMs,
  }}
  on:consider={handleConsider}
  on:finalize={handleFinalize}
>
  {#each items as item (item.id)}
    <div animate:flip={{ duration: flipDurationMs }}>
      <Card
        title={item.title}
        key={item.id}
        completed={item.done}
        subtasks={item.subtasks}
      />
    </div>
  {/each}
</ul>

<style lang="scss">
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px;
  }
</style>
