<template>
  <div class="w-full">
    <div class="inner-container pt-24 mx-auto max-w-4xl">
      <Home v-if="$page.frontmatter.layout === 'home'" />
    </div>
  </div>
</template>

<script>
import Home from "../components/Home.vue";

export default {
  components: {
    Home
  },
  data() {
    return {
    };
  },
};
</script>
