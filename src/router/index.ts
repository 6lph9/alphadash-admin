import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const NotFoundView = () => import('@/views/NotFound.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard/:name',
    name: 'AdminDashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    props: (route) => ({ name: route.params.name })
  },
  {
    path: '/setup',
    name: 'Setup',
    beforeEnter (to) {
      const clientId = process.env.VUE_APP_DISCORD_CLIENT_ID
      const redirect = process.env.VUE_APP_API_BASE_URL + 'clients/create'
      const state = 'admin'

      if (to.query.code && to.query.state === state) return

      window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=8&redirect_uri=${redirect}&scope=bot%20applications.commands&response_type=code&state=${state}`
    },
    component: () => import('@/views/Setup.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
