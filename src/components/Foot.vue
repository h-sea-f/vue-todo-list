<template>
    <div>
        <ul id="filters">
            <li>
                <a href="#" data-filter="all" @click="updateStatus(0)">ALL</a>
            </li>
            <li>
                <a href="#" data-filter="active" @click="updateStatus(1)">Active</a>
            </li>
            <li>
                <a href="#" data-filter="complete" @click="updateStatus(2)">Complete</a>
            </li>
        </ul>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'
    export default {
        name: 'Foot',
        methods: {
            ...mapMutations([
                'updateStatus'
            ]),
            // showAll(){
            //     this.$store.commit('updateStatus',0);
            // },
            // showActive(){
            //     this.$store.commit('updateStatus',1);
            // },
            // showCompleted(){
            //     this.$store.commit('updateStatus',2);
            // }
        }

    }


</script>
<style>

</style>