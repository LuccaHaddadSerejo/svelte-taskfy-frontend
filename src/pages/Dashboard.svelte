<script lang="ts">
  import Header from "../components/Header.svelte";
  import NewTask from "../components/NewTask.svelte";
  import EmptyList from "../components/EmptyList.svelte";
  import TaskCount from "../components/TaskCount.svelte";
  import List from "../components/List.svelte";
  import { getTasks } from "../api";
  import { refreshTasks, done, pending } from "../store";
  import { afterUpdate, onMount } from "svelte";
  import { type iTask } from "../interfaces/tasks.";
  import Filter from "../components/Filter.svelte";

  let tasks: iTask[] = [];

  $: doneTasks = tasks.filter((task: iTask) => task.done);
  $: pendingTasks = tasks.filter((task: iTask) => !task.done);

  const fetchTasks = async () => {
    tasks = await getTasks();
  };

  $: {
    if ($refreshTasks) {
      fetchTasks();
      $refreshTasks = false;
    }
  }

  onMount(fetchTasks);
  afterUpdate(fetchTasks);
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
        createdTasksValue={tasks.length}
      />
      <TaskCount
        text={"Tarefas concluídas"}
        done
        purple
        doneTasksValue={doneTasks.length}
      />
    </div>
    <div>
      {#if $done}
        {#if doneTasks.length > 0}
          <List tasks={doneTasks} />
        {:else}
          <EmptyList />
        {/if}
      {/if}
      {#if $pending}
        {#if pendingTasks.length > 0}
          <List tasks={pendingTasks} />
        {:else}
          <EmptyList />
        {/if}
      {/if}
      {#if $done === false && $pending === false}
        {#if tasks.length > 0}
          <List {tasks} />
        {:else}
          <EmptyList />
        {/if}
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
