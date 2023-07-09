<script lang="ts">
    import {refreshTasks } from '../store';
    import { onMount } from "svelte";
    import Card from "./Card.svelte";
    import { getTasks } from "../api";
    import {type iTask} from "../interfaces/tasks."

    let tasks: iTask[] = [];

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
</script>

<ul>
    {#each tasks as task}
        <Card title={task.title}/>
    {/each}  
</ul>

<style lang="scss">
    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }   
</style>