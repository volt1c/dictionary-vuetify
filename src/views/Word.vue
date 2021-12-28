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
import { fetchDictionary } from '@/utils/dictionary'

export default defineComponent({
  name: 'Word',
  data() {
    const word = this.$route.params.word as string
    return {
      dictionary: [],
    }
  },
  computed: {
    word() {
      const word = this.$route.params.word
      this.loadDictionary(word)
      return word
    },
  },
  methods: {
    async loadDictionary(word: string) {
      this.dictionary = await fetchDictionary(word)
    },
  },
})
</script>