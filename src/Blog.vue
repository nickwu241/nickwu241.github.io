<template>
  <b-row>
    <b-col class="p-0 blog-content">
      <b-list-group v-for="post in posts" :key="post.title">
        <b-list-group-item :href="post.link" class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{post.title}}</h5>
            <small class="text-muted">{{post.date}}</small>
          </div>
          <p class="mb-1">{{post.summary}}</p>
          <small class="text_muted">{{post.source}} • {{post.duration}} read</small>
        </b-list-group-item>
      </b-list-group>
    </b-col>
  </b-row>
</template>

<script>
import posts from "./posts.json";

export default {
  data() {
    return { posts };
  }
};
</script>

<style scoped>
.blog-content {
  background-color: white;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
</style>