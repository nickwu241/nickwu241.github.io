<template>
  <div>
    <!-- NAVBAR -->
    <div class="bg-dark">
      <b-navbar toggleable="md" type="dark" variant="dark" sticky class="header-container">
        <b-navbar-toggle target="nav_collapse" />

        <b-navbar-brand href="#" @click="navToSection('Projects')">
          <img class="rounded-circle" src="https://avatars3.githubusercontent.com/u/9021054?v=4&u=de203ee9993bc2e6533c96ef7f689888ade10d3f&s=45" /> Nicholas Wu
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-for="item in navItems" :key="item.title" @click="navToSection(item.title)" :class="{ active : item.isActive }">
              {{item.title}}
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav style="flex-direction: row;">
            <b-nav-item href="https://linkedin.com/in/nick-wu">
              <span class="fa fa-linkedin" />
            </b-nav-item>
            <b-nav-item href="https://github.com/nickwu241">
              <span class="fa fa-github" />
            </b-nav-item>
            <b-nav-item href="https://medium.com/@nickwu241">
              <span class="fa fa-medium" />
            </b-nav-item>
            <b-nav-item href="https://www.instagram.com/nickwu241">
              <span class="fa fa-instagram" />
            </b-nav-item>
            <b-nav-item href="https://www.youtube.com/user/nickwu241">
              <span class="fa fa-youtube" />
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <!-- CONTENT -->
    <b-container fluid class="bg-lightblue p-md-3">
      <div class="content-container">
        <!-- Projects -->
        <b-row v-if="activeItemTitle === 'Projects'" align-content="center">
          <b-col v-for="p in projects" :key="p.title" sm="12" md="6" class="px-0 px-md-2 mb-2 mb-md-4">
            <b-card :title="p.name" :sub-title="p.subtitle" :img-src="p.imgsrc[0]" :img-alt="p.name" img-top>
              <p class="card-text">{{ p.description }}</p>
              <b-button v-if="p.demolink" :href="p.demolink" variant="success">Try It</b-button>
              <b-button v-if="p.videosrc" :href="p.videosrc[0]" variant="danger">Watch on YouTube</b-button>
              <b-button :href="p.ghlink" variant="primary">View on GitHub</b-button>
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
                <p class="mb-1">
                  {{post.summary}}
                </p>
                <small class="text_muted">{{post.source}} • {{post.duration}} read</small>
              </b-list-group-item>
            </b-list-group>
          </b-col>
        </b-row>
        <!-- Resume -->
        <b-row v-else-if="activeItemTitle === 'Resume'">
          <b-col class="pt-2 section-content">
            <p> Click
              <a href="../resume.pdf">here</a>
              to view my resume if the PDF plugin is not supported by your device.
            </p>
            <embed src="../resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=fit" type="application/pdf" width="100%" :height="resumeHeight">
          </b-col>
        </b-row>
        <!-- About -->
        <b-row v-else-if="activeItemTitle === 'About'">
          <b-col class="pt-2 section-content">
            <p>Hi sneaky visitors, I'm flattered that you want to learn more about me! :)</p>
            <P>If you can't find me hacking away at projects, then I'll most likely be playing soccer, guitar, board games, video games, or watching Netflix.</P>
            <p>Happy Birthday! Here's some development tips and tricks for you!</p>
            <Gist />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import Gist from './Gist.vue'
import posts from './posts.json'
import projects from './projects.json'

export default {
  name: 'app',
  components: {
    Gist
  },
  data() {
    return {
      activeItemTitle: 'Projects',
      resumeHeight: 0,
      navItems: [
        { title: 'Projects', isActive: true },
        { title: 'Blog', isActive: false },
        { title: 'Resume', isActive: false },
        { title: 'About', isActive: false }
      ],
      posts,
      projects
    }
  },
  methods: {
    navToSection(sectionTitle) {
      this.navItems.forEach(item => {
        item.isActive = sectionTitle === item.title
      })
      this.activeItemTitle = sectionTitle
      this.resumeHeight = screen.height
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3e4e57;
}

.header-container,
.content-container {
  max-width: 960px;
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
  height: 40vw;
  object-fit: contain;
}

.fa {
  margin-right: 0.6rem;
  padding: 0.6rem;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
}

@media (min-width: 768px) {
  .card-img-top {
    height: 20vw;
  }

  .fa {
    margin: 0;
  }
}

.fa:hover {
  opacity: 0.7;
  color: white;
  text-decoration: none;
}

.fa-linkedin {
  background-color: #007bb5;
  color: white;
}

.fa-github {
  background-color: black;
  color: white;
}

.fa-medium {
  background-color: green;
  color: white;
}

.fa-instagram {
  background-color: #9a5d00;
  color: white;
}

.fa-youtube {
  background-color: #cc181e;
  color: white;
}
</style>
