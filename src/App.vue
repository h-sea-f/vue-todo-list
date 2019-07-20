<template>
  <div id="app">
      <input type="text" v-model="countNumber">
      <counterSum :countSum="countSum"></counterSum>
      <counterGroup :counterNum="parseInt(countNumber)||0" @transmit="addCountSum"></counterGroup>
  </div>
</template>

<script>
import counterSum from './components/counterSum.vue'
import counterGroup from './components/counterGroup.vue'
export default {
  name: 'app',
  components: {
    // HelloWorld,
     counterGroup,counterSum
  },
  data() {
      return {
          countNumber: 0,
          countSum: 0
      }
  },
  methods: {
      init() {
          this.countSum = 0;
      },
      addCountSum(countSum) {
          this.countSum = countSum;
      }
  }


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
