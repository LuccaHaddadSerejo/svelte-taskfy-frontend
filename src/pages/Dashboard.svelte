<script lang="ts">
    import Header from "../components/Header.svelte";
    import NewTask from "../components/NewTask.svelte";
    import List from "../components/List.svelte";
</script>

<Header/>
<main>
    <section>
        <NewTask/>
    </section>
    <section>
        <List/>
    </section>
</main>


<style lang="sccs">
    main{
        margin: 0 auto;
        width: min(90%, 1400px);
    }
</style>

