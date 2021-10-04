<template>
  <component
    :is="type"
    class="btn btn-main"
    :class="{ disabled: !active || loading }"
    :href="href"
    :style="{ 'background-color': backgroundColor, 'border-color': color }"
    :disabled="!active || loading"
    @mouseover="realcolor = ColorLuminance(color, -0.2)"
    @mouseleave="realcolor = color"
  >
    <div
      v-show="loading"
      class="spinner-border spinner-border-sm"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-show="!loading">
      <slot />
    </div>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    active: { type: Boolean, default: true },
    loading: Boolean,
    color: { type: String, default: '#7E51C7' },
    href: { type: String, default: null }
  },
  setup (props) {
    const realcolor = ref(props.color)
    const backgroundColor = ref(ColorLuminance(realcolor.value, -0.7))

    function ColorLuminance (hex: string, lum: number): string {
      // validate hex string
      hex = String(hex).replace(/[^0-9a-f]/gi, '')
      if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
      }
      lum = lum || 0

      // convert to decimal and change luminosity
      var rgb = '#'; var c; var i
      for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16)
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16)
        rgb += ('00' + c).substr(c.length)
      }

      return rgb
    }

    const type = computed(() => {
      if (props.href) return 'a'
      return 'button'
    })

    return { realcolor, ColorLuminance, type, backgroundColor }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/App.scss';

.btn-main {
  color: $title;
  background: $info;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.btn-main:hover {
  color: $title;
}
</style>
