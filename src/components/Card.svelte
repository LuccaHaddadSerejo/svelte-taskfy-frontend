<script lang="ts">
  import arrowdown from "../assets/arrowdown.svg";
  import arrowup from "../assets/arrowup.svg";
  import pluspurple from "../assets/plusPurple.svg";
  import trash from "../assets/trash.svg";
  import editTask from "../assets/edit.svg";
  import SubtaskCard from "./SubtaskCard.svelte";
  import Button from "./Button.svelte";
  import Input from "./Input.svelte";
  import { createSubtask, deleteTask, updateTask } from "../api";
  import { handleTasksFetched } from "../store";
  import type {
    iSubtask,
    tCreateSubtask,
    tPartialTask,
  } from "../interfaces/tasks.";

  let isEditing: boolean = false;
  let newSubtask: boolean = false;
  let direction: boolean = false;
  let value: string = "";
  let subtaskObj = {} as tCreateSubtask;

  export let completed: boolean;
  export let title: string;
  export let key: number;
  export let subtasks: iSubtask[];
  let newValue: string = title;

  $: arrow = direction ? arrowup : arrowdown;

  const toogleDirection = () => (direction = !direction);
  const toogleAddSubtask = () => (newSubtask = !newSubtask);
  const toogleEditTask = () => (isEditing = !isEditing);

  const formatSubtaskObj = (): void => {
    const newObj: tCreateSubtask = {
      title: value,
    };

    subtaskObj = newObj;
  };

  const handleEditTask = (): void => {
    const updatedObj: tPartialTask = {
      title: newValue,
    };

    updateTask(updatedObj, key);
    toogleEditTask();
  };

  const handleCompleteTask = (): void => {
    const updatedObj: tPartialTask = {
      done: completed ? true : false,
    };

    direction = false;
    updateTask(updatedObj, key);
  };

  const handleDeleteClick = () => {
    deleteTask(key);
    handleTasksFetched();
  };

  const handleCreateSubtaskClick = async () => {
    formatSubtaskObj();
    createSubtask(subtaskObj, key);
    handleTasksFetched();
    toogleAddSubtask();
  };
</script>

<li class:completed>
  <div class="contentdiv">
    {#if !isEditing}
      <div class="tasktitle">
        <input
          type="checkbox"
          bind:checked={completed}
          on:change={handleCompleteTask}
        />
        <h2 class:completed>{title}</h2>
      </div>
      <div class="taskbuttons">
        <div class="taskbuttonsone">
          <Button
            img
            src={editTask}
            editAndArrowButton
            alt={"Imagem de uma caneta e uma prancheta"}
            disabled={completed}
            on:click={toogleEditTask}
          />
          <Button
            on:click={handleDeleteClick}
            img
            src={trash}
            trash
            alt={"Imagem de um lixo"}
          />
        </div>
        <Button
          on:click={toogleDirection}
          img
          src={arrow}
          editAndArrowButton
          alt={"Imagem de uma seta"}
          disabled={completed}
        />
      </div>
    {:else}
      <input
        type="text"
        bind:value={newValue}
        class="edittitleinput"
        placeholder="Digite um novo título"
      />
      <div class="editbuttonsdiv">
        <button
          on:click={() => handleEditTask()}
          class="edittaskbutton"
          disabled={newValue.length === 0}>Editar</button
        >
        <button on:click={toogleEditTask} class="edittaskbutton"
          >Cancelar</button
        >
      </div>
    {/if}
  </div>
  {#if arrow === arrowup && !completed}
    <ul>
      {#each subtasks as subtask (subtask.id)}
        <SubtaskCard
          subtitle={subtask.title}
          subkey={subtask.id}
          completedSubtask={subtask.done}
        />
      {/each}
    </ul>
    <div>
      {#if !newSubtask}
        <div class="addsubtaskdiv">
          <Button
            on:click={() => toogleAddSubtask()}
            img
            text
            buttonaddnewsubtask
            content={"Adicionar subtask"}
            src={pluspurple}
            alt="Imagem de um símbolo de mais"
          />
        </div>
      {:else}
        <div class="newsubtaskdiv">
          <Input bind:value inputnewtask placeholder={"Adicione uma subtask"} />
          <Button
            on:click={() => handleCreateSubtaskClick()}
            text
            disabled={value.length > 0 ? false : true}
            buttonsnewsubstaskdiv
            content={"Criar"}
          />
          <Button
            on:click={() => toogleAddSubtask()}
            text
            buttonsnewsubstaskdiv
            content={"Voltar"}
          />
        </div>
      {/if}
    </div>
  {/if}
</li>

<style lang="scss">
  li {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
    background-color: #262626;
    border-radius: 8px;
    padding: 2rem 1rem 2rem 1rem;
  }

  h2 {
    color: #cdcdcd;
    font-size: clamp(1.5rem, 2vw, 2.5rem);
  }

  .completed {
    opacity: 0.5;
    text-decoration: line-through;
  }

  .tasktitle {
    display: flex;
    gap: 20px;
  }

  .taskbuttons {
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  .taskbuttonsone {
    display: flex;
    gap: 10px;
  }

  .contentdiv {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;

    @media (min-width: 800px) {
      flex-direction: row;
    }
  }

  .addsubtaskdiv {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .newsubtaskdiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .edittitleinput {
    background-color: #dcdcdc;
    padding: 1rem;
    width: min(100%);
    border-radius: 8px;
    border: 1px solid #0d0d0d;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #dcdcdc;
      font-size: 0.875rem;
    }
  }

  .editbuttonsdiv {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .edittaskbutton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    text-decoration: underline;
    color: #1e6f9f;
    font-weight: 700;
    filter: brightness(1.2);

    &:hover {
      filter: brightness(1.5);
    }
  }
</style>
