import { createRouter, createWebHistory } from 'vue-router'
import MasterItemPage from '../pages/MasterItem.page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'master-item-page',
      component: MasterItemPage,
    },
  ],
})

export default router
