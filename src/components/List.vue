<template>
    <div>
        <ol>
            <li v-for="(item, index) in getShowList" v-bind:key="item.id" v-bind:class="{checked:item.isChecked}"
                :id="item.id">
                <input name="done-todo" type="checkbox" class="done-todo" v-model="item.isChecked" >
                <span v-bind:contenteditable="true" @blur="updateItem" :id="item.id">{{item.content}}</span>
            </li>
        </ol>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'List',
        computed: {
            // status(){
            //     return this.$store.state.status;
            // },
            // itemsShow: function () {
            //     return this.$store.getters.getShowList(this.status)
            // },
            ...mapGetters(['getShowList'])
        },
        methods: {
            updateItem(e) {
                this.$store.dispatch('updateItem',{id: e.target.id, content: e.target.innerText})
                // this.$store.commit('updateItem', {id: e.target.id, content: e.target.innerText});
            }
        }


    }


</script>
<style></style>