<template>
  <div>
    <!-- NAVBAR -->
    <div class="bg-dark">
      <b-navbar toggleable="md" type="dark" variant="dark" sticky class="header-container">
        <b-navbar-toggle target="nav_collapse" />

        <b-navbar-brand href="#" @click="navToSection('Portfolio')">Nicholas Wu</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-for="item in navItems" :key="item.title" @click="navToSection(item.title)" :class="{ active : item.isActive }"> {{item.title}}</b-nav-item>
            <b-nav-item href="resume.pdf" target="_blank">Resume</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav style="flex-direction: row;">
            <b-nav-item href="https://linkedin.com/in/nick-wu" target="_blank">
              <span class="fa fa-round fa-linkedin fa-linkedin-bg" />
            </b-nav-item>
            <b-nav-item href="https://github.com/nickwu241" target="_blank">
              <span class="fa fa-round fa-github fa-github-bg" />
            </b-nav-item>
            <b-nav-item href="https://medium.com/@nickwu241" target="_blank">
              <span class="fa fa-round fa-medium fa-medium-bg" />
            </b-nav-item>
            <b-nav-item href="https://www.instagram.com/nickwu241" target="_blank">
              <span class="fa fa-round fa-instagram fa-instagram-bg" />
            </b-nav-item>
            <b-nav-item href="https://www.youtube.com/user/nickwu241" target="_blank">
              <span class="fa fa-round fa-youtube fa-youtube-bg" />
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <!-- CONTENT -->
    <b-container fluid class="p-md-3">
      <div class="content-container">
        <!-- Portfolio -->
        <b-row v-if="activeItemTitle === 'Portfolio'" align-content="center">
          <b-col sm="4" class="text-center my-2">
            <b-img fluid rounded="circle" src="./src/assets/nick.jpg" alt="Nick" width="250" height="250"/>
          </b-col>
          <b-col sm="8" class="my-2">
            <h1>👋 Hi, I'm Nick!</h1>
            <p>
              I'm a Software Developer and I've previously worked at <b-link class="shopify-link" href="https://medium.com/@nickwu241/my-internship-at-shopify-%EF%B8%8F-535c2e4a6e81" target="_blank">Shopify</b-link>, Hootsuite, Safe Software.
              I also spent 4 months doing research for a software performamce analysis tool at the University of British Columbia.
            </p>
            <p>
              <strong>Looking for a Developer?</strong> Check out my <b-link class="resume-link" href="resume.pdf" target="_blank">resume</b-link> & projects below.
            </p>
            <!-- <p>If you can't find me hacking away at projects, then I'll most likely be playing soccer ⚽, guitar 🎸, board games 🎲, video games 🎮, eating yummy food 🍛, exploring the world ✈️, or watching Netflix 📺.</p> -->
          </b-col>
          <b-col v-for="p in projects" :key="p.title" sm="12" md="6" class="px-0 px-md-2 mb-2 mb-md-4">
            <b-card :title="p.name" :sub-title="p.subtitle" :img-src="p.imgsrc[0]" :img-alt="p.name" img-top>
              <p class="card-text">{{ p.description }}</p>
              <b-button v-if="p.demolink" :href="p.demolink" variant="success" target="_blank">Try it out</b-button>
              <b-button v-if="p.videosrc" :href="p.videosrc[0]" variant="danger" target="_blank">Watch on YouTube</b-button>
              <b-button v-if="p.ghlink" :href="p.ghlink" variant="primary" target="_blank">View on GitHub</b-button>
              <b-button v-if="p.hackerearthlink" :href="p.hackerearthlink" variant="primary" target="_blank">View on Hackerearth</b-button>
            </b-card>
          </b-col>
        </b-row>
        <!-- Blog -->
        <b-row v-if="activeItemTitle === 'Blog'">
          <b-col class="p-0 section-content">
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
        <!-- Contact -->
        <b-row v-if="activeItemTitle === 'Contact'">
          <b-col md="2"></b-col>
          <b-col md="8">
            <h1 class="mt-2">Getting in touch</h1>
            <p>Message me on any of these platforms:</p>
            <div class="d-flex flex-wrap">
              <a class="btn btn-social btn-envelope mr-2 mb-2" href="mailto:nickwu241@gmail.com" target="_blank">
                <span class="fa fa-envelope-o"></span> nickwu241@gmail.com
              </a>
              <a class="btn btn-social btn-linkedin mr-2 mb-2" href="https://linkedin.com/in/nick-wu" target="_blank">
                <span class="fa fa-linkedin"></span> nick-wu
              </a>
              <a class="btn btn-social btn-instagram mr-2 mb-2" href="https://www.instagram.com/nickwu241" target="_blank">
                <span class="fa fa-instagram"></span> @nickwu241
              </a>
            </div>
            <p class="mt-2">Or just write a message below:</p>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdJrNuLMbDQpzNVauvBW5gtgsJ6UA1LnzG7gyC9YkE9rDj94w/viewform?embedded=true" width="100%" height="894" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
          </b-col>
          <b-col md="2"></b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import posts from "./posts.json";
import projects from "./projects.json";

export default {
  name: "app",
  data() {
    return {
      activeItemTitle: "Portfolio",
      navItems: [
        { title: "Portfolio", isActive: true },
        { title: "Blog", isActive: false },
        { title: "Contact", isActive: false }
      ],
      posts,
      projects
    };
  },
  methods: {
    navToSection(sectionTitle) {
      this.navItems.forEach(item => {
        item.isActive = sectionTitle === item.title;
      });
      this.activeItemTitle = sectionTitle;
    }
  }
};
</script>

<style>
/* Social Media buttons for Contact section */
@import './bootstrap-social.css';

/* Fill up the whole height with a background colour */
html, body {
  min-height: 100%;
  /* background: #ebf5fa; */
  background: #d4effc;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3e4e57;
}

.header-container,
.content-container {
  max-width: 1080px;
  margin: 0 auto;
}

.bg-lightblue {
  background: #ebf5fa;
}

.section-content {
  background-color: white;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-img-top {
  width: 100%;
  /* height: 40vw; */
  object-fit: contain;
}

.btn-round {
  border-radius: 64px;
}

.shopify-link {
  color: rgb(33, 137, 19);
  border-bottom: 2px solid rgb(44, 178, 26);
}

.shopify-link:hover {
  color: inherit;
  background: rgba(7, 241, 16, .2);
  text-decoration: none;
  transition: 500ms;
}

.resume-link {
  color: rgb(66, 164, 244);
  border-bottom: 2px solid rgb(66, 164, 244);
}

.resume-link:hover {
  color: inherit;
  background: #cee6fd;
  text-decoration: none;
  transition: 500ms;
}

.fa-round {
  margin-right: 0.6rem;
  padding: 0.6rem;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
  color: white;
}

@media (min-width: 768px) {
  .card-img-top {
    height: 20vw;
  }

  .fa-round {
    margin: 0;
  }
}

.fa-round:hover {
  opacity: 0.7;
  color: white;
  text-decoration: none;
}

.fa-linkedin-bg {
  background-color: #007bb5;
}

.fa-github-bg {
  background-color: black;
}

.fa-medium-bg {
  background-color: green;
}

.fa-instagram-bg {
  background-color: #bc2a8d;
}

.fa-youtube-bg {
  background-color: #cc181e;
}
</style>
