<script lang="ts">
  import Button from "./Button.svelte";
  import plus from "../assets/plus.svg";
  import Input from "./Input.svelte";
  import { createTask } from "../api";
  import { type tCreateTask } from "../interfaces/tasks.";

  let value: string = "";

  const handleClick = async (): Promise<void> => {
    const newObj: tCreateTask = {
      title: value,
    };

    createTask(newObj);
    value = "";
  };
</script>

<div>
  <Input inputnewtask bind:value placeholder="Adicione uma nova tarefa" />
  <Button
    buttonnewtask
    disabled={value.length > 0 ? false : true}
    img
    src={plus}
    alt={"Imagem de um símbolo de mais"}
    text
    content={"Criar"}
    on:click={handleClick}
  />
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: center;
    gap: var(--gap-2);
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
  }
</style>
