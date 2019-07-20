<template>
<div>
    <ol>
        <li class="">
            <input name="done-todo"  type="checkbox" class="done-todo">
            <span>123</span>
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