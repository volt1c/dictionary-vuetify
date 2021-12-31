<template>
  <v-btn
    class="ma-2"
    fixed
    right
    bottom
    elevation="4"
    color="primary"
    icon="mdi-theme-light-dark"
    @click="swapTheme()"
  ></v-btn>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: {
    swapTheme: null,
  },
  methods: {
    swapTheme() {
      this.$emit('swapTheme')
    },
  },
})
</script>
