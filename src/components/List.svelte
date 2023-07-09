<script lang="ts">
    import EmptyList from "./EmptyList.svelte";
    import TaskCount from "./TaskCount.svelte";
    let mock = [] as any;
</script>

<section>
    <div>
        <TaskCount text={"Tarefas criadas"} blue createdTasksValue={mock.length}/>
        <TaskCount text={"Tarefas concluídas"} done purple doneTasksValue={mock.length}/>
    </div>
    <div>
        {#if mock.length > 0}
            <ul>
                <li>
                    <input type="checkbox">
                    <h3>Título Task</h3>
                    <button>Editar</button>
                    <button>Excluir</button>
                    <ul>
                        <li>
                            <input type="checkbox">
                            <h3>Título Subtask</h3>
                            <button>Editar</button>
                            <button>Excluir</button>
                        </li>
                    </ul>
                </li>
            </ul>
        {:else}
            <EmptyList/>
        {/if} 
    </div>
</section>

<style lang="scss">
    section{
        width: min(100%, 900px);
        margin: 0 auto;
        margin-top: 3rem;

        :nth-child(1){
            display: flex;
            justify-content: space-between;
            align-items: center; 
        }
    }
</style>