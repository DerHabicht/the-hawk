<template>
  <div id="home">
    <img class="logo" src="../assets/logo.png" alt="Barnard's Star"/>
    <div class="vspacer"></div>
    <h1>Developer. Writer. Nerd.</h1>
    <div class="vspacer"></div>
    <div class="homenav">
      <router-link to="/bio">Bio</router-link>
      <div class="hspacer"></div>
      <router-link to="/coding">Coding</router-link>
      <div class="hspacer"></div>
      <router-link to="/writing">Writing</router-link>
      <div class="hspacer"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped>

  #home {
    color: white;
    background-color: #00004d;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    font-family: 'Roboto Mono';
    font-size: 18pt;
    color: white;
    text-transform: uppercase;
  }

  a:hover {
    text-decoration: underline;
  }

  .homenav {
    display: flex;
  }

  div.hspacer {
    width: 20px;
  }

  div.vspacer {
    height: 50px;
  }

  img.logo {
    height: 20%;
    width: 20%;
  }
</style>
