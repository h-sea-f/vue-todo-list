<template>
    <div id="app" class="container">
        <div>
            <h2>Jquery To Do List</h2>
            <p><em>Simple Todo List with adding and filter by diff status.</em></p>
        </div>
        <div>
            <input type="text" class="input-text" name="ListItem">
            <div id="button">Add</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>
    @import url('./css/app.css');
</style>
