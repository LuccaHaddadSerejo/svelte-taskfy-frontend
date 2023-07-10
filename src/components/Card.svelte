<script lang="ts">
    import arrowdown  from "../assets/arrowdown.svg" 
    import arrowup  from "../assets/arrowup.svg" 
    import pluspurple  from "../assets/plusPurple.svg" 
    import trash  from "../assets/trash.svg" 
    import editTask  from "../assets/edit.svg" 
    import SubtaskCard from "./SubtaskCard.svelte";
    import Button from "./Button.svelte";
    import Input from "./Input.svelte"
    import { deleteTask } from "../api";
    import { handleTasksFetched } from "../store";

    let newSubtask: boolean = false;
    let direction: boolean = false;
    $: arrow = direction ? arrowup : arrowdown 

    const toogleDirection = () => direction = !direction
    const toogleAddSubtask = () => newSubtask = !newSubtask

    export let title:string;
    export let key:number;


    const handleDeleteClick = async () => {
        deleteTask(key)
        handleTasksFetched();
    }
</script>


<li>
    <div class="contentdiv">
        <div class="tasktitle">  
            <input type="checkbox">  
            <h2>{title}</h2>
        </div>
        <div class="taskbuttons">
            <div class="taskbuttonsone">
                <Button img src={editTask} editAndArrowButton alt={"Imagem de uma caneta e uma prancheta"}/>
                <Button on:click={handleDeleteClick} img src={trash} trash alt={"Imagem de um lixo"}/>       
            </div>
            <Button on:click={toogleDirection} img src={arrow} editAndArrowButton alt={"Imagem de uma seta"}/>
    </div>
    </div>
    {#if arrow === arrowup}
        <ul>
            <SubtaskCard/>
            <SubtaskCard/>
            <SubtaskCard/>
        </ul>
        <div>
            {#if !newSubtask}
            <div class="addsubtaskdiv">  
                <Button on:click={() => toogleAddSubtask()} img text buttonaddnewsubtask content={"Adicionar subtask"} src={pluspurple} alt="Imagem de um símbolo de mais"/>
            </div>
            {:else}
            <div class="newsubtaskdiv">
                <Input inputnewtask placeholder={"Adicione uma subtask"}/>
                <Button on:click={() => toogleAddSubtask()} text buttonsnewsubstaskdiv content={"Criar"}/>
                <Button on:click={() => toogleAddSubtask()} text buttonsnewsubstaskdiv content={"Voltar"}/>
            </div>
            {/if}
        </div>
    {/if}
</li>
<style lang="scss">
    li{
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: space-between;
        background-color: #262626;
        border-radius: 8px;
        padding: 2rem 1rem 2rem 1rem;
        }

        h2{
            color: #cdcdcd;
            font-size: clamp(1.5rem, 2vw, 2.5rem);
        }

        
        .tasktitle{
            display: flex;
            gap: 20px;
        }

        .taskbuttons{
            display: flex;
            justify-content: space-between;
            gap: 30px;
        }

        .taskbuttonsone{
            display: flex;
            gap: 10px;
        }
        
        .contentdiv{
            display: flex;
            flex-direction: column;
            gap: 15px;
            justify-content: space-between;
            
            @media(min-width: 800px){
                flex-direction: row;
            }
        }

        .addsubtaskdiv{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .newsubtaskdiv{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 15px;
        }


  
</style>


