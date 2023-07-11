<script lang="ts">
  import { type iTask } from "../interfaces/tasks.";
  import Card from "./Card.svelte";
  export let tasks: iTask[] = [];
</script>

<ul>
  {#each tasks as task (task.id)}
    <Card title={task.title} key={task.id} subtasks={task.subtasks} />
  {/each}
</ul>

<style lang="scss">
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-height: 800px;
    overflow-y: auto;
  }
</style>
