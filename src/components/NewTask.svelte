<script lang="ts">
    import Button from "./Button.svelte";
    import plus from "../assets/plus.svg"
    import Input from "./Input.svelte";
    import { createTask} from "../api";
    import { handleTasksFetched} from '../store';
    import { type tCreateTask } from "../interfaces/tasks.";
    
    let value:string =  "";
    let taskObj = {} as tCreateTask;

    const formatObj = (): void => {
        const newObj: tCreateTask = {
        title: value,
    };

    taskObj = newObj;
    };

    const handleClick = async (): Promise<void> => {
    formatObj();
    createTask(taskObj);
    handleTasksFetched();
    value = "";
    };

    
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



