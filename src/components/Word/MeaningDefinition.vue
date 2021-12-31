<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { definition } from '@/utils/dictionary'

export default defineComponent({
  name: 'meaning-definition',
  setup() {},
  props: {
    definition: {
      required: true,
      type: Object as PropType<definition>,
    },
  },
  data() {
    return {
      meaning: this.meaning,
    }
  },
})
</script>


