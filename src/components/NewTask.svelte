<script lang="ts">
    import plus from "../assets/plus.svg"
</script>

<div>
    <input placeholder="Adicione uma nova tarefa" type="text">
    <button>Criar <img src={plus} alt="Imagem de um símbolo de mais"></button>
</div>

<style lang="scss">
    $color-one: #dcdcdc;
    $radius-one: 8px;
    $rem-half: 0.5rem;

    div{
        display: flex;
        justify-content: center;
        gap: $rem-half;
        width: min(90%, 1400px);
        margin: 0 auto;
        margin-top: 20px;
    }

    input{
        width: min(100%, 600px);
        border-radius: $radius-one;
        background-color: #262626;
        border: 1px solid #0D0D0D;
        padding: 1rem;

        &::placeholder{
            color: $color-one;
            font-size: 0.875rem;
        }

        &:focus{
            outline: none;
            background-color: $color-one;
        }
    }

    button{
        display: inline-flex;
        gap: $rem-half;
        align-items: center;
        color: $color-one;
        background-color: #1E6F9F;
        border-radius: $radius-one;
        padding: 1rem;
        height: 48px; 
        

        &:hover{
            filter:brightness(1.2)
        }
    }
</style>



