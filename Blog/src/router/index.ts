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
    {
      path: '/details',
      name: 'Details',
      component: () => import('../components/DetailsPage.vue'),
    },
    {
      path: '/explore',
      name: 'Explore',
      component: () => import('../components/DeepExplore.vue'),
    },
  ],
})

export default router
