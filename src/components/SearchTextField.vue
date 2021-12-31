<template>
  <v-text-field
    v-model="word"
    class="text-field-transparent"
    @keydown.enter="$emit('search', word)"
    persistent-placeholder
    placeholder="Search"
    clearable
  ></v-text-field>

  <v-btn
    @click="$emit('search', word)"
    class="mr-4 ml-2"
    color="primary"
    variant="text"
    icon="mdi-magnify"
  >
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'search-text-field',
  emit: {
    search: (word: string) => word,
  },
  data: () => ({
    word: '',
  }),
})
</script>
