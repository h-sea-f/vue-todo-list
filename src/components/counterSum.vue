<template>
    <div id="counterSum">
        <p></p>
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
    #counterSum {
        text-align: center;
    }
</style>
