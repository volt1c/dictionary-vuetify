import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Word from '../views/Word.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
