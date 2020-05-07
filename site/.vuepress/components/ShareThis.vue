<template>
  <div id="share-section" class="text-center">
    <img class="share-icon mx-auto pb-10" src="/img/share.svg"/>
    <h3>Share Possibility Now!</h3>
      <div class="container text-2xl py-8">
        <a class="px-6 hover:underline" href="http://twitter.com/intent/tweet?text=A+different+future+is+possible%21;url=https%3A%2F%2Fwww.possibilitynow.org" target="_blank" rel="nofollow noopener">Twitter</a>
        <a href="#share-section" class="hover:underline" v-clipboard:copy="thingToCopy" v-clipboard:success="onCopy" v-clipboard:error="onError">
          <span id="toBeCopied"> Copy to Clipboard </span>
        </a>
        <a class="px-6 hover:underline" target="_blank" rel="nofollow noopener" href="mailto:?body=https%3A%2F%2Fwww.possibilitynow.org">Email</a>
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
