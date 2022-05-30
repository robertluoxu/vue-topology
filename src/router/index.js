import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Center',
    component: () => import('../views/Center.vue')
  },
  {
    path: '/Topology',
    name: 'Topology',
    component: () => import('../views/Topology.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
