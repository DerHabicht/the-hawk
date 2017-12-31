<template>
  <div id="coding">
    <navbar/>
    <h1>Coding Projects</h1>
    <h2>Websites</h2>
    <b-card-group class="project-list" deck>
      <b-card title="Rexy Writers"
              img-src="../assets/jake.png"
              img-alt="Jake the Octopus"
              img-top>
        <p class="card-text">
          "Sticking to their goals one tentacle at a time," the <a href="https://www.rexywriters.org">Rexy Writers</a>
          are a group of writers based out of Rexburg, Idaho. This site is their online community and will include a
          blog, forum, and tools to make, track, and share goals.
        </p>
      </b-card>

      <b-card title="Kepler Shipyards"
              img-src="../assets/kepler.png"
              img-alt="Kepler Shipyards Logo"
              img-top>
        <p class="card-text">
          <a href="http://www.keplershipyards.com">Kepler Shipyards</a> is a company of engineers and scientists who are
          serious about establishing a permanent human presence in space. They design and build technologies that are
          targeted at solving the problems humans would face in permanent bases and colonies in orbit, on the Moon, and
          Mars.
        </p>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  export default {
    name: 'coding'
  }
</script>

<style scoped>
  #coding {
    margin-top: 80px;
  }

  p.card-text {
    text-align: justify;
  }

  .project-list {
    max-width: 1000px;
    margin: 0 auto !important;
  }

</style>
