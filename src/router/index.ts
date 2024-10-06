import { createRouter, createWebHistory } from 'vue-router'
import MasterItemPage from '../pages/MasterItem.page.vue'
import MasterDetailPage from '../pages/MasterEdit.page.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'master-item-page',
      component: MasterDetailPage,
    },
    {
      path: '/detail',
      name: 'master-detail-page',
      component: MasterDetailPage,
    },
  ],
})

export default router
