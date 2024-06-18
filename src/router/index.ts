import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('../views/HomeView.vue')
const Register = () => import('../views/RegisterView.vue')
const Login = () => import('../views/LoginView.vue')
const Reset = () => import('../views/ResetPasswordView.vue')
const Admin = () => import('../views/Admin/AdminView.vue')
const UserCenter = () => import('../views/User/UserCenterView.vue');
const Welcome = () => import('../views/User/Welcome/WelcomeView.vue');
const UserSettings = () => import('../views/User/Settings/UserSettingsView.vue');
const UserGoods = () => import('../views/User/goods/UserGoodsView.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {title: '首页'}
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {title: '注册'}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {title: '登录'}
  },
  {
    path: '/reset',
    name: 'reset',
    component: Reset,
    meta: {title: '重置密码'}
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin ,
    meta: {title: '管理员后台'}
  },
  {
    path: '/user',
    name: 'user',
    component:UserCenter,
  
  },
  {
    path: '/user/welcome',
    name: 'userwelcom',
    component:Welcome
  },
  {
    path: '/user/settings',
    name: 'userSettings',
    component:UserSettings
  },
  {
    path: '/user/goods',
    name: 'userGoods',
    component:UserGoods
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
