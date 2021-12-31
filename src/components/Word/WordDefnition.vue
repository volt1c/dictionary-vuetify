<template>
  <div>
    <h2>
      <span v-if="idx">{{ idx + 1 }}. </span>{{ word.word }}
      <span v-show="word.phonetic">[{{ word.phonetic }}]</span>
      <span v-for="(phonetic, idx) in word.phonetics" :key="idx">
        <button v-if="phonetic.audio" @click="play(phonetic.audio)">
          <v-icon>mdi-volume-high</v-icon>
        </button>
      </span>
    </h2>
    <ul>
      <li v-for="(meaning, idx) in word.meanings" :key="idx">
        <ul>
          <li v-for="(definition, idx) in meaning.definitions" :key="idx">
            <meaning-definition :definition="definition" />
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Word } from '@/utils/dictionary'
import { defineComponent, PropType } from 'vue'
import MeaningDefinition from './MeaningDefinition.vue'

export default defineComponent({
  name: 'word-definition',
  setup() {},
  props: {
    word: {
      require: true,
      type: Object as PropType<Word>,
    },
    idx: {
      require: false,
      type: Number,
    },
  },
  methods: {
    play(url: string) {
      const audio = new Audio(url)
      audio.play()
    },
  },
  components: { MeaningDefinition },
})
</script>
