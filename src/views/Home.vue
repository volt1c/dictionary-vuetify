<template>
  <div>
    <v-text-field v-model="word" />
    <router-link :to="word"><v-btn block> Search </v-btn></router-link>
  </div>
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
