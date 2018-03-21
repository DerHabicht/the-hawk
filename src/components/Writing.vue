<template>
  <div id="writing">
    <navbar/>
    <h1>Writing Projects</h1>
    <h2>Novels</h2>
    <h3>The Void War</h3>
    <b-card-group class="project-list">
      <b-card title="Promise">
        <p class="card-text">
          Palmer Weeber, now an ordained pastor in the Church of the Lost Sheep, returns to the small farming village on
          the frontier world of Promise where he grew up. As he reconnects with friends and family, he discovers that
          one of his closest childhood friends&mdash;Corrine Thatcher&mdash;has become mentally infirm. As he reaches
          out to his friend, he slowly discovers that Corrine's apparent insanity is giving her glimpses of a powerful
          enemy. Before he realizes it, Palmer is drawn into a war for the existence of reality itself.
        </p>
        <div slot="footer">
          Status: Alpha Draft
        </div>
      </b-card>
      <b-card title="Endeavour">
        <p class="card-text">
          The Interstellar Scientific Union has lost contact with the ISS <i>Endeavour</i>, a deep space research vessel
          launched to an unexplored star system several months before. The CDS <i>Legacy</i>, on a routine supply
          mission to the ISU outpost on New Baden, is asked to attempt contact with <i>Endeavour</i>, and render any
          assistance required. What <i>Legacy</i> finds is a ghost ship, a dire warning, and a clash with an unexpected
          enemy.
        </p>
        <div slot="footer">
          Status: Planned
        </div>
      </b-card>
      <b-card title="Siege of New Baden">
        <p class="card-text">
          421st Pathfinder Regiment and 388th Fighter Wing are holding New Baden against the Grayson Pact invasion.
          <i>Legacy</i> has received the 421st's distress call, but even with <i>Legacy</i>'s assistance, the Defense
          Force's assets are outnumbered, outgunned, and three hundred light years away from reinforcements. Survival
          against the Pact assault will require exceptional ingenuity from Captain Morgan Graybill, Lieutenant Colonel
          James Price, Wing Commander Hillary Gardener, and the troops that they command.
        </p>
        <div slot="footer">
          Status: Planned
        </div>
      </b-card>
    </b-card-group>
    <b-card-group class="project-list">
      <b-card title="A Prelude on War">
        <p class="card-text">

        </p>
        <div slot="footer">
          Status: Planned
        </div>
      </b-card>
      <b-card title="The Symphony of Violence">
        <p class="card-text">

        </p>
        <div slot="footer">
          Status: Planned
        </div>
      </b-card>
      <b-card title="Void Cantata">
        <p class="card-text">

        </p>
        <div slot="footer">
          Status: Planned
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  export default {
    name: 'writing'
  }
</script>

<style scoped>
  #writing {
    margin-top: 80px;
  }

  p.card-text {
    text-align: justify;
  }

  .project-list {
    max-width: 1000px;
    margin: 0 auto !important;
  }

  .project-list-small {
    max-width: 700px;
    margin: 0 auto !important;
  }
</style>
