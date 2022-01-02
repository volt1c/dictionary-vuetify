<template>
  <v-card class="px-6 py-3">
    <div v-if="isLoading">loading...</div>
    <error-communicate v-else-if="isError" :message="dictionary" />
    <word-communicate
      v-else
      v-bind:word="word"
      v-bind:dictionary="dictionary"
    />
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
import ErrorCommunicate from '@/components/Word/ErrorCommunicate.vue'
import WordCommunicate from '@/components/Word/WordCommunicate.vue'

export default defineComponent({
  name: 'Word',
  data() {
    const data: {
      dictionary: any
      isLoading: boolean
      isError: boolean
    } = {
      dictionary: [],
      isLoading: false,
      isError: false,
    }
    return data
  },
  computed: {
    word() {
      const word = this.$route.params.word
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
    '$route.params.word': {
      handler(word: string) {
        this.loadDictionary(word)
      },
      immediate: true,
      deep: true,
    },
  },
  components: { ErrorCommunicate, WordCommunicate },
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