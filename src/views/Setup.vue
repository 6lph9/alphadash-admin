<template>
  <div class="root">
    <card>
      <div class="mb-3 mt-2 w-100">
        <p class="text">
          Loading ...
        </p>
      </div>
    </card>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import axios from 'axios'

import Toast from '@/interfaces/toast.interface'
import Card from '@/components/base/Card.vue'

export default defineComponent({
  components: { Card },
  props: {
    code: { type: String, default: '', required: true },
    state: { type: String, default: '', required: true }
  },
  setup (props) {
    console.log('now on Setup.vue')
    const toasts = ref<Toast[]>([])

    const clientId = process.env.VUE_APP_DISCORD_CLIENT_ID
    const redirectURI = process.env.VUE_APP_API_URL + '/clients/create'
    const state = 'admin'
    const scope = 'identify%20email%20guilds%20guilds.join'
    const discordOauthUrl = `https://discord.com/api/oauth2/authorize?prompt=none&client_id=${clientId}&redirect_uri=${redirectURI}&state=${state}&response_type=code&scope=${scope}`

    onMounted(async () => {
      console.log(props.state)

      const client = await axios.post(
        process.env.VUE_APP_API_URL + '/clients/create',
        {},
        { params: { code: props.code, state: props.state } }
      )

      console.log(client)
    })

    return { discordOauthUrl, toasts }
  }
})
</script>
