<template>
  <v-app id="main" :theme="theme">
    <router-view />
  </v-app>
</template>  

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
      theme: ref(),
      isDark: true,
    }
  },
  watch: {
    isDark(value: boolean) {
      this.theme = ref(this.isDark ? 'dark' : 'light')
    },
  },
})
</script>
