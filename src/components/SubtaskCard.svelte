<script lang="ts">
  import Button from "./Button.svelte";
  import { deleteSubtask, updateSubtask } from "../api";
  import type { tPartialTask } from "../interfaces/tasks.";
  import Input from "./Input.svelte";

  export let subtitle: string;
  export let subkey: number;
  export let completedSubtask: boolean;
  let isEditing: boolean = false;
  let newValue: string = subtitle;

  const toogleEditSubtask = () => (isEditing = !isEditing);

  /*
    Função para mudar o estado da subtask de done para pending ou vice e versa.
  */

  const handleCompleteSubtask = (): void => {
    const updatedObj: tPartialTask = {
      done: completedSubtask ? true : false,
    };

    updateSubtask(updatedObj, subkey);
  };

  /*
    Função para atualizar o title da subtask e mudar a condicional de edição de subtask.
  */

  const handleEditSubtask = (): void => {
    const updatedObj: tPartialTask = {
      title: newValue,
    };

    updateSubtask(updatedObj, subkey);
    toogleEditSubtask();
  };

  /*
    Função para resetar o valor do title da subtask caso o usuário tenha mudado no input de edição e cancelado.
  */

  const resetSubtitleValue = () => {
    toogleEditSubtask();
    newValue = subtitle;
  };
</script>

<li class:completedSubtask>
  {#if !isEditing}
    <div class="wrapper">
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
          on:click={() => deleteSubtask(subkey)}
          text
          buttonssubtask
          content={"Excluir"}
        />
      </div>
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
          on:click={handleEditSubtask}
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
    border-bottom: 1px solid var(--color-gray-4);
    padding: var(--padding-3) 0 var(--padding-3) 0;
  }

  h3 {
    color: var(--color-gray-4);
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
    font-weight: var(--font-weight-2);
  }

  .wrapper {
    margin-left: 20px;
  }

  .completedSubtask {
    opacity: 0.5;
  }

  .completedText {
    text-decoration: line-through;
  }

  .contentdivone {
    display: flex;
    gap: var(--gap-1);
  }

  .contentdivtwo {
    display: flex;
    gap: var(--gap-3);
    margin-top: 10px;
  }

  .editcontentdiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--gap-3);

    @media (min-width: 800px) {
      flex-direction: row;
    }
  }

  .editbuttonsdiv {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--gap-3);
  }
</style>
