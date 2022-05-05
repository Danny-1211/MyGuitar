import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomepageView.vue')
  },
  {
    path: '/productList',
    component: () => import('../views/ProductListView.vue'),
    meta: {
      title: '產品列表'
    }
  },
  {
    path: '/productList/:category',
    component: () => import('../views/ProductListView.vue'),
    meta: {
      title: '產品列表'
    }
  },
  {
    path: '/articleList',
    component: () => import('../views/ArticleView.vue'),
    meta: {
      title: '文章列表'
    }
  },
  {
    path: '/articleList/:articleContent',
    component: () => import('../views/ArticleContentView.vue'),
    meta: {
      title: '內文'
    }
  },
  {
    path: '/order',
    component: () => import('../views/OrderView.vue'),
    meta: {
      title: '確認商品'
    }
  },
  {
    path: '/form',
    component: () => import('../views/FormView.vue'),
    meta: {
      title: '建立訂單'
    }
  },
  {
    path: '/result/:orderId',
    component: () => import('../views/ResultView.vue'),
    meta: {
      title: '訂購成功'
    }
  },
  {
    path: '/success',
    component: () => import('../views/SuccessView.vue'),
    meta: {
      title: '購買成功'
    }
  },
  {
    path: '/productInfor/:id',
    component: () => import('../views/ProductInformationView.vue'),
    meta: {
      title: '產品資訊'
    }
  },
  {
    path: '/error',
    component: () => import('../views/ErrorView.vue'),
    meta: {
      title: '找不到頁面'
    }
  },
  { path: '/:catchAll(.*)', redirect: '/error' }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
