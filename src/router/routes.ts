import { RouteRecordRaw } from 'vue-router';
// layouts
import MainLayout from 'layouts/MainLayout.vue';
import AuthLayout from 'layouts/AuthLayout.vue';
// pages
import HomePage from 'pages/HomePage.vue';
import LoginPage from 'pages/LoginPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [{ path: '', component: HomePage }],
  },
  {
    path: '/login',
    component: AuthLayout,
    children: [{ path: '', component: LoginPage }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
