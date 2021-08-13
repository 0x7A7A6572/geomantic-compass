<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <GemanticCompass id="gemc" width="500" height="500" ></GemanticCompass>
  <button id="control_rotate">
    旋转
  </button>
</template>

<script>
import GemanticCompass from './components/GemanticCompass.vue'



export default {
  name: 'App',
  components: {
    GemanticCompass
  },
  methods:{
    
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#control-rotate{
  background: none;
  display: block;
  float: left;
}
#gemc{
  display: block;
  background: green;
}
</style>
