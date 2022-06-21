import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/Gallery',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('components/Gallery.vue') }],
  },


  // children: [{ path: '/Swiper', component: () => import('pages/Swiper.vue') }],


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
