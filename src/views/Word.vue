<template>
  <div>
    <h1>{{ word }}</h1>
    <div v-if="isLoading">loading...</div>
    <div v-else-if="isError">
      <h1>{{ dictionary.title }}</h1>
      <h4>{{ dictionary.message }}</h4>
      <p>{{ dictionary.resolution }}</p>
    </div>
    <div v-else>
      <ul>
        <li v-for="(def, idx) in dictionary" :key="idx">
          <h2>
            {{ idx + 1 }}. {{ word }}
            <span v-show="def.phonetic">[{{ def.phonetic }}]</span>
            <span v-for="(phonetic, idx) in def.phonetics" :key="idx">
              <button v-if="phonetic.audio" @click="play(phonetic.audio)">
                <v-icon>mdi-volume-high</v-icon>
              </button>
            </span>
          </h2>
          <ul>
            <li v-for="(meaning, idx) in def.meanings" :key="idx">
              <ul>
                <li
                  type="1"
                  v-for="(definition, idx) in meaning.definitions"
                  :key="idx"
                >
                  <h4>&lt;&lt; {{ definition.definition }} &gt;&gt;</h4>
                  <p>{{ definition.example }}</p>
                  <p v-if="definition.synonyms.length !== 0">
                    <strong> synonyms: </strong>
                    <router-link
                      v-for="(synonym, idx) in definition.synonyms"
                      :key="idx"
                      :to="`/${synonym}`"
                    >
                      {{ (idx == 0 ? '' : ', ') + synonym }}
                    </router-link>
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  fetchDictionary,
  Word,
  isWordArray,
  FailureMessage,
} from '@/utils/dictionary'

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
      isLoading: true,
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
    play(url: string) {
      const audio = new Audio(url)
      audio.play()
    },
    isWordArray(value: FailureMessage | Word[]): boolean {
      return isWordArray(value)
    },
  },
  watch: {
    dictionary() {
      this.isWord = isWordArray(this.dictionary)
    },
  },
})
</script>