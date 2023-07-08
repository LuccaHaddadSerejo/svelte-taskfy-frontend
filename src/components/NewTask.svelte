<script lang="ts">
    import Button from "./Button.svelte";
    import plus from "../assets/plus.svg"
    import { type Task } from "../interfaces/tasks.";
  import Input from "./Input.svelte";

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
    <Input inputnewtask bind:value={value} placeholder="Adicione uma nova tarefa"/>
    <Button buttonnewtask img src={plus} alt={"Imagem de um símbolo de mais"} text content={"Criar"} on:click={handleClick}/>
</div>

<style lang="scss">
    $color-one: #dcdcdc;
    $radius-one: 8px;
    $rem-half: 0.5rem;

    div{
        display: flex;
        justify-content: center;
        gap: $rem-half;
        width: min(90%, 1400px);
        margin: 0 auto;
        margin-top: 20px;
    }
</style>



