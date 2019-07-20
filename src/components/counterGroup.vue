<template>
    <div id="counterGroup">

        <counter v-for="count in counterNum" v-bind:key="count" @calculateToCounter="calculate"></counter>
    </div>
</template>

<script>
    import counter from './counter.vue'
    export default {
        name: 'counterGroup',
        props: {
          counterNum:Number
        },
        components: {
            // HelloWorld,
            counter
        },
        data() {
            return {
                counterSum: 0
            }
        },
        methods: {
            calculate(number) {
                this.counterSum += number;
                this.$emit("transmit", this.counterSum);
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
