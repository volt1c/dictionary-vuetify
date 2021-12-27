<template>
  <div>
    <h1>{{ word }}</h1>
    <ul>
      <li v-for="(def, idx) in dictionary" :key="idx">
        {{ JSON.stringify(def) }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { fetchDictionary } from '../utils/Dictionary'

export default defineComponent({
  name: 'Word',
  data() {
    const word = this.$route.params.word as string
    return {
      word: word,
      dictionary: [],
    }
  },
  async created() {
    this.dictionary = await fetchDictionary(this.word)
  },
})
</script>