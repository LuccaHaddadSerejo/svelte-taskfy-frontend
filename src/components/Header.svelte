<script lang="ts">
    import rocket from "../assets/rocket.svg";
    import mgwhite from "../assets/mgwhite.svg"
    import mgblack from "../assets/mgblack.svg"
    
    let isFocused: boolean = false;
	const onFocus = (): boolean => isFocused = true;
	const onBlur = (): boolean =>  isFocused = false;
</script>

<div>
    <header>
        <div>
            <img src={rocket} alt="Imagem de um foguete decolando">
            <h1>Task<span>fy</span></h1>
        </div>
        <div class={isFocused ? 'input-focus-div' : 'input-no-focus-div'}>
            <button>
                <img src={isFocused ? mgblack : mgwhite} alt="Imagem de uma lupa"/>
            </button>
            <input
                placeholder="Pesquisar"
                type="text"
                on:focus={onFocus}
                on:blur={onBlur}
            >
        </div>
    </header>
</div>


<style lang="scss">
    $color-one: #0D0D0D;
    $color-two: #dcdcdc;
    $color-three: #262626;
    $size-one: clamp(2rem, 6vw, 3rem);
    $height-one: 45px;

    div {
        background-color: $color-one;

        @media(min-width: 600px){
            width: 100%;
        }
        
        header { 
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;    
            width: min(90%, 1400px);
            margin: 0 auto;
            min-height: 100px;
            padding: 10px 0 10px 0;

            @media(min-width:600px) {
                flex-direction: row;
                justify-content: space-between;
            }

            :nth-child(1),
            :nth-child(2) {
                position: relative;
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            :nth-child(1) {
                img {
                    position: relative;
                    height: $size-one;
                }

                h1 {
                    color: #4EA8DE;
                    font-size: $size-one;
                    background-color: $color-one;
                }

                span{
                    color: #5E60CE;
                }
            }

            :nth-child(2) {
                border: 1px solid $color-one;
                border-radius: 8px;
                display: flex;
                gap: 1px;
                                
                button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    background-color: transparent;
                    height: $height-one;
                    position: relative;
                    z-index: 1;

                    img {
                        background-color: transparent;
                        height: clamp(1rem, 6vw, 1.8rem);
                    }
                }

                input {
                    width: min(100%, 850px);
                    height: $height-one;
                    border: transparent;
                    background-color: $color-three;
                    padding: 1rem;

                    &:focus {
                        outline: none;
                        background-color: $color-two;
                    }

                    &::placeholder {
                        color: $color-two;
                        font-size: 0.875rem;
                    }
                }
            }
        }
    }

    .input-focus-div {
        background-color: $color-two;
    }

    .input-no-focus-div {
        background-color: $color-three;
    }

</style>
