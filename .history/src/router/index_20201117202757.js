import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router