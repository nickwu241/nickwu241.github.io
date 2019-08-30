<template>
  <div class="flex justify-center">
    <div class="w-screen md:w-2/3">
      <div class="m-2">
        <!-- <p class="md:text-lg">
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
        </p> -->
        <p class="text-lg mt-4">Experience</p>
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
        <p class="text-lg mt-4">Education</p>
        <LogoBullet
          imgsrc="images/icons/ubc.png"
          title="University of British Columbia"
          subtitle="Bachelor of Applied Science, Computer Engineering"
        />
        <p class="text-lg mt-4 mb-2">Contact</p>
        <a href="mailto:nickwu241@gmail.com" target="_blank">
          <button class="btn bg-red-500 hover:bg-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current mr-2"
            >
              <path
                d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
              />
            </svg>
            nickwu241@gmail.com
          </button>
        </a>
        <a href="https://linkedin.com/in/nick-wu" target="_blank">
          <button class="btn bg-blue-500 hover:bg-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current mr-2"
            >
              <title>LinkedIn</title>
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
              />
            </svg>
            nick-wu
          </button>
        </a>
        <a href="https://www.instagram.com/nickwu241" target="_blank">
          <button class="btn bg-purple-500 hover:bg-purple-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current mr-2"
            >
              <title>Instagram</title>
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
            nickwu241
          </button>
        </a>
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
.btn {
  @apply inline-flex text-white font-bold p-3 rounded-lg mb-2 mr-1;
}
</style>