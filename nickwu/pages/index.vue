<template>
  <b-row align-content="center">
    <b-col sm="4" class="text-center my-2">
      <b-img
        fluid
        rounded="circle"
        src="images/nick.jpg"
        alt="Nick"
        width="250"
        height="250"
      />
    </b-col>
    <b-col sm="8" class="my-2">
      <h1>👋 Hi, I'm Nick!</h1>
      <p>
        I'm a Software Developer and I've previously worked at
        <b-link
          class="shopify-link"
          href="https://medium.com/@nickwu241/my-internship-at-shopify-%EF%B8%8F-535c2e4a6e81"
          target="_blank"
        >Shopify</b-link>, Hootsuite, Safe Software.
        I also spent 4 months doing research for a software performamce analysis tool at the University of British Columbia.
      </p>
      <p>
        <strong>Looking for a Developer?</strong>
        Check out my work and
        <b-link to="contact" class="contact-link">get in touch</b-link>!
      </p>
      <!-- <p>If you can't find me hacking away at projects, then I'll most likely be playing soccer ⚽, guitar 🎸, board games 🎲, video games 🎮, eating yummy food 🍛, exploring the world ✈️, or watching Netflix 📺.</p> -->
    </b-col>
    <b-col v-for="p in projects" :key="p.title" sm="12" md="6" class="px-0 px-md-2 mb-2 mb-md-4">
      <b-card
        :title="p.name"
        :sub-title="p.subtitle"
        :img-src="p.imgsrc[0]"
        :img-alt="p.name"
        img-top
      >
        <p class="card-text">{{ p.description }}</p>
        <b-button v-if="p.demolink" :href="p.demolink" variant="success" target="_blank">Try it out</b-button>
        <b-button
          v-if="p.videosrc"
          :href="p.videosrc[0]"
          variant="danger"
          target="_blank"
        >Watch on YouTube</b-button>
        <b-button v-if="p.ghlink" :href="p.ghlink" variant="primary" target="_blank">View on GitHub</b-button>
        <b-button
          v-if="p.hackerearthlink"
          :href="p.hackerearthlink"
          variant="primary"
          target="_blank"
        >View on Hackerearth</b-button>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import projects from '~/assets/projects.json'

export default {
  data() {
    return { projects }
  }
}
</script>

<style scoped>
.shopify-link {
  color: rgb(33, 137, 19);
  border-bottom: 2px solid rgb(44, 178, 26);
}

.shopify-link:hover {
  background: rgba(4, 204, 10, 0.2);
  text-decoration: none;
  transition: 500ms;
}

.contact-link {
  color: rgb(66, 164, 244);
  border-bottom: 2px solid rgb(66, 164, 244);
}

.contact-link:hover {
  background: #b9d6f1;
  text-decoration: none;
  transition: 500ms;
}

.card-img-top {
  width: 100%;
  /* height: 40vw; */
  object-fit: contain;
}

@media (min-width: 768px) {
  .card-img-top {
    height: 20vw;
  }
}
</style>