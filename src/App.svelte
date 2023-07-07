<script lang="ts">
    import Header from "./components/Header/Header.svelte";
</script>

<Header/>

<style lang="scss">
    :global(*) {
	    margin: 0;
	    padding: 0;
	    border: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    :global(ol, ul) {
	    list-style: none;
	}
    :global(button) {
	    cursor: pointer;
	}
</style>


