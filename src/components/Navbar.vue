<template>
  <!-- .justify-between for pushing Hamburger Menu to edge on Mobile -->
  <nav
    class="flex flex-wrap items-center justify-between bg-gray-800 text-gray-600 px-6 py-2 md:py-4"
  >
    <nuxt-link
      to="/"
      class="block text-2xl text-white md:inline-block md:mt-0 mr-4"
    >
      Nicholas Wu
    </nuxt-link>
    <!-- Hamburger Menu on Mobile -->
    <div class="block md:hidden" @click="toggleNavMenu">
      <button class="px-3 py-2 border rounded text-white border-white">
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>

    <div
      v-if="shouldShowNavMenu"
      class="w-full block flex-grow md:flex md:items-center md:w-auto"
    >
      <div class="flex-auto"></div>
      <nuxt-link
        to="/"
        class="block md:inline-block mt-2 md:mt-0 mr-4 px-2 py-1 text-lg hover:text-white"
        @click.native="toggleNavMenu"
        >Portfolio</nuxt-link
      >
      <nuxt-link
        to="/blog"
        class="block md:inline-block mt-2 md:mt-0 mr-4 px-2 py-1 text-lg hover:text-white"
        @click.native="toggleNavMenu"
        >Blog</nuxt-link
      >
      <!-- <nuxt-link
        to="/contact"
        class="block md:inline-block mt-2 md:mt-0 mr-4 px-2 py-1 text-lg hover:text-white"
        @click.native="toggleNavMenu"
        >Contact</nuxt-link
      > -->
      <a
        href="/resume.pdf"
        target="_blank"
        class="block md:inline-block mt-2 md:mt-0 mr-4 px-2 py-1 text-lg hover:text-white"
        @click.native="toggleNavMenu"
      >
        <div class="flex">
          Resume
          <svg
            class="self-center fill-current w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>External Link</title>
            <path
              d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
            />
          </svg>
        </div>
      </a>
      <SocialMediaBar class="mt-1 px-2 py-1 md:mt-0 md:p-0" />
    </div>
  </nav>
</template>

<script>
import SocialMediaBar from '~/components/SocialMediaBar.vue'

const MD_BREAKPOINT = 768

export default {
  components: {
    SocialMediaBar
  },
  data() {
    return {
      navMenuOpened: false,
      windowWidth: 0
    }
  },
  computed: {
    shouldShowNavMenu() {
      return this.windowWidth >= MD_BREAKPOINT || this.navMenuOpened
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
  },
  methods: {
    toggleNavMenu() {
      this.navMenuOpened = !this.navMenuOpened
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-white;
}
</style>
