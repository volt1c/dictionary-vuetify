<template>
  <v-app-bar app>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-app-bar-title
      ><router-link to="/">Dictionary</router-link></v-app-bar-title
    >

    <v-spacer></v-spacer>

    <v-text-field
      v-model="word"
      class="text-field-transparent"
      solo
      flat
    ></v-text-field>

    <router-link style="" :to="word">
      <v-btn class="mr-4 ml-5" color="primary" plain>
        <v-icon left icon="mdi-handshake-outline"></v-icon>

        <span>Find</span>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',
  data: () => ({
    word: '',
  }),
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