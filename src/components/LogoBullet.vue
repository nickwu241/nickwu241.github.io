<template>
  <div class="flex m-2">
    <img :src="imgsrc" class="object-center object-scale-down" />
    <div class="flex flex-col">
      <p class="text-sm font-bold">{{ title }}</p>
      <p class="text-sm">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgsrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    bullets: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
</style>