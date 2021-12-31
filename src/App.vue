<template>
  <v-app id="main" :theme="theme">
    <v-layout>
      <navbar @swap-theme="swapTheme()" />
      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>  

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Navbar from './components/Navbar.vue'
import ThemeButton from './components/ThemeButton.vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
      theme: localStorage.getItem('theme'),
      isDark: true,
    }
  },
  methods: {
    swapTheme() {
      const theme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'
      this.theme = theme
      localStorage.setItem('theme', theme)
    },
  },
  components: { Navbar },
})
</script>
