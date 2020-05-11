 <template>
  <div class="h-page" id="app">
    <ul>
      <li class="" v-for="things in things.values">
        <div v-if="things[0] !== ''" class="flex flex-row flex-wrap py-4 rounded bg-white my-6 overflow-hidden shadow-lg">
          <div class="flex-1"> 
            <div class="px-6 py-4">
              <h2 class="text-2xl underline"><a :href="things[2]" target="_blank"> {{ things[0] }} </a></h2>
              <p class="text-gray-700 text-base">
              {{ things[3] }}
              </p>
            </div>
            <div v-if="things[5] !== ''" class="px-6 py-4">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"> {{ things[5] }}</span>
            </div>
          </div>
          <div class="flex-1 hidden sm:block">
            <img v-if="things[4] !== ''" class="px-20 py-10" :src="things[4]" alt="">
            <img v-if="things[4] === ''" class="px-20 py-10" src="https://images.unsplash.com/photo-1579296440566-1a83e9d6fd5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
          </div>
        </div>
      </li>
    </ul> 
   </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      things: []
    }
  },
  async created() {
    try {
      const res = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1QJpTHWr9RKZGFaKjIR6itpQqQlGJNfXmoR8nFw-72EU/values/Directories!A1%3AJ?key=AIzaSyAoc8ZwdOlnnhww-GwAgZpUrb9gcGMmmZ0`)

      this.things = res.data; 
    } catch(e) {
      console.error(e)
    }
  },
}
</script>

<style>

li {
  list-style: none;
}

</style>
