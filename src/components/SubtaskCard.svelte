<script lang="ts">
  import { deleteSubtask } from "../api";
  import { handleTasksFetched } from "../store";
  import Button from "./Button.svelte";

  export let subtitle: string;
  export let subkey: number;

  const handleDeleteSubtaskClick = () => {
    deleteSubtask(subkey);
    handleTasksFetched();
  };
</script>

<li>
  <div class="contentdivone">
    <input type="checkbox" />
    <h3>{subtitle}</h3>
  </div>
  <div class="contentdivtwo">
    <Button text buttonssubtask content={"Editar"} />
    <Button
      on:click={() => handleDeleteSubtaskClick()}
      text
      buttonssubtask
      content={"Excluir"}
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
