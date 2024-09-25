import { createRouter, createWebHistory } from 'vue-router'
import MasterItemPage from '../pages/MasterItem.page.vue'
import MasterDetailPage from '../pages/MasterEdit.page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'master-item-page',
      component: MasterItemPage,
    },
    {
      path: '/detail',
      name: 'master-detail-page',
      component: MasterDetailPage,
    },
  ],
})

export default router
