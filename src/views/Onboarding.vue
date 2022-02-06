<template>
  <div class="root">
    <card>
      <div class="mb-3 mt-2 w-100">
        <div>name</div>
        <input
          v-model="name"
          type="text"
          class="inp"
          placeholder="MongoPreme"
        >
        <!--
        <StripeConnectButton :href="stripeOauthUrl" />
        -->
        <border-button @click="redirect">
          <span>Select Server</span>
        </border-button>
        {{ name }}
      </div>
    </card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Card from '@/components/base/Card.vue'
import BorderButton from '@/components/BorderButton.vue'

export default defineComponent({
  components: { Card, BorderButton },
  props: {
    code: { type: String, default: null },
    state: { type: String, default: null },
    guild_id: { type: String, default: null },
    permissions: { type: String, default: null }
  },
  setup () {
    console.log('now on Onboarding.vue')

    const name = ref<string>('')

    /*
    const baseUrl = 'https://connect.stripe.com/oauth'
    const clientId = process.env.VUE_APP_STRIPE_CLIENT_ID
    const redirectURI = process.env.VUE_APP_API_URL + '/account/create'
    const scope = 'read_write'
    const stripeOauthUrl = `${baseUrl}/authorize?client_id=${clientId}&redirect_uri=${redirectURI}&state=${state}&response_type=code&scope=${scope}`
    */

    const baseUrl = 'https://discord.com/oauth2'
    const clientId = process.env.VUE_APP_DISCORD_CLIENT_ID
    const redirectURI = process.env.VUE_APP_URL + '/onboarding'
    const scope = 'bot applications.commands guilds guilds.join'
    const permissions = '8'

    function redirect () {
      console.log('name', name)
      console.log('name.value', name.value)
      const discordOAuthURL = `${baseUrl}/authorize?client_id=${clientId}&permissions=${permissions}&redirect_uri=${redirectURI}&response_type=code&scope=${scope}&state=${name.value}`
      window.location.href = discordOAuthURL
    }

    return { name, redirect }
  }
})
</script>
