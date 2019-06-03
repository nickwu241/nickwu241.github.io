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
      <div class="upscribe-embed" data-src="https://upscri.be/3683ae"></div>
    </b-col>
  </b-row>
</template>

<script>
import posts from "./posts.json";

export default {
  data() {
    return { posts };
  },
  beforeCreate() {
    // Upscribe Embed code for sign up form.
    window.upsettings = { api_key: "9c038033-b73b-85e2e10dc6" };
    (function() {
      var w = window;
      var up = w.Upscribe;
      if (typeof up === "function") {
        up("reattach_activator");
        up("update", upsettings);
      } else {
        var d = document;
        var i = function() {
          i.c(arguments);
        };
        i.q = [];
        i.c = function(args) {
          i.q.push(args);
        };
        w.Upscribe = i;
        function l() {
          var s = d.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://upscri.be/js/snippet.js";
          var x = d.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
        }
        if (w.attachEvent) {
          w.attachEvent("onload", l);
        } else {
          w.addEventListener("load", l, false);
        }
      }
    })();
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