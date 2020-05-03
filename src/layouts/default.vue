<template>
  <div id="app">
    <Navbar></Navbar>
    <nuxt class="bg-blue-100 min-h-screen" />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
  /* font-family: 'Open Sans'; */
  font-family: Montserrat;
  /* font-family: Helvetica; */
  /* font-family: 'Roboto'; */
  /* font-family: 'League Spartan'; */
}
</style>
