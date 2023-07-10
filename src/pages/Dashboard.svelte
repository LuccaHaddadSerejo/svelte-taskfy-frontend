<script lang="ts">
    import Header from "../components/Header.svelte";
    import NewTask from "../components/NewTask.svelte";
    import EmptyList from "../components/EmptyList.svelte";
    import TaskCount from "../components/TaskCount.svelte";
    import List from "../components/List.svelte";
    import { getTasks } from "../api";
    import { refreshTasks } from '../store';
    import { afterUpdate, onMount} from "svelte";
    import {type iTask} from "../interfaces/tasks."
    
    let tasks: iTask[] = [];
    $: doneTasks = tasks.filter((task: iTask) => task.done)
    
    const fetchTasks = async () => {
        tasks = await getTasks();
    };

    $: {
        if ($refreshTasks) {
            fetchTasks();
            $refreshTasks = false;
        }
    }

    onMount(fetchTasks)
    afterUpdate(fetchTasks)
</script>

<Header/>
<main>
    <section>
        <NewTask/>
    </section>
    <section>
        <div>
            <TaskCount text={"Tarefas criadas"} blue createdTasksValue={tasks.length}/>
            <TaskCount text={"Tarefas concluídas"} done purple doneTasksValue={doneTasks.length}/>
        </div>
    <div>
        {#if tasks.length > 0}
            <List tasks={tasks}/>
        {:else}
            <EmptyList/>
        {/if} 
    </div>
    </section>
</main>


<style lang="scss">
    main{
        margin: 0 auto;
        width: min(90%, 1400px);

        :nth-child(2){
            width: min(100%, 900px);
            margin: 0 auto;
            margin-top: 3rem;
    
            :nth-child(1){
                display: flex;
                justify-content: space-between;
                align-items: center; 
            }
        }
    }
</style>

