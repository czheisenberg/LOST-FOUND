import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {title: '首页'}
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
    meta: {title: '注册'}
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {title: '登录'}
  },
  {
    path: '/reset',
    name: 'reset',
    component: () => import('../views/ResetPasswordView.vue'),
    meta: {title: '重置密码'}
  },
  {
    path: '/admin',
    name: 'admin',
    component:() => import('../views/Admin/AdminView.vue'),
    meta: {title: '管理员后台'}
  },
  {
    path: '/user',
    name: 'user',
    component:() => import('../views/User/UserCenterView.vue'),
  },
  {
    path: '/user/settings',
    name: 'userSettings',
    component:() => import("../views/User/Settings/UserSettingsView.vue")
  },
  {
    path: '/user/goods',
    name: 'userGoods',
    component:() => import('../views/User/goods/UserGoodsView.vue')
  },
  {
    path: '/details/:id',
    name: 'details',
    component:() => import('../views/DetailsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
