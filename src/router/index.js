import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '@/views/Error404.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products-container',
      component: () => import('@/views/product/ProductWrapper.vue'),
      children: [
        {
          path: '',
          name: 'products',
          component: () => import('@/views/product/Products.vue')
        },
        {
          path: ':id',
          name: 'product',
          component: () => import("@/views/product/Product.vue")
        }
      ]
    }
  ]
})

export default router
