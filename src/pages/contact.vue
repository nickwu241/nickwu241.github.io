<template>
  <div class="flex justify-center">
    <div class="w-screen md:w-2/3">
      <div class="m-2">
        <p class="text-4xl">
          👋 Hi, I'm Nick!
        </p>
        <p class="md:text-lg">
          I'm a Software Engineer with 2+ years of industry experinece and a
          degree in Computer Engineering (minor in Commerce) from UBC.
          <br />
          I'm passionate about Web, Mobile, DevOps, Automation, Software
          Reliability, and Voice Applications.
          <br />
          Furthermore, I build out products and write technical blog posts on
          free time.
          <br />
          On this site, you can to check out some of my work and articles or
          learn more about me. Enjoy! :)
        </p>
        <p class="text-lg">Experience</p>
        <LogoBullet
          imgsrc="images/icons/shopify.png"
          title="Shopify (8 months)"
          subtitle="Software Engineering Intern - Data Infrastructure"
        />
        <LogoBullet
          imgsrc="images/icons/hootsuite.png"
          title="Hootsuite (4 months)"
          subtitle="Software Developer Intern - Production Operations"
        />
        <LogoBullet
          imgsrc="images/icons/ubc.png"
          title="University of British Columbia (4 months)"
          subtitle="Undergraduate Researcher"
        />
        <LogoBullet
          imgsrc="images/icons/safesoftware.png"
          title="Safe Software (8 months)"
          subtitle="Software Developer Intern - Platforms"
        />
        <p class="text-lg">Education</p>
        <LogoBullet
          imgsrc="images/icons/ubc.png"
          title="University of British Columbia"
          subtitle="Bachelor of Applied Science, Computer Engineering"
        />

        <p>
          Looking for a Developer? Check out my work and get in touch!
        </p>
        <p class="text-xl">
          Social:
          <a class="inline-block" href="https://linkedin.com/in/nick-wu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              class="rounded text-blue-700 fill-current"
            >
              <title>LinkedIn</title>
              <path
                d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
          <a class="inline-block" href="https://www.instagram.com/nickwu241">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              class="rounded text-purple-700 fill-current"
            >
              <title>Instagram</title>
              <path
                d="M14.667 12c0 1.473-1.194 2.667-2.667 2.667-1.473 0-2.667-1.193-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667zm3.846-3.232c.038.843.046 1.096.046 3.232s-.008 2.389-.046 3.233c-.1 2.15-1.109 3.181-3.279 3.279-.844.038-1.097.047-3.234.047-2.136 0-2.39-.008-3.232-.046-2.174-.099-3.181-1.132-3.279-3.279-.039-.845-.048-1.098-.048-3.234s.009-2.389.047-3.232c.099-2.152 1.109-3.181 3.279-3.279.844-.039 1.097-.047 3.233-.047s2.39.008 3.233.046c2.168.099 3.18 1.128 3.28 3.28zm-2.405 3.232c0-2.269-1.84-4.108-4.108-4.108-2.269 0-4.108 1.839-4.108 4.108 0 2.269 1.84 4.108 4.108 4.108 2.269 0 4.108-1.839 4.108-4.108zm1.122-4.27c0-.53-.43-.96-.96-.96s-.96.43-.96.96.43.96.96.96c.531 0 .96-.43.96-.96zm6.77-7.73v24h-24v-24h24zm-4 12c0-2.172-.009-2.445-.048-3.298-.131-2.902-1.745-4.52-4.653-4.653-.854-.04-1.126-.049-3.299-.049s-2.444.009-3.298.048c-2.906.133-4.52 1.745-4.654 4.653-.039.854-.048 1.127-.048 3.299 0 2.173.009 2.445.048 3.298.134 2.906 1.746 4.521 4.654 4.654.854.039 1.125.048 3.298.048s2.445-.009 3.299-.048c2.902-.133 4.522-1.745 4.653-4.654.039-.853.048-1.125.048-3.298z"
              />
            </svg>
          </a>
        </p>
        <p class="text-xl">
          Email:
          <a class="text-blue-600" href="mailto:nickwu241@gmail.com"
            >nickwu241@gmail.com
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import LogoBullet from '~/components/LogoBullet.vue'

export default {
  components: {
    LogoBullet
  }
}
</script>

<style scoped>
.social-media-svg {
  @apply rounded;
}
</style>