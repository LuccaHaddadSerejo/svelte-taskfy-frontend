<script lang="ts">
  import Button from "./Button.svelte";
  import { deleteSubtask, updateSubtask } from "../api";
  import { handleTasksFetched } from "../store";
  import type { tPartialTask } from "../interfaces/tasks.";
  import Input from "./Input.svelte";

  export let subtitle: string;
  export let subkey: number;
  export let completedSubtask: boolean;
  let isEditing: boolean = false;
  let newValue: string = subtitle;

  const toogleEditSubtask = () => (isEditing = !isEditing);

  const handleDeleteSubtaskClick = () => {
    deleteSubtask(subkey);
    handleTasksFetched();
  };

  const handleCompleteSubtask = (): void => {
    const updatedObj: tPartialTask = {
      done: completedSubtask ? true : false,
    };

    updateSubtask(updatedObj, subkey);
  };

  const handleEditSubtask = (): void => {
    const updatedObj: tPartialTask = {
      title: newValue,
    };

    updateSubtask(updatedObj, subkey);
    toogleEditSubtask();
  };

  const resetSubtitleValue = () => {
    toogleEditSubtask();
    newValue = subtitle;
  };
</script>

<li class:completedSubtask>
  {#if !isEditing}
    <div class="contentdivone">
      <input
        type="checkbox"
        bind:checked={completedSubtask}
        on:change={handleCompleteSubtask}
      />
      <h3 class={completedSubtask ? "completedText" : ""}>{subtitle}</h3>
    </div>
    <div class="contentdivtwo">
      {#if !completedSubtask}
        <Button
          on:click={toogleEditSubtask}
          text
          buttonssubtask
          content={"Editar"}
        />
      {/if}
      <Button
        on:click={() => handleDeleteSubtaskClick()}
        text
        buttonssubtask
        content={"Excluir"}
      />
    </div>
  {:else}
    <div class="editcontentdiv">
      <Input
        bind:value={newValue}
        inputedittitle
        placeholder={"Digite um novo título"}
      />
      <div class="editbuttonsdiv">
        <Button
          on:click={() => handleEditSubtask()}
          text
          buttonedittask
          content={"Confirmar"}
          disabled={newValue.length === 0}
        />
        <Button
          on:click={resetSubtitleValue}
          text
          buttonedittask
          content={"Cancelar"}
        />
      </div>
    </div>
  {/if}
</li>

<style lang="scss">
  li {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #cdcdcd;
    padding: 10px 0 10px 0;
  }

  h3 {
    color: #cdcdcd;
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
    font-weight: 600;
  }

  .completedSubtask {
    opacity: 0.5;
  }

  .completedText {
    text-decoration: line-through;
  }

  .contentdivone {
    display: flex;
    gap: 15px;
  }

  .contentdivtwo {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .editcontentdiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media (min-width: 800px) {
      flex-direction: row;
    }
  }

  .editbuttonsdiv {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
</style>
