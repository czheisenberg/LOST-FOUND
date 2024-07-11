import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import axios from "../axios";
import AdminInformView from "@/views/Admin/AdminInformView.vue";
import AdminLogView from "@/views/Admin/AdminLogView.vue";

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
const adminNotice = () => import('../views/Admin/AdminNoticeView.vue');

const Notice = () => import('../views/NoticeView.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {title: '首页'}
  },
  {
    path: '/about',
    name: 'about',
    component:() => import('@/components/TheAbout.vue')
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
    meta: {title: '管理员后台'},

  },
  {
    path: '/admin/log',
    name: 'adminLog',
    component: AdminLogView
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   component: Admin ,
  //   children: [
  //     {
  //       path: '/inform',
  //       component: AdminInformView
  //     },
  //     {
  //       path: '/log',
  //       component: AdminLogView
  //
  //     }
  //   ],
  //   meta: {title: '管理员后台'}
  // },
  {
    path: '/admin/goods/add',
    name: 'adminGoodsAdd',
    component:() => import('@/components/TheAdminAdd.vue')
  },
  {
    path: '/admin/lost',
    name: 'adminlost',
    component: AdminLost
  },
  {
    path: '/admin/goods/editor/:id',
    name: 'adminGoodsEditor',
    component:() =>import('@/components/TheAdminEditor.vue')
  },
  {
    path: '/admin/user',
    name: 'adminUser',
    component:() => import('@/views/Admin/AdminUserView.vue')
  },
  {
    path: '/admin/user/add',
    name: 'adminUserAdd',
    component:() => import('@/views/Admin/AdminUserAddView.vue')
  },
  {
    path: '/admin/user/editor/:id',
    name: 'adminUserEditor',
    component:() =>import("@/views/Admin/AdminUserEditor.vue")
  },
  {
    path: '/admin/setting',
    name: 'adminSetting',
    component:() => import('@/views/Admin/SettingsView.vue')
  },
  {
    path: '/admin/notice',
    name: 'adminNotice',
    component:adminNotice
  },
  {
    path: '/admin/notice/add',
    name: 'adminNoticeAdd',
    component:() => import('@/views/Admin/AdminNoticeAddView.vue'),
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
    path: '/user/goods/editor/:id',
    name: 'userGoodsEditor',
    component:() => import('@/components/TheEditor.vue')
  },
  {
    path: '/user/goods/add',
    name: 'userGoodsAdd',
    component:() => import('@/components/TheAdd.vue')
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
  },
  {
    path: '/test',
    name: 'test',
    component:()=>import('../views/test.vue')
  },
  {
    path: '/test2',
    name: 'test2',
    component:()=>import('../views/test2.vue')
  },
  {
    path: '/imgSearch',
    name: 'imgSearch',
    component:()=>import('../views/ImageSearchView.vue')
  },
  {
    path: '/imgView',
    name: 'imgView',
    component:()=>import('../views/ImgResView.vue')
  },
  {
    path: '/permissionError',
    name: 'permissionError',
    component:()=>import('../views/PermissionError.vue')
  },
  {
    path: '/notFoundError',
    name: 'NotFoundError',
    component:()=>import('../views/NotFoundError.vue')
  },
  {
    path: '/:catchAll(.*)',    // 此处需特别注意至于最底部
    redirect: '/notFoundError'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
