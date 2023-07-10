<script lang="ts">
    import arrowdown  from "../assets/arrowdown.svg" 
    import arrowup  from "../assets/arrowup.svg" 
    import trash  from "../assets/trash.svg" 
    import editTask  from "../assets/edit.svg" 
    import SubtaskCard from "./SubtaskCard.svelte";
    import Button from "./Button.svelte";
    import { deleteTask } from "../api";
    import { handleTasksFetched } from "../store";

    let direction: boolean = false;
    $: arrow = direction ? arrowup : arrowdown 

    const toogleDirection = () => direction = !direction

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
</style>


