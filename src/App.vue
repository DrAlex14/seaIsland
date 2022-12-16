<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Scene />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Scene from './view/Scene.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    Scene
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
* {
    padding: 0;
    margin: 0;
}

body {
    background-color: #1e1a20;
}

</style>
