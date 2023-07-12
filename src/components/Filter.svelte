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
      on:click={filterByDoneTasks}
      buttonfilter
      text
      content={"Tarefas concluídas"}
    />
    <Button
      on:click={filterByPendingTasks}
      buttonfilter
      text
      content={"Tarefas pendentes"}
    />
  </div>
  {#if $done || $pending}
    <Button
      on:click={clearFilters}
      buttonclearfilter
      text
      content={"Limpar filtro"}
    />
  {/if}
</div>

<style lang="scss">
  h3 {
    color: var(--color-gray-4);
    font-weight: var(--font-weight-1);
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    gap: var(--gap-1);
  }

  .divbuttons {
    display: flex;
    gap: 10px;
  }
</style>
