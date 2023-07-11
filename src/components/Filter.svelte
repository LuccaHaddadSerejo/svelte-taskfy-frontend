<script lang="ts">
  import {
    filterByDoneTasks,
    filterByPendingTasks,
    clearFilters,
    done,
    pending,
  } from "../store";
  import Button from "./Button.svelte";
</script>

<div class="container">
  <div>
    <h3>Filtrar por:</h3>
  </div>
  <div class="divbuttons">
    <Button
      on:click={() => filterByDoneTasks()}
      buttonfilter
      text
      content={"Tarefas concluídas"}
    />
    <Button
      on:click={() => filterByPendingTasks()}
      buttonfilter
      text
      content={"Tarefas pendentes"}
    />
  </div>
  {#if $done || $pending}
    <Button
      on:click={() => clearFilters()}
      buttonclearfilter
      text
      content={"Limpar filtro"}
    />
  {/if}
</div>

<style lang="scss">
  h3 {
    color: #cdcdcd;
    font-weight: 700;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    gap: 15px;
  }

  .divbuttons {
    display: flex;
    gap: 10px;
  }
</style>
