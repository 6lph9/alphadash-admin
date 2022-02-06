<template>
  <img
    :src="logo"
    :alt="name + ' Logo'"
    class="rounded-circle"
    :height="size"
    :width="size"
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    logo: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '150'
    }
  }
})
</script>
