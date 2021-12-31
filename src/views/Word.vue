<template>
  <v-card class="px-6 py-3">
    <div v-if="isLoading">loading...</div>
    <div v-else-if="isError">
      <h1>😥 {{ dictionary.title }} 😓</h1>
      <h4>{{ dictionary.message }}</h4>
      <p>{{ dictionary.resolution }}</p>
    </div>
    <div v-else>
      <h1>{{ word }}</h1>
      <v-divider></v-divider>
      <ul>
        <li v-for="(def, idx) in dictionary" :key="idx">
          <word-defnition :word="def" :idx="idx" />
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  fetchDictionary,
  Word,
  isWordArray,
  FailureMessage,
  isFailureMessage,
} from '@/utils/dictionary'
import WordDefnition from '@/components/Word/WordDefnition.vue'

export default defineComponent({
  name: 'Word',
  data() {
    const word = this.$route.params.word as string
    const data: {
      dictionary: any
      isLoading: boolean
      isError: boolean
    } = {
      dictionary: undefined,
      isLoading: false,
      isError: false,
    }
    return data
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
      this.isLoading = true
      this.dictionary = await fetchDictionary(word)
      this.isLoading = false
    },
    isWordArray(value: FailureMessage | Word[]): boolean {
      return isWordArray(value)
    },
  },
  watch: {
    dictionary() {
      this.isError = isFailureMessage(this.dictionary)
    },
  },
  components: { WordDefnition },
})
</script>

<style>
ul {
  list-style-type: none;
}
ul li {
  margin: 0.5rem;
}
</style>