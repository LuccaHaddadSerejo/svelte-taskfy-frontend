<script lang="ts">
    export let img: boolean = false;
    export let text: boolean = false;
    export let src: string = undefined;
    export let alt: string = undefined;
    export let buttonheader: boolean = false;
    export let buttonnewtask: boolean = false;
    export let buttonaddnewsubtask: boolean = false;
    export let buttonsnewsubstaskdiv: boolean = false;
    export let imgheader: boolean = false;
    export let trash: boolean = false;
    export let editAndArrowButton: boolean = false;
    export let disabled: boolean = false;
    export let content: string = undefined;
</script>

<button disabled={disabled} 
        class="button" 
        class:buttonheader 
        class:buttonnewtask
        class:buttonaddnewsubtask
        class:buttonsnewsubstaskdiv
        class:disabled 
        on:click>
        {#if text}
            {content}
        {/if}   
        {#if img}
            <img class:imgheader class:trash class:editAndArrowButton src={src} alt={alt}>
        {/if}    
</button>

<style lang="scss">

    .button{
        display: inline-flex;
        align-items: center;
        background-color: transparent;
        :hover{
            filter: brightness(1.5);
        } 
    }

    
    .disabled{   
        opacity: 0.6;
        cursor: not-allowed;
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
    
    .trash{
        width: 30px;
        position: relative;
        top: 2px;
    }
    
    .editAndArrowButton{
        width: 23px;
        filter: brightness(1.2);
    }

    .buttonaddnewsubtask{
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        color: #5E60CE;
        font-size: clamp(0.9rem, 1.2vw, 1.2rem);
        font-weight: 700;    
    }

    .buttonsnewsubstaskdiv{
            color: #dcdcdc;
            background-color: #1E6F9F;
            border-radius: 8px;
            padding: 0.5rem; 
            min-width: 53px;
            justify-content: center;
    }
</style>