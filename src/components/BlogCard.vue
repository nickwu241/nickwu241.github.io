<template>
  <div class="w-screen md:w-2/3">
    <a :href="post.link" target="_blank">
      <div class="bg-white hover:bg-gray-200 cursor-pointer flex">
        <!-- md+: show image on the left -->
        <img
          class="hidden md:block self-center object-contain h-48 w-48 rounded m-2"
          :src="post.imgsrc"
        />
        <!-- sm-: flex here to show image on top right -->
        <div class="flex p-3 w-full">
          <!-- Main Content -->
          <div class="flex-grow flex flex-col">
            <div class="mb-3">
              <!-- lg+: show date -->
              <div class="hidden lg:block float-right text-gray-700 text-sm">
                {{ post.date }}
              </div>

              <div class="text-gray-900 font-bold text-lg md:text-xl">
                {{ post.title }}
              </div>

              <p class="text-gray-700 text-sm md:text-base">
                {{ post.summary }}
              </p>
            </div>
            <p class="mt-auto text-gray-600 text-xs md:text-sm">
              {{ post.source }} • {{ post.duration }} read
            </p>
          </div>
          <!-- sm-: show image on top right -->
          <img class="md:hidden object-contain object-top h-24 w-24" :src="post.imgsrc" />
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>