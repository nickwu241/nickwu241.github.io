<template>
  <div>
    <nav-header/>
    <b-container fluid class="p-md-3 content-container">
      <nuxt></nuxt>
    </b-container>
  </div>
</template>

<script>
import NavHeader from '~/components/NavHeader.vue'

export default {
  components: {
    NavHeader
  }
}
</script>

<style>
/* Social Media buttons for Contact section */
@import '~/assets/bootstrap-social.css';

/* Fill up the whole height with a background colour */
html,
body {
  min-height: 100%;
  background: #d4effc;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3e4e57;
}


.header-container,
.content-container {
  max-width: 1080px;
  margin: 0 auto;
}

.fa-round {
  margin-right: 0.6rem;
  padding: 0.6rem;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
  color: white;
}

@media (min-width: 768px) {
  .fa-round {
    margin: 0;
  }
}

.fa-round:hover {
  opacity: 0.7;
  color: white;
  text-decoration: none;
}

.fa-linkedin-bg {
  background-color: #007bb5;
}

.fa-github-bg {
  background-color: black;
}

.fa-medium-bg {
  background-color: green;
}

.fa-instagram-bg {
  background-color: #bc2a8d;
}

.fa-youtube-bg {
  background-color: #cc181e;
}
</style>
