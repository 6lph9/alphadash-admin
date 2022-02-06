<template>
  <div class="toast-container position-absolute top-0 end-0 p-3">
    <base-toast
      v-for="(toast, index) in toasts"
      :key="index"
      :msg="toast.msg"
      :type="toast.type"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import BaseToast from '@/components/base/BaseToast.vue'
import { Toast } from 'bootstrap'

export default defineComponent({
  components: { BaseToast },
  props: {
    toasts: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  setup (props) {
    const toastssio = watch(props.toasts, (val) => {
      displayToast(val.length - 1)
    })

    function displayToast (index: number) {
      setTimeout(() => {
        const toastElList: Element[] = [].slice.call(document.querySelectorAll('.toast'))
        const toastList = toastElList.map((toastEl) => new Toast(toastEl))
        if (toastList[index]) {
          toastList[index].show()
        }
      }, 1)
    }

    return { toastssio }
  }
})
</script>
