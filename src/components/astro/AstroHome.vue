<template>
  <div id="astro-home">
  <navbar/>
    <h1>Astrophysics for Writers</h1>
    <p>
      This part of the Weblair is the future home of a collaboration with a fellow writer. We are attempting to create
      accurate, accessible resources and guides to astrophysics that writers can use for world building. This is going
      to be a long term project, so be sure to follow <a href="https://www.sundry-musings">Sundry Musings</a> and my
      Twitter feed for updates on this project.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'astro-home'
  }
</script>

<style scoped>
  #astro-home {
    margin-top: 80px;
  }

  p {
    text-align: justify-all;
    max-width: 800px;
    margin: 0 auto !important;
  }

</style>
