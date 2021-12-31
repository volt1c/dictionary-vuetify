<template>
  <v-app-bar absolute>
    <v-app-bar-title
      ><router-link to="/">Dictionary</router-link></v-app-bar-title
    >

    <v-spacer></v-spacer>

    <search-text-field @search="search" />

    <v-divider vertical />

    <theme-button @swap-theme="$emit('swapTheme')" />
  </v-app-bar>
</template>

<script lang="ts">
import router from '@/routes'
import { defineComponent } from 'vue'
import ThemeButton from './ThemeButton.vue'
import SearchTextField from './SearchTextField.vue'

export default defineComponent({
  name: 'Navbar',
  data: () => ({
    word: '',
  }),
  methods: {
    search(value: string) {
      router.push(`/${value}`)
    },
  },
  components: { ThemeButton, SearchTextField },
})
</script>

<style>
/* todo change on official `vuetify 3` release */
.text-field-transparent .v-field__overlay {
  background: transparent !important;
}
.text-field-transparent .v-input__details {
  display: none;
}
.text-field-transparent {
  margin-bottom: 16px;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>