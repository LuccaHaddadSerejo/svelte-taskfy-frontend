<script lang="ts">
    import Dashboard from "./pages/Dashboard.svelte";
</script>

<Dashboard/>

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
    :global(body) {
	    background-color: #1A1A1A;
	}
</style>


