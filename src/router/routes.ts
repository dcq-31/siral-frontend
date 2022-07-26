import { RouteRecordRaw } from 'vue-router';
// Layouts
import MainLayout from 'layouts/MainLayout.vue';
import AuthLayout from 'layouts/AuthLayout.vue';
// Pages
import HomePage from 'pages/HomePage.vue';
import AccountPage from 'pages/AccountPage.vue';
import StatisticsPage from 'pages/StatisticsPage.vue';
import ReservePage from 'pages/ReservePage.vue';
import LoginPage from 'pages/LoginPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: HomePage },
      { path: '/statistics', component: StatisticsPage },
      { path: '/reserve', component: ReservePage },
      { path: '/account', component: AccountPage },
    ],
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
