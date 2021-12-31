<template>
  <v-app-bar absolute>
    <v-app-bar-title
      ><router-link to="/">Dictionary</router-link></v-app-bar-title
    >

    <v-spacer></v-spacer>

    <v-text-field
      v-model="word"
      class="text-field-transparent"
      @keydown.enter="search(word)"
      solo
      flat
    ></v-text-field>

    <v-btn @click="search(word)" class="mr-4 ml-5" color="primary" plain>
      <v-icon left role="img">mdi-magnify</v-icon>
      <span>Find</span>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import router from '@/routes'
import { defineComponent } from 'vue'

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
})
</script>

<style>
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