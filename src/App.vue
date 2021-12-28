<template>
  <v-app id="main" :theme="theme">
    <navbar />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>  

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Navbar from './components/Navbar.vue'

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
  components: { Navbar },
})
</script>
