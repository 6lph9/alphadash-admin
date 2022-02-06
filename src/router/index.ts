import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AuthService from '@/services/auth.service'

const NotFoundView = () => import('@/views/NotFound.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'AdminDashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    props: (route) => ({ name: route.params.name }),
    meta: { admin: true }
  },
  {
    path: '/setup',
    name: 'Setup',
    beforeEnter (to) {
      const clientId = process.env.VUE_APP_DISCORD_CLIENT_ID
      const redirect = process.env.VUE_APP_URL + '/setup'
      const state = 'admin'

      if (to.query.code && to.query.state === state) return

      window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=8&redirect_uri=${redirect}&scope=bot%20applications.commands&response_type=code&state=${state}`
    },
    component: () => import('@/views/Setup.vue'),
    props: (route) => ({ code: route.query.code, state: route.query.state })
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    beforeEnter (to) {
      if (to.query.code && to.query.guild_id && to.query.permissions) {
        const qs = Object.keys(to.query)
          .map(key => `${key}=${to.query[key]}`)
          .join('&')
        window.location.href = process.env.VUE_APP_API_URL + `/admins/clients/create?${qs}`
      }
    },
    component: () => import('../views/Onboarding.vue'),
    meta: { loggedIn: true }
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

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.admin)) { // ADMIN-Guard
    await AuthService.isAdmin() ? next() : next('/login')
  } else if (to.matched.some(record => record.meta.loggedIn)) {
    await AuthService.isLoggedIn() ? next() : next('/login')
  } else next()
})

export default router
