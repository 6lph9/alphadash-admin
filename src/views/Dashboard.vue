<template>
  <div>
    <p>DASHBOARD !!!</p>
    licenses: {{ licenses }}
    <div v-for="license in licenses" :key="license.key">
      Key: {{ license.key }}<br>
      Active: {{ license.active }}
    </div>
    <div>
      <stripe-connect-button :href="'LINK !!!'" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'

import DashboardService from '@/services/dashboard.service'
import StripeConnectButton from '@/components/StripeConnectButton.vue'

import { Role } from '@/interfaces/roles.enum'
import { RolesObject } from '@/interfaces/roles-object.interface'
import { Admin } from '@/interfaces/admin.interface'
import { Client } from '@/interfaces/client.interface'

export default defineComponent({
  name: 'AdminDashboard',
  components: { StripeConnectButton },
  props: {
    name: String
  },
  setup (props) {
    console.log('qdh', props)
    const route = useRoute()

    const client = ref<Client>()
    const role = ref<Role>()
    let admin: Admin

    const licenses = ref<any[]>([]);

    (async () => {
      admin = await DashboardService.getAdmin()
      const highestRanked = getHighestRankedRoleObject(admin.roles)
      client.value = await DashboardService.getClient(highestRanked.client)
      // licenses.value = await DashboardService.getAllLicenses(client)

      console.log('licenses', licenses)
      console.log('admin', admin)
    })()

    function getHighestRankedRoleObject (rolesArray: RolesObject[]): RolesObject {
      let highestRole = rolesArray[0]

      for (const element of rolesArray) {
        if (element.role === Role.ClientOwner) return element
        if (element.role === Role.ClientAdmin) highestRole = element
      }

      return highestRole
    }

    return { route, licenses }
  }
})
</script>
