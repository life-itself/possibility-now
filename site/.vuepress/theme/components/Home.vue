<template>
  <div class="">
    <h1 class="px-4 md:px-0 md:pt-8"> {{ $page.frontmatter.title }} </h1>
    <h2 class="px-4 md:px-0"> {{ $page.frontmatter.subtitle }} </h2>
    <Content class="px-4 md:px-0" />
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
