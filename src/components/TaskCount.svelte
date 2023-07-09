<script lang="ts">
    export let text: string;
    export let done: boolean = false;
    export let purple: boolean = false;
    export let blue: boolean = false;
    export let createdTasksValue: number = undefined;
    export let doneTasksValue: number = undefined;

</script>

<div>
    <p class:blue class:purple>{text}</p>
    <div>
        <span>
        {#if done}
            {doneTasksValue}
        {:else}
            {createdTasksValue}
        {/if}
        </span>
    </div>
</div>


<style lang="scss">

    div{
        display: flex;
        align-items: center;
        gap: 12px;          
            p{
                font-size: clamp(0.5rem, 4vw, 1rem);
                font-weight: 700;
            }

            div{
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #333;
                border-radius: 100%;
                width: 20px;
                height: 20px;

                span{
                    font-weight: 400;
                    font-size: clamp(0.5rem, 4.5vw, 1rem);
                    color: #cdcdcd;
                }
            }    
        }

    .blue{
        color:#4EA8DE;
    }

    .purple{
        color: #5E60CE;
    }
 
</style>