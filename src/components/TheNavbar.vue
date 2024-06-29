<template>
  <nav class="bg-white dark:bg-gray-800 shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- 折叠按钮 start -->
            <button @click="isOpen = !isOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path class="inline-flex" :class="{'hidden': isOpen, 'inline-flex': !isOpen}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                <path class="inline-flex" :class="{'hidden': !isOpen, 'inline-flex': isOpen}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <!-- 折叠按钮 end -->
          </div>
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="text-xl font-bold text-gray-900 dark:text-white">LOST & FOUND</router-link>
          </div>
        </div>
        <div class="hidden md:flex md:items-center md:space-x-4 flex-grow">
          <router-link to="/" class="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium">首页</router-link>
          <router-link to="/notice" class="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium">通知</router-link>
          <a href="#" class="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium">联系我们</a>
          <div class="relative flex-grow">
            <input type="text" placeholder="搜索..." class="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none dark:bg-gray-700 dark:text-white"/>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <!-- 黑白切换按钮 start for all screens -->
          <button @click="toggleDarkMode" class="bg-gray-200 dark:bg-gray-600 p-2 rounded-full ml-4">
            <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
            </svg>
          </button>
          <!-- 黑白切换按钮 end for all screens -->

          <!-- 登录下拉列表 start -->
          <div class="relative" @click="toggleDropdown" v-click-outside="closeDropdown">
            <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false">
              <span class="sr-only">Open user menu</span>
              <img class="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/52897817?v=4" alt="user photo">
            </button>
            <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
              <div class="px-4 py-3">
                <p class="text-sm text-gray-900 dark:text-white">{{ account }}</p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300">{{ email }}</p>
              </div>
              <ul class="py-1">
                <li><a href="/login" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">登录</a></li>
                <li><a href="/user/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">用户后台</a></li>
                <li> <router-link to="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">登出</router-link></li>
              </ul>
            </div>
          </div>
          <!-- 登录下拉列表 end -->
        </div>
      </div>
    </div>
    <div class="md:hidden" :class="{'block': isOpen, 'hidden': !isOpen}">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="/" class="block text-gray-900 dark:text-white px-3 py-2 rounded-md text-base font-medium">首页</a>
        <a href="/notice" class="block text-gray-900 dark:text-white px-3 py-2 rounded-md text-base font-medium">通知</a>
        <a href="#" class="block text-gray-900 dark:text-white px-3 py-2 rounded-md text-base font-medium">联系我们</a>
        <div class="relative">
          <input type="text" placeholder="搜索..." class="w-full px-4 py-2 mb-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none dark:bg-gray-700 dark:text-white"/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import axios from "@/axios";

// 用户数据
const account = ref('')
const email = ref('')

const fetchData = async()=>{
  try{
    const response = await axios.get('/userinfo/selfQuery');
    account.value = response.data.data.account
    email.value = response.data.data.email
  }catch(err){
    console.log("err:", err)
  }
}



// 折叠菜单状态
const isOpen = ref(false);

// 主题切换状态
const isDarkMode = ref(false);

// 登录下拉菜单状态
const isDropdownOpen = ref(false);
const button = ref<HTMLButtonElement | null>(null);
const dropdown = ref<HTMLDivElement | null>(null);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const handleOutsideClick = (event: MouseEvent) => {
  if (dropdown.value && !dropdown.value.contains(event.target as Node) && button.value && !button.value.contains(event.target as Node)) {
    isDropdownOpen.value = false;
  }
};

// 添加事件监听器
onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
  fetchData()
});

// 移除事件监听器
onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick);
});
</script>

<style scoped>
</style>
