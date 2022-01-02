<template>
  <div>
    <h1>{{ word }}</h1>
    <v-divider></v-divider>
    <ul>
      <li v-for="(def, idx) in words" :key="idx">
        <word-definition :word="def" :idx="idx" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Word } from '@/utils/dictionary'
import { defineComponent, PropType } from 'vue'
import WordDefinition from './WordDefinition.vue'

export default defineComponent({
  props: {
    word: {
      required: true,
      type: String,
    },
    words: {
      required: true,
      type: Object as PropType<Array<Word>>,
    },
  },
  components: {
    WordDefinition,
  },
})
</script>
