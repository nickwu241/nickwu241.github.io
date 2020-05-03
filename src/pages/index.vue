<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-1/3 self-center hidden lg:block">
        <img
          src="/images/undraw_welcome_cats_thqn.svg"
          alt="Welcome!"
          class="p-4"
        />
      </div>
      <div class="w-full lg:w-2/3 max-w-3xl">
        <IntroBio class="m-3 sm:m-5"></IntroBio>
      </div>
    </div>
    <div class="flex flex-wrap mb-5">
      <div class="w-auto lg:w-1/2 sm:p-2 sm:pr-1">
        <ProjectCardV2 :project="projects[0]" />
      </div>
      <div class="w-auto lg:w-1/2 sm:p-2 sm:pl-1">
        <ProjectCardV2 :project="projects[1]" />
      </div>
      <div class="w-auto lg:w-1/2 sm:p-2 sm:pr-1">
        <ProjectCardV2 :project="projects[2]" />
      </div>
      <div class="w-auto lg:w-1/2 sm:p-2 sm:pl-1">
        <ProjectCardV2 :project="projects[3]" />
      </div>
    </div>
  </div>
</template>

<script>
import projects from '~/assets/projects.json'

// import ProjectCard from '~/components/ProjectCard.vue'
import IntroBio from '~/components/IntroBio.vue'
import ProjectCardV2 from '~/components/ProjectCardV2.vue'

export default {
  components: {
    // ProjectCard,
    ProjectCardV2,
    IntroBio
  },
  data() {
    return { projects }
  }
}
</script>

<style scoped lang="postcss">
</style>