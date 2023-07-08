<script lang="ts">
    export let img: boolean = false;
    export let text: boolean = false;
    export let src: string = undefined;
    export let alt: string = undefined;
    export let buttonheader: boolean = false;
    export let buttonnewtask: boolean = false;
    export let imgheader: boolean = false;
    export let content: string = undefined;
    export let funcValue: string  = undefined;
    export let onClick: (value: string) => void = () => {}
</script>

<button class="button" class:buttonheader class:buttonnewtask
    on:click={() => onClick(funcValue)}>
    {#if img}
        <img class:imgheader src={src} alt={alt}>
    {/if}    
    {#if text}
        {content}
    {/if}   
</button>

<style lang="scss">

    .button{
        display: inline-flex;
        align-items: center;
        
    }

    .buttonheader{      
        justify-content: center;
        padding: 0.5rem;
        background-color: transparent; 
        height: 48px;    
        position: relative;
        z-index: 1;
    }

    .imgheader{
        background-color: transparent;
        height: clamp(1rem, 6vw, 1.8rem);
    }
                        
    .buttonnewtask{
        gap: 0.5rem;
        color: #dcdcdc;
        background-color: #1E6F9F;
        border-radius: 8px;
        padding: 1rem;
        height: 48px; 
        

        &:hover{
            filter:brightness(1.2)
        }
    }
</style>