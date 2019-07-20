<template>
<div>
    <ol>
        <li v-for="item in items">
            <input  name="done-todo" type="checkbox"  class="done-todo" @click="finish($event)">
            <span>{{item}}</span>
        </li>
    </ol>
</div>
</template>
<script>
    export default {
        name: 'List',
        props: {
            items: Array
        },
        methods: {
            finish(e){
                alert(e.currentTarget);
                e.currentTarget.class="checked";
            }
        }

    }


</script>
<style></style>