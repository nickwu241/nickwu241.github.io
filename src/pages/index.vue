<template>
  <div class="flex flex-wrap justify-center">
    <div class="w-full lg:w-9/12 m-4 p-2 md:px-10 md:pb-5">
      <p class="text-4xl">
        👋 Hi, I'm Nick!
      </p>
      <p class="text-lg sm:text-xl">
        <span class="font-semibold"> Software Engineer </span> | Previously at
        <br class="sm:hidden" />
        <span class="break-keep-all">
          <img
            src="images/icons/shopify.png"
            class="object-center object-scale-down inline w-6 h-6"
          />
          Shopify,
        </span>
        <span>
          <img
            src="images/icons/hootsuite.png"
            class="object-center object-scale-down inline w-6 h-6"
          />
          Hootsuite,
        </span>
        <span>
          <img
            src="images/icons/safesoftware.png"
            class="object-center object-scale-down inline w-6 h-6"
          />
          Safe Software
        </span>
      </p>
      <p class="text-lg sm:text-xl mt-2">
        <span class="font-semibold">UBC '19</span> | Computer Engineering,
        <br class="sm:hidden" />
        Dean's Honour List
      </p>
    </div>
    <div
      v-for="project in projects"
      :key="project.name"
      class="w-auto md:w-5/12 m-2 md:m-4"
    >
      <ProjectCard :project="project" />
    </div>
  </div>
</template>

<script>
import projects from '~/assets/projects.json'

import ProjectCard from '~/components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
  },
  data() {
    return { projects }
  }
}
</script>

<style scoped>
</style>