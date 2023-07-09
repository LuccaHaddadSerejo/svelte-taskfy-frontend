<script lang="ts">
    import  clipboard  from "../assets/clipboard.svg"
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
                    <!-- <ul>
                        <li>
                            <input type="checkbox">
                            <h3>Título Subtask</h3>
                            <button>Editar</button>
                            <button>Excluir</button>
                        </li>
                    </ul> -->
                </li>
            </ul>
        {:else}
            <div class="empty-list">
                <img src="{clipboard}" alt="Imagem de uma prancheta">
                <p>Você ainda não tem tarefas cadastradas</p>
                <p> Crie tarefas e organize seus itens a fazer</p>
            </div>
        {/if} 
    </div>
</section>

<style lang="scss">
    section{
        width: min(100%, 900px);
        margin: 0 auto;
        margin-top: 2rem;
        border: 2px solid white;

        div{
            display: flex;
            justify-content: space-between;
            align-items: center; 
        }
    }

    .empty-list{
        display: flex;
        flex-direction: column;
        gap:10px
    }
</style>