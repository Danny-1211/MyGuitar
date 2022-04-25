import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomepageView.vue')
  },
  {
    path: '/productList',
    component: () => import('../views/ProductListView.vue')
  },
  {
    path: '/productList/:category',
    component: () => import('../views/ProductListView.vue')
  },
  {
    path: '/articleList',
    component: () => import('../views/ArticleView.vue')
  },
  {
    path: '/articleList/:articleContent',
    component: () => import('../views/ArticleContentView.vue')
  },
  {
    path: '/order',
    component: () => import('../views/OrderView.vue')
  },
  {
    path: '/form',
    component: () => import('../views/FormView.vue')
  },
  {
    path: '/result/:orderId',
    component: () => import('../views/ResultView.vue')
  },
  {
    path: '/success',
    component: () => import('../views/SuccessView.vue')
  },
  {
    path: '/productInfor/:id',
    component: () => import('../views/ProductInformationView.vue')
  },
  {
    path: '/error',
    component: () => import('../views/ErrorView.vue')
  },
  { path: '/:catchAll(.*)', redirect: '/error' }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
