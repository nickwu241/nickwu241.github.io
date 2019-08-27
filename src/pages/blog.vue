<template>
  <div class="md:p-4">
    <div
      v-for="post in posts"
      :key="post.title"
      class="md:flex md:justify-center"
    >
      <BlogCard class="border border-gray-400" :post="post" />
    </div>
  </div>
</template>

<script>
import posts from '~/assets/posts.json'

import BlogCard from '~/components/BlogCard.vue'

export default {
  components: {
    BlogCard
  },
  data() {
    return { posts }
  }
}
</script>

<style scoped>
</style>