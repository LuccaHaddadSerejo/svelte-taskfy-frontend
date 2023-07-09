<script lang="ts">
    import {type iTask} from "../interfaces/tasks."
    import Card from "./Card.svelte";
    export let tasks: iTask[] = []

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