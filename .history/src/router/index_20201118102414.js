import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('../views/Menu.vue')
      },
      {
        path: 'shopbag',
        name: 'Shopbag',
        component: () => import('../views/Shopbag.vue')
      },
      {
        path: 'my',
        name: 'My',
        component: () => import('../views/My.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/detall',
    name: 'Detall',
    component: () => import('../views/Detall.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
