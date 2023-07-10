<script lang="ts">
    export let subtitle:string;
    export let subkey:number;
</script>


<li>
    <div class="contentdivone">
        <input type="checkbox">
        <h3>{subtitle}</h3>
    </div>
    <div class="contentdivtwo"> 
        <button>Editar</button>
        <button>Excluir</button>
    </div>
   
</li>


<style lang="scss">
    li{
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #cdcdcd;
        padding: 10px 0 10px 0;
    }

    h3{
        color: #cdcdcd;
        font-size: clamp(0.9rem, 1.2vw, 1.2rem);
        font-weight: 600;
    }

    button{
        background-color: transparent;
        text-decoration: underline;
        color: #4EA8DE;


        &:hover{
            filter: brightness(1.5);
        }
    }

    .contentdivone{
        display: flex;
        gap: 15px;
    }

    .contentdivtwo{
        display: flex;
        gap: 10px;
        margin-top: 10px;
    }
</style>

