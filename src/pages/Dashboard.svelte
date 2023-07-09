<script lang="ts">
    import Header from "../components/Header.svelte";
    import NewTask from "../components/NewTask.svelte";
    import EmptyList from "../components/EmptyList.svelte";
    import TaskCount from "../components/TaskCount.svelte";
    import List from "../components/List.svelte";
    let mock = [1] as any;
</script>

<Header/>
<main>
    <section>
        <NewTask/>
    </section>
    <section>
        <div>
            <TaskCount text={"Tarefas criadas"} blue createdTasksValue={mock.length}/>
            <TaskCount text={"Tarefas concluídas"} done purple doneTasksValue={mock.length}/>
        </div>
    <div>
        {#if mock.length > 0}
            <List/>
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

