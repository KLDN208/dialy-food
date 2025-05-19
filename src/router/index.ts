import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      meta: { title: '首页' },
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      meta: { title: '我的' },
      component: () => import('@/views/MineView.vue'),
    },
  ],
})

export default router
