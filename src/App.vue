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
        <todolist :items="itemsShow"></todolist>
        <foot @change="changeShow"></foot>
    </div>
</template>

<script>
import todolist from './components/List.vue'
import foot from './components/Foot.vue'
export default {
    name: 'app',
    components: {
        todolist,
        foot
    },
    data() {
        return {
            items: [],
            item: "",
            itemsCopy:[],
            state: 0
        }
    },
    methods: {
        addItem(){
            // this.items.push({content:this.item,isChecked:false});
            // this.itemsCopy = this.items.slice();
            this.item = "";
            this.$store.commit('addItem',{content:this.item,isChecked:false})
        },
        changeShow(flag){
            this.state = flag;
        }
    },
    computed: {
        itemsShow: function () {
            this.itemsCopy = this.$store.state.items.slice();
            if(this.state === 1) {
                return this.itemsCopy.filter(item=>item.isChecked === false);
            }
            if(this.state === 2){
                return this.itemsCopy.filter(item=>item.isChecked === true);
            }
            return this.$store.state.items;
        }
    }
}
</script>

<style>
    @import url('./css/app.css');
</style>
