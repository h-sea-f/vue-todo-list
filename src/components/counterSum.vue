<template>
    <div id="counterSum">
        <span>CountSum：{{countSum}}</span>
    </div>
</template>

<script>
    export default {
        name: 'counterSum',
        data() {
            return {
                sumNumber: 0
            }
        },
        props: {
            countSum: Number
        },

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #counterSum {
        text-align: center;
    }
</style>
