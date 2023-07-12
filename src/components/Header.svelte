<script lang="ts">
  import rocket from "../assets/rocket.svg";
</script>

<div>
  <header>
    <div>
      <img src={rocket} alt="Imagem de um foguete decolando" />
      <h1>Task<span>fy</span></h1>
    </div>
  </header>
</div>

<style lang="scss">
  div {
    background-color: var(--color-gray-1);

    header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      min-height: 100px;
      padding: var(--padding-3) 0 var(--padding-3) 0;

      :nth-child(1) {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--gap-1);
      }

      :nth-child(1) {
        img {
          position: relative;
          height: var(--font-size-1);
        }

        h1 {
          color: var(--color-primary);
          font-size: var(--font-size-1);
          background-color: var(--color-gray-1);
        }

        span {
          color: var(--color-secondary);
        }
      }

      :nth-child(2) {
        border: 1px solid var(--color-gray-1);
        border-radius: var(--radius-1);
        display: flex;
        gap: 0px;
      }
    }
  }
</style>
