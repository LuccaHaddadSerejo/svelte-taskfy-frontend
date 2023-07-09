<script lang="ts">
    import Button from "./Button.svelte";
    import plus from "../assets/plus.svg"
    import { type tCreateTask } from "../interfaces/tasks.";
    import Input from "./Input.svelte";

    let value:string =  "";
    let taskObj = {} as tCreateTask;

    const createTask = async (data: tCreateTask): Promise<void> => {
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
        const newObj:tCreateTask = {
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
    <Button buttonnewtask disabled={value.length > 0 ? false : true} img src={plus} alt={"Imagem de um símbolo de mais"} text content={"Criar"} on:click={handleClick}/>
</div>

<style lang="scss">
    $color-one: #dcdcdc;
    $radius-one: 8px;
    $rem-half: 0.5rem;

    div{
        display: flex;
        justify-content: center;
        gap: $rem-half;
        width: 100%;
        margin: 0 auto;
        margin-top: 20px;
    }
</style>



