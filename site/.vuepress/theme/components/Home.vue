<template>
  <div class="">
    <h1 class=""> {{ $page.frontmatter.title }} </h1>
    <h2 class=""> {{ $page.frontmatter.subtitle }} </h2>
    <Content />
  </div>
</template>

<script>
import Vue from "vue";

export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  }
};
</script>
