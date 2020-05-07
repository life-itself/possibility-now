<template>
  <div class="">
    <h1 class="px-4"> {{ $page.frontmatter.title }} </h1>
    <h2 class="px-4"> {{ $page.frontmatter.subtitle }} </h2>
    <Content />
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
    }
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  }
};
</script>
