import { RouteRecordRaw } from 'vue-router';
// Layouts
import MainLayout from 'layouts/MainLayout.vue';
import AuthLayout from 'layouts/AuthLayout.vue';
// Pages
import HomePage from 'pages/HomePage.vue';
import StatisticsPage from 'pages/StatisticsPage.vue';
import ReservePage from 'pages/ReservePage.vue';
import LoginPage from 'pages/LoginPage.vue';
import TestPage from 'pages/TestPage.vue';

import { ROUTES } from './names';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: ROUTES.HOME, component: HomePage },
      {
        path: '/statistics',
        name: ROUTES.STATISTICS,
        component: StatisticsPage,
      },
      { path: '/booking', name: ROUTES.RESERVES, component: ReservePage },
      { path: '/test', name: ROUTES.TEST, component: TestPage },
    ],
  },

  {
    path: '/login',
    name: ROUTES.LOGIN,
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
