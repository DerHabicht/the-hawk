<template>
  <div id="navbar">
    <b-navbar fixed="top" toggleable="md" type="dark" variant="thus">

      <b-navbar-brand class="brand" href="/">
        <img class="brand" src="../assets/logo.png" alt="Barnard's Star" />
        <div class="spacer"></div>
        THUS
      </b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item href="/">Bio</b-nav-item>
        <b-nav-item href="/coding/">Coding</b-nav-item>
        <b-nav-item href="/writing/">Writing</b-nav-item>
        <b-nav-item-dropdown text="Blogs">
          <b-dropdown-item href="https://www.sundry-musings.com">Sundry Musings</b-dropdown-item>
          <b-dropdown-item href="https://www.confederateddefenseforces.com">Confederated Defense Forces</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Astrophysics for Writers">
          <b-dropdown-item href="/astro/">Home</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://twitter.com/DerHabicht">
          <icon name="twitter"></icon>
        </b-nav-item>
        <b-nav-item href="https://github.com/DerHabicht">
          <icon name="github"></icon>
        </b-nav-item>
        <b-nav-item href="https://linkedin.com/in/DerHabicht">
          <icon name="linkedin"></icon>
        </b-nav-item>
        <b-nav-item href="mailto:robert@the-hawk.us">
          <icon name="envelope"></icon>
        </b-nav-item>
      </b-navbar-nav>

      <div class="bigspacer"></div>
    </b-navbar>
  </div>
</template>

<script>
  import 'vue-awesome/icons/twitter'
  import 'vue-awesome/icons/github'
  import 'vue-awesome/icons/linkedin'
  import 'vue-awesome/icons/envelope'
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'navbar',
    components: {
      Icon
    }
  }
</script>

<style scoped>
  .bg-thus {
    background-color: #00004d;
  }

  .brand {
    display: flex;
    align-items: center;
  }

  img.brand {
    height: 5%;
    width: 5%;
  }

  .spacer {
    height: auto;
    width: 8px;
    display: inline-block;
  }

  .bigspacer {
    height: auto;
    width: 100px;
    display: inline-block;
  }

</style>
