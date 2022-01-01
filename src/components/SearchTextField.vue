<template>
  <v-text-field
    v-model="word"
    class="text-field-transparent"
    @keydown.enter="search(word)"
    persistent-placeholder
    placeholder="Search"
    clearable
  ></v-text-field>

  <v-btn
    @click="search(word)"
    class="mr-4 ml-2"
    color="primary"
    variant="text"
    icon="mdi-magnify"
  >
  </v-btn>
</template>

<script lang="ts">
import router from '@/routes'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'search-text-field',
  data: () => ({
    word: '',
  }),
  methods: {
    search(value: string) {
      router.push(`/${value}`)
    },
  },
})
</script>
