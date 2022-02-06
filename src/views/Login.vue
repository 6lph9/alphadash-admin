<template>
  <div class="root">
    <card>
      <div class="mb-3 mt-2 w-100">
        <p class="title mt-4 mb-1 fs-5">
          Welcome to your Admin-Dashboard!
        </p>
        <p class="text">
          Sign in to access the Dashboard.
        </p>
      </div>

      <border-button class="my-3 title" :href="discordOauthUrl">
        <span>Login with </span><span>Discord</span>
      </border-button>
    </card>

    <toast-container :toasts="toasts" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import Toast from '@/interfaces/toast.interface'
import BorderButton from '@/components/BorderButton.vue'
import Card from '@/components/base/Card.vue'
import ToastContainer from '@/components/ToastContainer.vue'

export default defineComponent({
  components: { BorderButton, Card, ToastContainer },
  setup () {
    console.log('now on login.vue')
    console.log('this is process.env.VUE_APP_API_URL', process.env.VUE_APP_API_URL)
    const toasts = ref<Toast[]>([])

    const discordClientId = process.env.VUE_APP_DISCORD_CLIENT_ID
    const redirectURI = process.env.VUE_APP_API_URL + '/auth/discord'
    const state = 'admin'
    const scope = 'identify%20email%20guilds%20guilds.join'
    const discordOauthUrl = `https://discord.com/api/oauth2/authorize?prompt=none&client_id=${discordClientId}&redirect_uri=${redirectURI}&state=${state}&response_type=code&scope=${scope}`

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
