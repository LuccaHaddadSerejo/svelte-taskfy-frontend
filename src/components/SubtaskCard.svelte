<script lang="ts">
  import Button from "./Button.svelte";
  import { deleteSubtask, updateSubtask } from "../api";
  import { handleTasksFetched } from "../store";
  import type { tPartialTask } from "../interfaces/tasks.";

  export let subtitle: string;
  export let subkey: number;
  export let completedSubtask: boolean;

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
</script>

<li class:completedSubtask>
  <div class="contentdivone">
    <input
      type="checkbox"
      bind:checked={completedSubtask}
      on:change={handleCompleteSubtask}
    />
    <h3>{subtitle}</h3>
  </div>
  <div class="contentdivtwo">
    {#if !completedSubtask}
      <Button text buttonssubtask content={"Editar"} />
    {/if}
    <Button
      on:click={() => handleDeleteSubtaskClick()}
      text
      buttonssubtask
      content={"Excluir"}
      disabled={completedSubtask}
    />
  </div>
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
</style>
