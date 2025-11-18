import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/BlogHome.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../components/AboutMe.vue'),
    },
  ],
})

export default router
