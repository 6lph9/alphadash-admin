<template>
  <div
    class="card cart mx-auto"
    :style="{ 'background-color': background, 'max-width': maxWidth, 'min-width': minWidth }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    loading: Boolean,
    background: {
      type: String,
      default: ''
    },
    maxWidth: {
      type: String,
      default: '25rem'
    },
    minWidth: {
      type: String,
      default: '240px'
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/App.scss';

.cart {
  background-color: $bg-secondary;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.24);
  padding: 16px;
  align-items: center;
  justify-content: center;
}
</style>
