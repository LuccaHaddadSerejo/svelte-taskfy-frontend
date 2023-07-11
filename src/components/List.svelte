<script lang="ts">
  import { type iTask } from "../interfaces/tasks.";
  import { dndzone } from "svelte-dnd-action";
  import Card from "./Card.svelte";

  export let items: iTask[];

  function handleConsider(e: CustomEvent<DndEvent<iTask>>) {
    items = e.detail.items;
  }

  function handleFinalize(e: CustomEvent<DndEvent<iTask>>) {
    items = e.detail.items;
  }
</script>

<ul
  use:dndzone={{ items: items }}
  on:consider={handleConsider}
  on:finalize={handleFinalize}
>
  {#each items as item (item.id)}
    <Card
      title={item.title}
      key={item.id}
      completed={item.done}
      subtasks={item.subtasks}
    />
  {/each}
</ul>

<style lang="scss">
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
