<script lang="ts">
    import arrowdown  from "../assets/arrowdown.svg" 
    import arrowup  from "../assets/arrowup.svg" 
    import trash  from "../assets/trash.svg" 
    import editTask  from "../assets/edit.svg" 
    let direction: boolean = false;
    $: arrow = direction ? arrowup : arrowdown 

    const toogleDirection = () => direction = !direction

    export let title:string;
</script>

<li>  
    <div class="tasktitle">  
        <input type="checkbox">  
        <h2>{title}</h2>
    </div>
    <div class="taskbuttons">
        <div class="taskbuttonsone">
            <button><img src={editTask} alt="Imagem de um lixo"></button>
            <button><img class="trash" src={trash} alt="Imagem de uma caneta e uma prancheta"></button>       
        </div>
        <button on:click={toogleDirection}>
            <img src={arrow} alt="Imagem de uma seta">
        </button>
    </div> 
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

        @media(min-width: 800px){
            flex-direction: row;
        }
    }

    img{
        width: 23px;
        background-color: transparent;
        filter: brightness(1.2);
    }

    button{
        background-color: transparent;
        :hover{
            filter: brightness(1.5);
        }
    }

    h2{
        color: #cdcdcd;
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

    .trash{
        width: 30px;
        position: relative;
        top: 2px;
    }
</style>


<!-- <ul>
    <li>
        <input type="checkbox">
        <h3>Título Subtask</h3>
        <button>Editar</button>
        <button>Excluir</button>
    </li>
</ul> -->