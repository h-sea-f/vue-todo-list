<template>
    <div id="counterGroup">
        <input type="text" v-model="countNumber">
    </div>
</template>

<script>
    export default {
        name: 'counter',
        data() {
            return {
                count: 0,
            }
        },
        methods: {
            decrease() {
                this.count--;
            },
            increase() {
                this.count++;
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #counterGroup {
        text-align: center;
    }
</style>
