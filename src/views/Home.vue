<template>
  <input type="text" v-model="word" />
  <router-link :to="word">Search</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  data: () => ({
    word: '',
  }),
})
</script>
