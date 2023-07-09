<script lang="ts">
    import  clipboard  from "../assets/clipboard.svg"
</script>

<div class="empty-list">
    <img src="{clipboard}" alt="Imagem de uma prancheta">
    <p>Você ainda não tem tarefas cadastradas</p>
    <p> Crie tarefas e organize seus itens a fazer</p>
</div>

<style lang="scss">
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:15px;
        margin-top: 40px;
        border-top: 2px solid #454545;
        padding-top: 20px;

        img{
            width: 150px;
        }

        :nth-child(2){
            color: #cdcdcd;
            font-weight: 600;
            font-size: clamp(0.8rem, 4.5vw, 1.4rem);
        }
        
        :nth-child(3){
            color: #cdcdcd;
            opacity: 0.9;
            font-weight: 400;
            font-size: 14px;
            font-size: clamp(0.5rem, 4vw, 1.2rem);
        }
    }
</style>