<script lang="ts">
    import plus from "../assets/plus.svg"
    import { type Task } from "../interfaces/tasks.";

    let value:string =  "";
    let taskObj = {} as Task;

    const createTask = async (data: Task): Promise<void> => {
        try {
            const res: Response = await fetch("http://localhost:3000/tasks", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            if(!res.ok){
                await res.json()
            }    
        } catch (error) {
            console.error(error)
        }
    }

    const formatObj = (): void => {
        const newObj:Task = {
            title: value,
            content: null
        }

        taskObj = newObj
    }

    const handleClick = (): void => {
        formatObj()
        createTask(taskObj)
        value = ""
    }
</script>

<div>
    <input bind:value="{value}" placeholder="Adicione uma nova tarefa" type="text">
    <button on:click={handleClick}>Criar<img src={plus} alt="Imagem de um símbolo de mais"></button>
</div>

<style lang="scss">
    $color-one: #dcdcdc;
    $radius-one: 8px;
    $rem-half: 0.5rem;
    h1{
        color: white;
    }
    div{
        display: flex;
        justify-content: center;
        gap: $rem-half;
        width: min(90%, 1400px);
        margin: 0 auto;
        margin-top: 20px;
    }

    input{
        width: min(100%, 600px);
        border-radius: $radius-one;
        background-color: #262626;
        border: 1px solid #0D0D0D;
        padding: 1rem;

        &::placeholder{
            color: $color-one;
            font-size: 0.875rem;
        }

        &:focus{
            outline: none;
            background-color: $color-one;
        }
    }

    button{
        display: inline-flex;
        gap: $rem-half;
        align-items: center;
        color: $color-one;
        background-color: #1E6F9F;
        border-radius: $radius-one;
        padding: 1rem;
        height: 48px; 
        

        &:hover{
            filter:brightness(1.2)
        }
    }
</style>



