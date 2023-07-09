<script lang="ts">
    import  clipboard  from "../assets/clipboard.svg"
    let mock = [] as any;
</script>

<section>
    <div>
        <div>
            <p>Tarefas criadas</p>
            <div>
                <span>0</span>
            </div>
            
        </div>
        <div>
            <p>Tarefas concluídas</p>
            <div>
                <span>0</span>
            </div>
        </div>
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

        :nth-child(1){
            display: flex;
            justify-content: space-between;
            align-items: center;

            :nth-child(1){
                display: flex;
                align-items: center;
                gap: 12px;
                
                p{
                    font-size: clamp(0.5rem, 4vw, 1rem);
                    font-weight: 700;
                    color: #4EA8DE;
                }

                div{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #333;
                    border-radius: 100%;
                    width: 20px;
                    height: 20px;
                    span{
                        font-weight: 400;
                        font-size: clamp(0.5rem, 4.5vw, 1rem);
                        color: #cdcdcd;
                    }
                }    
            }

            :nth-child(2){
                display: flex;
                align-items: center;
                gap: 12px;
                
                p{
                    font-size: clamp(0.5rem, 4vw, 1rem);
                    font-weight: 700;
                    color: #5E60CE;
                }

                div{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #333;
                    border-radius: 100%;
                    width: 20px;
                    height: 20px;
                    span{
                        font-weight: 400;
                        font-size: clamp(0.5rem, 4.5vw, 1rem);
                        color: #cdcdcd;
                    }
                }    
            }
        }     
    }

    .empty-list{
        display: flex;
        flex-direction: column;
        gap:10px
    }
</style>