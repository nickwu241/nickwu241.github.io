<template>
  <div class="bg-dark">
    <b-navbar toggleable="md" type="dark" variant="dark" sticky class="header-container">
      <b-navbar-toggle target="nav_collapse"/>
      <b-navbar-brand to="/" exact>Nicholas Wu</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" exact>Portfolio</b-nav-item>
          <b-nav-item to="/blog" exact>Blog</b-nav-item>
          <b-nav-item to="/contact" exact>Contact</b-nav-item>
          <b-nav-item href="resume.pdf" target="_blank">
            Resume
            <i class="fa fa-xs fa-external-link"></i>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav style="flex-direction: row;">
          <b-nav-item href="https://linkedin.com/in/nick-wu" target="_blank">
            <span class="fa fa-round fa-linkedin fa-linkedin-bg"/>
          </b-nav-item>
          <b-nav-item href="https://github.com/nickwu241" target="_blank">
            <span class="fa fa-round fa-github fa-github-bg"/>
          </b-nav-item>
          <b-nav-item href="https://medium.com/@nickwu241" target="_blank">
            <span class="fa fa-round fa-medium fa-medium-bg"/>
          </b-nav-item>
          <b-nav-item href="https://www.instagram.com/nickwu241" target="_blank">
            <span class="fa fa-round fa-instagram fa-instagram-bg"/>
          </b-nav-item>
          <b-nav-item href="https://www.youtube.com/user/nickwu241" target="_blank">
            <span class="fa fa-round fa-youtube fa-youtube-bg"/>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
</script>

<style>
</style>