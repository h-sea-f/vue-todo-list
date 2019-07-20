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
        <div>
            <ul id="filters">
                <li>
                    <a href="#" data-filter="all" @click="showAll">ALL</a>
                </li>
                <li>
                    <a href="#" data-filter="active" @click="showActive">Active</a>
                </li>
                <li>
                    <a href="#" data-filter="complete" @click="showCompleted">Complete</a>
                </li>
            </ul>

        </div>
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
            item: "",
            itemsCopy:[]
        }
    },
    methods: {
        addItem(){
            this.items.push({content:this.item,isChecked:false});
            this.itemsCopy = this.items.slice();
            this.item="";
        },
        showAll(){
            this.items = this.itemsCopy;
        },
        showActive(){
            this.items = this.itemsCopy.filter(item=>item.isChecked==false)
        },
        showCompleted(){
            this.items = this.itemsCopy.filter(item=>item.isChecked==true)
        }
    }
}
</script>

<style>
    @import url('./css/app.css');
</style>
