<template>
  <v-card class="px-6 py-3">
    <div v-if="isLoading">loading...</div>
    <div v-else-if="isError">
      <h1>{{ dictionary.title }} for ``{{ word }}``</h1>
      <h4>{{ dictionary.message }}</h4>
      <p>{{ dictionary.resolution }}</p>
    </div>
    <div v-else>
      <h1>{{ word }}</h1>
      <v-divider></v-divider>
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
                <li v-for="(definition, idx) in meaning.definitions" :key="idx">
                  <p>
                    <strong> Definition: </strong>
                    &lt;&lt; {{ definition.definition }} &gt;&gt;
                  </p>
                  <p v-if="definition.example">
                    <strong> Example: </strong> „{{ definition.example }}”
                  </p>
                  <p v-if="definition.synonyms.length !== 0" class="ml-2">
                    <strong> Synonyms: </strong>
                    <router-link
                      v-for="(synonym, idx) in definition.synonyms"
                      :key="idx"
                      :to="`/${synonym}`"
                    >
                      {{ (idx == 0 ? '' : ', ') + synonym }}
                    </router-link>
                  </p>
                  <p v-if="definition.antonyms.length !== 0" class="ml-2">
                    <strong> Antonyms: </strong>
                    <router-link
                      v-for="(antonym, idx) in definition.antonyms"
                      :key="idx"
                      :to="`/${antonym}`"
                    >
                      {{ (idx == 0 ? '' : ', ') + antonym }}
                    </router-link>
                  </p>
                </li>
              </ul>
            </li>
          </ul>
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
      this.isError = isFailureMessage(this.dictionary)
    },
  },
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