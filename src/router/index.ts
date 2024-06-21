import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import axios from "../axios";

const Home = () => import('../views/HomeView.vue');
const Register = () => import('../views/RegisterView.vue');
const Login = () => import('../views/LoginView.vue');
const Logout = () => import('../views/LogoutVIew.vue')
const Reset = () => import('../views/ResetPasswordView.vue');
const Admin = () => import('../views/Admin/AdminView.vue');
const UserCenter = () => import('../views/User/UserCenterView.vue');
const Welcome = () => import('../views/User/Welcome/WelcomeView.vue');
const UserSettings = () => import('../views/User/Settings/UserSettingsView.vue');
const UserGoods = () => import('../views/User/goods/UserGoodsView.vue');
const AdminLost = () => import('../views/Admin/AdminLostView.vue');

const Notice = () => import('../views/NoticeView.vue');

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
    path: '/logout',
    name: 'logout',
    component: Logout,
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
    path: '/admin/lost',
    name: 'adminlost',
    component: AdminLost
  },
  {
    path: '/user',
    name: 'user',
    component:Welcome,

  },
  {
    path: '/user/welcome',
    name: 'userwelcom',
    component:Welcome
  },

  // {
  //   path: '/user',
  //   name: 'user',
  //   component: UserCenter,
  //   redirect: '/user/welcome', // 这里添加了 redirect 属性
  //   children: [
  //     {
  //       path: 'welcome', // 注意：这里使用相对路径，即/user/welcome
  //       name: 'userWelcome',
  //       component: Welcome
  //     }
  //   ]
  // },
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
  },
  {
    path: '/guestbook',
    name: 'guestBook',
    component:() => import('@/components/GuestBook.vue')
  },
  {
    path: '/notice',
    name: 'notice',
    component: Notice,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 排除路由列表
const excludeRoutes = ['/','/register'];

// 路由拦截, before 前置拦截
router.beforeEach((to, from,next)=>{
  const token = localStorage.getItem("lftoken");
  if(token || to.path ==="/login" || excludeRoutes.includes(to.path)){
    next()
  }else{
    next("/login")
  }




})

export default router
