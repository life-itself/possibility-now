<template>
  <div id="share-section" class="text-center">
    <img src="/img/share.svg" class="share-icon mx-auto pb-10"/>
    <h3>Share Possibility Now!</h3>
    <div class="container text-2xl py-8">
      <a href="http://twitter.com/intent/tweet?text=A+different+future+is+possible%21;url=https%3A%2F%2Fwww.possibilitynow.org" target="_blank" rel="nofollow noopener" class="px-6 hover:underline">Twitter</a>
      <a href="#share-section" v-clipboard:copy="thingToCopy" v-clipboard:success="onCopy" v-clipboard:error="onError">
        <span id="toBeCopied" class="hover:underline"> Copy to Clipboard </span>
      </a>
      <a href="mailto:?body=https%3A%2F%2Fwww.possibilitynow.org" target="_blank" rel="nofollow noopener" class="px-6 hover:underline">Email</a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueClipboard from 'vue-clipboard2';
import { setDefault } from '../theme/util';

Vue.use(VueClipboard);

export default {
  data() {
    return {
      thingToCopy: "https://possibilitynow.org/"
    }
  },
  methods: {
     onCopy: function () {
      document.getElementById('toBeCopied').innerHTML = "Copied!",
      setTimeout(setDefault, 3000)
      
    },
    onError: function () {
      document.getElementById('toBeCopied').innerHTML = "Failed to copy text :("
    },
    setDefault,
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  }
};
</script>
