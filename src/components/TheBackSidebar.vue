<template>
<nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button @click="toggleSidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>

        <a href="/" class="flex ms-2 md:me-24">
            <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="LOST & FOUND Logo" /> -->
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">{{ webTitle }}</span>
        </a>
        </div>
        <div class="flex items-center">
            <div class="flex items-center ms-3  space-x-3">
                <div>
                    <button @click="toggleDarkMode"  class="bg-gray-200 dark:bg-gray-600 p-2 rounded-full ml-4">
                        <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    </button>
                </div>

              <!-- 登录下拉列表 start -->
              <div class="relative" @click="toggleDropdown" v-click-outside="closeDropdown">
                <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" :src="profileimage" alt="user photo">
                </button>
                <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                  <div class="px-4 py-3">
                    <p class="text-sm text-gray-900 dark:text-white">{{ account }}</p>
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300">{{ email }}</p>
                  </div>
                  <ul class="py-1">
<!--                    <li><a href="/login" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">登录</a></li>-->
                    <li><a href="/user/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">账户设置</a></li>
                    <li> <router-link to="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">登出</router-link></li>
                  </ul>
                </div>
              </div>
              <!-- 登录下拉列表 end -->
        </div>
    </div>
</div>
</div>
</nav>


  <!-- 侧边栏 -->
  <aside id="logo-sidebar" :class="{'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen}" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <router-link :to="{ path: '/user/welcome' }" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" active-class="router-link-active" exact-active-class="router-link-exact-active">
            <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
            </svg>
            <span class="ms-3">欢迎!</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/user/goods' }" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" active-class="router-link-active" exact-active-class="router-link-exact-active">
            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
            </svg>
            <span class="ms-3">物品管理</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/user/goods/recruitment' }" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" active-class="router-link-active" exact-active-class="router-link-exact-active">
            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
            </svg>
            <span class="ms-3">招领管理</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/user/settings' }" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" active-class="router-link-active" exact-active-class="router-link-exact-active">
            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">账户设置</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import axios from "@/axios";


const isDarkMode = ref(false);
const isSidebarOpen = ref(false);
const isDropdownOpen = ref(false);
const button = ref<HTMLButtonElement | null>(null);
const dropdown = ref<HTMLDivElement | null>(null);

// 网站标题读取
const webTitle = ref('')

const webTitleFetchData = async ()=>{
  const responseData = await axios.get("/webSetting/list")
  console.log("网站标题",responseData.data)
  webTitle.value = responseData.data.data[0].webtitle
}

// 用户数据
const account = ref('')
const email = ref('')
const profileimage = ref('')

const fetchData = async()=>{
  try{
    const response = await axios.get('/userinfo/selfQuery');
    account.value = response.data.data.username
    email.value = response.data.data.email
    profileimage.value = response.data.data.profileimage
  }catch(err){
    console.log("err:", err)
  }
}


const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const handleOutsideClick = (event: MouseEvent) => {
  if (
      dropdown.value &&
      !dropdown.value.contains(event.target as Node) &&
      button.value &&
      !button.value.contains(event.target as Node)
  ) {
    isDropdownOpen.value = false;
  }
};

// 添加事件监听器
onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
  fetchData()
  webTitleFetchData()
});

// 移除事件监听器
onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick);
});
</script>
<style>
/* 自定义选中状态样式 */
.router-link-active {
  background-color: var(--tw-bg-opacity);
  background-color: rgba(213, 221, 235, 0.4); /* Custom light gray color */
}
</style>
