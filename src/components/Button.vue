<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-10 rounded-full tracking-wide focus:outline-none focus:shadow-outline"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>