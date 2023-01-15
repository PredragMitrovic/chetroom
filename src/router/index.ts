import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '@/views/Chatroom.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
