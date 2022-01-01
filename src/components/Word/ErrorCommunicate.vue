<template>
  <div>
    <h1>😥 {{ message.title }} 😓</h1>
    <h4>{{ message.message }}</h4>
    <p>{{ message.resolution }}</p>
  </div>
</template>

<script lang="ts">
import { FailureMessage } from '@/utils/dictionary'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    message: {
      required: true,
      type: Object as PropType<FailureMessage>,
    },
  },
})
</script>
