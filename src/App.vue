<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--      <input type="text" v-model="counterNumber">-->
<!--    <ul id="example-1">-->
<!--      <li v-for="item in 5">-->
<!--        <counter></counter>-->
<!--      </li>-->
<!--    </ul>-->
    <counterSum></counterSum>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import counter from './components/counter.vue'
import counterGroup from './components/counterGroup.vue'
import counterSum from './components/counterSum.vue'
export default {
  name: 'app',
  components: {
    // HelloWorld,
    counter, counterGroup,counterSum
  },

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
