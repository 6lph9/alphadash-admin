<template>
  <div
    class="toast hide toasd"
    :style="style"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="d-flex justify-between">
      <div id="toast-body" class="toast-body mx-4">
        <span>{{ msg }}</span>
      </div>
      <button
        type="button"
        class="btn-close me-2 my-auto"
        :class="{ 'btn-close-white': style['light-btn'] }"
        data-bs-dismiss="toast"
        aria-label="Close"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  props: {
    msg: { type: String, default: '' },
    type: { type: String, default: 'error' }
  },
  setup (props) {
    const style = ref<Record<string, unknown>>({ 'light-btn': true })

    function handleTypes () {
      switch (props.type) {
        case 'error':
          style.value = {
            'background-color': '#f8d7da',
            color: '#842029',
            'light-btn': false
          }
          break
        case 'success':
          style.value = {
            'background-color': '#0f5132',
            color: '#d1e7dd',
            'light-btn': false
          }
          break
        case 'info':
          style.value = {
            'light-btn': true
          }
          break
        default:
          break
      }
    }

    onMounted(() => handleTypes())

    return { style }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/App.scss';

.toasd {
  background-color: $inp-bg;
  color: $text;

  max-width: 300px;
  width: 100%;
  align-items: center;
  justify-content: center;
}
</style>
