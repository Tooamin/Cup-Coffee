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
    path: '/detall/:pid',
    name: 'Detall',
    component: () => import('../views/Detall.vue')
  },
  {
    path: '/pay',
    name: 'Pay',
    component: () => import('../views/Pay.vue')
  },
  {
    path: '/addresslist',
    name: 'AddressList',
    component: () => import('../views/AddressList.vue')
  },
  {
    path: '/newaddresslist',
    name: 'NewaddressList',
    component: () => import('../views/NewaddressList.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('../views/Collection.vue')
  },


  {
    path: '*',
    redirect: {
      name: 'Home'
    }
  }
  
]

const router = new VueRouter({
  routes
})

export default router
