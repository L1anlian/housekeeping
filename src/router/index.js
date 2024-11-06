import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Rooms from '../views/Rooms.vue'
import Staff from '../views/Staff.vue'
import Tasks from '../views/Tasks.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/rooms',
      name: 'Rooms',
      component: Rooms
    },
    {
      path: '/staff',
      name: 'Staff',
      component: Staff
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    }
  ]
})

export default router