<template>
  <div class="root">
    <card>
      <div class="mb-3 mt-2 w-100">
        <p class="text">
          Sign in to access the Dashboard.
        </p>
      </div>
    </card>

    <toast-container :toasts="toasts" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import Toast from '@/interfaces/toast.interface'
import Card from '@/components/Card.vue'

export default defineComponent({
  components: { Card },
  setup () {
    console.log('now on login.vue')
    const toasts = ref<Toast[]>([])

    const clientId = process.env.VUE_APP_DISCORD_CLIENT_ID
    const redirectURI = process.env.VUE_APP_API_BASE_URL + 'auth/discord'
    const state = 'admin'
    const scope = 'identify%20email%20guilds%20guilds.join'
    const discordOauthUrl = `https://discord.com/api/oauth2/authorize?prompt=none&client_id=${clientId}&redirect_uri=${redirectURI}&state=${state}&response_type=code&scope=${scope}`

    onMounted(() => {
      const route = useRoute()
      if (route.query?.error && typeof route.query?.error === 'string') {
        console.log('Query-Error:', route.query.error)
        toasts.value.push({ msg: route.query.error, type: 'error' })
      }
    })

    return { discordOauthUrl, toasts }
  }
})
</script>
