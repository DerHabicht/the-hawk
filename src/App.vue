<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'

  export default {
    name: 'app',
    components: {
      'navbar': Navbar
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

  #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 14pt;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  h1, h2, h3 {
    font-family: 'Roboto Mono';
  }
</style>
