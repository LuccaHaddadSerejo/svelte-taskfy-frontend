<script lang="ts">
  import Header from "../components/Header.svelte";
  import NewTask from "../components/NewTask.svelte";
  import EmptyList from "../components/EmptyList.svelte";
  import TaskCount from "../components/TaskCount.svelte";
  import List from "../components/List.svelte";
  import Filter from "../components/Filter.svelte";
  import { storeTasks, fetchTasks, done, pending } from "../store";
  import { onMount } from "svelte";
  import type { iTask } from "../interfaces/tasks.";

  let doneTasks: iTask[] = [];
  let pendingTasks: iTask[] = [];

  $: {
    if ($storeTasks) {
      if ($done) {
        doneTasks = $storeTasks.filter((task: iTask) => task.done);
      }

      if ($pending) {
        pendingTasks = $storeTasks.filter((task: iTask) => !task.done);
      }
    }
  }

  onMount(async () => {
    await fetchTasks();
  });
</script>

<Header />
<main>
  <section>
    <NewTask />
  </section>
  <section>
    <Filter />
  </section>
  <section class="sectionthree">
    <div class="sectionthreedivone">
      <TaskCount
        text={"Tarefas criadas"}
        blue
        createdTasksValue={$storeTasks.length}
      />
      <TaskCount
        text={"Tarefas concluídas"}
        done
        purple
        doneTasksValue={doneTasks.length}
      />
    </div>
    <div>
      {#if $done && doneTasks.length > 0}
        <List items={doneTasks} />
      {:else if $pending && pendingTasks.length > 0}
        <List items={pendingTasks} />
      {:else if !$done && !$pending && $storeTasks.length > 0}
        <List items={$storeTasks} />
      {:else}
        <EmptyList />
      {/if}
    </div>
  </section>
</main>

<style lang="scss">
  main {
    margin: 0 auto;
    width: min(90%, 1400px);
  }

  .sectionthree {
    width: min(100%, 900px);
    margin: 0 auto;
    margin-top: 3rem;
  }

  .sectionthreedivone {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
</style>
