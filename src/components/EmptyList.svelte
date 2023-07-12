<script lang="ts">
  import clipboard from "../assets/clipboard.svg";
  import { done, pending } from "../store";
</script>

<div class="empty-list">
  <img src={clipboard} alt="Imagem de uma prancheta" />
  {#if $done}
    <p>Você ainda não finalizou nenhuma tarefa</p>
    <p>Marque as tarefas concluidas utlizando a caixa ao lado do item</p>
  {:else if $pending}
    <p>Você não possui nenhuma tarefa pendente, parabéns.</p>
    <p>Crie novas tarefas!</p>
  {:else}
    <p>Você ainda não tem tarefas cadastradas</p>
    <p>Crie tarefas e organize seus itens a fazer</p>
  {/if}
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-1);
    margin-top: 40px;
    border-top: 2px solid var(--color-gray-4);
    padding-top: var(--padding-1);

    img {
      width: 150px;
    }

    :nth-child(2) {
      color: var(--color-gray-4);
      font-weight: var(--font-weight-2);
      font-size: var(--font-size-2);
    }

    :nth-child(3) {
      color: var(--color-gray-4);
      opacity: 0.9;
      font-weight: var(--font-weight-3);
      font-size: var(--font-size-3);
    }
  }
</style>
