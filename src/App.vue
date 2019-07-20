<template>
    <div id="app" class="container">
        <div>
            <h2>Jquery To Do List</h2>
            <p><em>Simple Todo List with adding and filter by diff status.</em></p>
        </div>
        <div>
            <input type="text" class="input-text" name="ListItem" v-model="item">
            <div id="button" @click="addItem">Add</div>
        </div>
        <todolist :items="items"></todolist>
    </div>
</template>

<script>
import todolist from './components/List.vue'
export default {
    name: 'app',
    components: {
        todolist,
    },
    data() {
        return {
            items: [],
            item: ""
        }
    },
    methods: {
        addItem(){
            this.items.push(this.item);
            this.item="";
        }
    }
}
</script>

<style>
    @import url('./css/app.css');
</style>
