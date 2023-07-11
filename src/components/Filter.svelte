<script lang="ts">
  import {
    filterByDoneTasks,
    filterByPendingTasks,
    clearFilters,
    done,
    pending,
  } from "../store";
</script>

<div class="container">
  <div>
    <h3>Filtrar por:</h3>
  </div>
  <div class="divbuttons">
    <button on:click={() => filterByDoneTasks()}>Tarefas concluídas</button>
    <button on:click={() => filterByPendingTasks()}>Tarefas pendentes</button>
  </div>
  {#if $done || $pending}
    <button on:click={() => clearFilters()}>Limpar filtro</button>
  {/if}
</div>

<style lang="scss">
  h3 {
    color: #cdcdcd;
    font-weight: 700;
  }

  button {
    padding: clamp(0.6rem, 0.8vw, 1.5rem);
    border-radius: 8px;
    color: #dcdcdc;
    background-color: #1e6f9f;
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
