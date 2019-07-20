<template>
    <div id="counter">
        <button v-on:click = "decrease">-</button>
        <span>{{ count }}</span>
        <button v-on:click = "increase">+</button>
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
                this.$emit('calculateToCounter',-1)
            },
            increase() {
                this.count++;
                this.$emit('calculateToCounter',1);
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #counter {
    text-align: center;
    }
</style>
