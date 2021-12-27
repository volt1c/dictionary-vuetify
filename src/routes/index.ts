import { createRouter, createWebHistory } from 'vue-router'
import Word from '@views/Word.vue'
import Home from '@views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:word',
    name: 'Word',
    component: Word,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
