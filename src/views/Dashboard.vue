<template>
  <div>
    route: {{ route }}
    name: {{ name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'AdminDashboard',
  props: {
    name: String
  },
  setup (props) {
    console.log('qdh', props)
    const route = useRoute()
    return { route }
  }
})
</script>
