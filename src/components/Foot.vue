<template>
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
</template>
<script>
    export default {
        name: 'Foot',
        methods: {
            showAll(){
                this.$emit("change",0);
            },
            showActive(){
                this.$emit("change",1);
            },
            showCompleted(){
                this.$emit("change",2);
            }
        }

    }


</script>
<style>

</style>