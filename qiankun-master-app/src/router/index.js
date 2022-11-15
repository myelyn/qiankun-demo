import {createRouter, createWebHistory} from 'vue-router'

const routes = [{
  path: '/',
  name: 'Home',
  redirect: '/dashboard'
},{
  path: '/dashboard',
  name: 'Dashboard',
  component: () => import ('@/pages/Dashboard/index.vue')
},{
  path: '/analysys',
  name: 'Analysys',
  component: () => import ('@/pages/Analysys/index.vue')
},{
  path: '/crowd',
  name: 'Crowd',
  component: () => import ('@/pages/Crowd/index.vue')
},{
  path: '/operation',
  name: 'Operation',
  component: () => import ('@/pages/Operation/index.vue')
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router