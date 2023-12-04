import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('pages/Dashboard.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('src/pages/RegisterPage.vue'),
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/Login.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.)',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
