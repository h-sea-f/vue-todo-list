<template>
<div>
    <ol>
        <li v-for="item in items" v-bind:class="{checked:item.isChecked}">
            <input  name="done-todo" type="checkbox"  class="done-todo" v-model="item.isChecked">
            <span>{{item.content}}</span>
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


    }


</script>
<style></style>