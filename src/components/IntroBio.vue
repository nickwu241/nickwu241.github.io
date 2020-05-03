<template>
  <div class="leading-loose">
    <p class="text-3xl">
      👋 Hi, I'm Nick! 😊
    </p>
    <p class="leading-relaxed">
      I'm a <span class="font-bold">Software Engineer</span>
      passionate about
      <span class="font-bold">Reliable Systems</span> and
      <span class="font-bold">User Experience</span>.
    </p>
    <p class="mt-2">
      I build Data Infrastructure at
      <img
        src="images/icons/affirm-long.png"
        class="object-center object-scale-down inline h-8 affirm"
      />, previously:
    </p>
    <div class="ml-6">
      <span class="break-keep-all">
        <a
          href="https://blog.usejournal.com/my-internship-at-shopify-%EF%B8%8F-535c2e4a6e81"
          target="_blank"
          class="font-bold shopify"
        >
          <img
            src="images/icons/shopify.png"
            class="object-center object-scale-down inline w-4 h-4"
          />
          <span>Shopify</span>
        </a>
        ,
      </span>
      <span>
        <img
          src="images/icons/hootsuite.png"
          class="object-center object-scale-down inline w-4 h-4"
        />
        Hootsuite,
      </span>
      <span>
        <img
          src="images/icons/ubc.png"
          class="object-center object-scale-down inline w-4 h-4"
        />
        UBC.
      </span>
    </div>
    <p class="mt-4">
      I'm a builder by ❤️so you'll find me creating apps at hackathons, meetups,
      and cafes at night and on the weekends!
    </p>
  </div>
</template>

<script>
export default {}
</script>


<style scoped lang="postcss">
.shopify {
  color: #96bf48;
}

.shopify:hover {
  @apply opacity-75 cursor-pointer;
}

.shopify > span {
  @apply underline;
}

.shopify:hover > span {
  @apply no-underline;
}
</style>