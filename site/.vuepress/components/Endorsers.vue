<template>
  <div>
    <h2 class="text-center text-5xl"> Endorsers </h2>
    <p class="text-center pb-12 text-2xl"><span class="font-bold">{{ items.count }}</span> endorsers so far</p>
    <ul>
      <li class="" v-if="items.attributes.SHOW_MY_NAME === true" v-for="items in items.contacts">
        <div class="flex justify-between"> 
          <p class="inline-block text-xl"> {{ items.attributes.NAME }} </p>
          <p class="inline-block text-xl"> {{ items.email }} </p>
        </div>
        <hr>
      </li>
    </ul> 
  </div>
</template>

<script>
import data from '../contacts.json'
export default {
  data () {
      return {
          items: data
      }
  }
}
</script>

<style scoped>
hr {
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
</style>