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
      <span v-for="(synonym, idx) in definition.synonyms" :key="idx">
        {{ idx == 0 ? '' : ', ' }}
        <router-link :to="`/${synonym}`">
          {{ synonym }}
        </router-link>
      </span>
    </p>
    <p v-if="definition.antonyms.length !== 0" class="ml-2">
      <strong> Antonyms: </strong>
      <span v-for="(antonym, idx) in definition.antonyms" :key="idx">
        {{ idx == 0 ? '' : ', ' }}
        <router-link :to="`/${antonym}`">
          {{ antonym }}
        </router-link>
      </span>
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


