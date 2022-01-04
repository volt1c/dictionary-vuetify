<template>
  <v-card class="px-6 py-3 home">
    <h1>Free Dictionary</h1>
    <v-divider horizontal class="mb-3" />
    <p>
      This website is created with <strong> Vue 3 </strong> and
      <strong> Vuetify 3 (Alpha) </strong>.
    </p>
    <p>Works should be resumed after the official release of vuetify 3.</p>
    <h2 class="mt-3">Thanks</h2>
    <v-divider horizontal />
    <p class="my-3">
      Thanks to
      <a href="https://github.com/meetDeveloper" target="_blank">
        <img
          class="rounded-circle"
          src="https://avatars.githubusercontent.com/u/32453612"
          alt="avatar"
          height="24"
          style="vertical-align: middle"
        />
        <strong> meetDeveloper </strong>
      </a>
      and other contributors for make
      <a href="https://dictionaryapi.dev/" target="_blank">
        <img
          src="https://dictionaryapi.dev/favicon.ico"
          alt="logo of free dictionary api"
          height="24"
          style="vertical-align: middle"
        />
        <strong> Free Dictionary API </strong>
      </a>
      which was used...
    </p>
  </v-card>
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

<style>
.thanks p {
  font-size: 32px;
}
ul li {
  margin-left: 2rem;
}
</style>
