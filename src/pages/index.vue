<template>
  <div class="flex flex-wrap justify-center">
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