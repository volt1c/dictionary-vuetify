<template>
  <v-card class="px-6 py-3">
    <div v-if="isLoading">loading...</div>
    <error-communicate
      v-else-if="isFailureMessage(response)"
      :message="response"
    />
    <word-communicate
      v-else-if="isWordArray(response)"
      v-bind:word="word"
      v-bind:words="response"
    />
    <h1 v-else>Problem with api response type</h1>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  FailureMessage,
  fetchDictionary,
  isFailureMessage,
  isWordArray,
  Word,
} from '@/utils/dictionary'
import ErrorCommunicate from '@/components/Word/ErrorCommunicate.vue'
import WordCommunicate from '@/components/Word/WordCommunicate.vue'

type dataType = {
  response: Array<Word> | FailureMessage
  isLoading: boolean
  isError: boolean
}

export default defineComponent({
  name: 'Word',
  data(): dataType {
    const data: dataType = {
      response: [],
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
    isFailureMessage: (v): v is FailureMessage => isFailureMessage(v),
    isWordArray: (v): v is Word[] => isWordArray(v),
  },
  watch: {
    '$route.params.word': {
      async handler(word: string) {
        this.isLoading = true
        this.response = await fetchDictionary(word)
        this.isLoading = false
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
