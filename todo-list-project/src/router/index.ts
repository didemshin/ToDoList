import { createRouter, createWebHistory } from 'vue-router'
import TodoListAdd from '../components/TodoListAdd.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodoListAdd
    }
  ]
})

export default router
