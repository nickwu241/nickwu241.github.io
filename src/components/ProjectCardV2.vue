<template>
  <div class="project-container relative bg-black overflow-hidden rounded-lg">
    <a
      class="hover-overlay min-h-full min-w-full text-white absolute flex flex-col justify-center items-center"
      :href="project.ghlink"
      target="_blank"
    >
      <div class="p-10 max-w-xl">
        <p class="font-bold text-base md:text-3xl ">{{ project.name }}</p>
        <p class="font-normal text-sm md:text-base">{{ project.subtitle }}</p>
        <!-- <p
          class="font-light text-xs md:text-sm mt-5 leading-relaxed tracking-wide"
        >
          {{ project.description }}
        </p> -->
      </div>
    </a>
    <img
      :src="project.imgsrc"
      :alt="project.name"
      class="object-cover w-full"
    />
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="postcss">
.project-container {
  transition: 500ms;
  transform: scale(0.97);
}

.project-container .hover-overlay {
  transition: 500ms;
  opacity: 0;
  z-index: 1;
}

.project-container:hover {
  transition: 500ms;
  transform: scale(1);
}

.project-container:hover .hover-overlay {
  @apply cursor-pointer;
  transition: 500ms;
  opacity: 1;
}

.project-container:hover img {
  transition: 500ms;
  opacity: 15%;
}
</style>