<template>
  <div id="bio">
    <navbar/>
    <h1>Robert Herschel Hawk</h1>
    <div class="bio-content">
      <img class="portrait" src="../assets/portrait.jpg" alt="Portrait of Robert Hawk"/>
      <div class="hspace"></div>
      <div class="bio-text">
        <p>
          Hi! I'm Robert. I am a programmer by trade and I write Science Fiction on the side.
          My go-to language is Python, but I also have experience with Java, C,
          C++, Javascript, and Bash. I've recently become interested in Go and it is quickly
          topping my list of go-to languages (no pun intended&hellip; okay, maybe a little).
        </p>
        <p>
          My professional background is in embedded development, devops, server maintenance, and enterprise databases. I
          also have interests in technical and scientific computing and bare metal development. My hobbies include
          flying, ham radio (call sign: AG7IF), and playing the organ.
        </p>
        <p>
          I currently live in Glendale, Arizona.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bio'
  }
</script>

<style scoped>
  #bio {
    margin-top: 80px;
  }

  .bio-content {
    display: flex;
    justify-content: center;
  }

  div.bio-text {
    max-width: 500px;
  }

  p {
    text-align: justify;
  }

  div.hspace {
    width: 100px;
  }

  div.vspace {
    height: 100px;
  }

  img.portrait {
    height: 20%;
    width: 20%;
  }
</style>
