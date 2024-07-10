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

<aside id="logo-sidebar" :class="{'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen}"  class="fixed -mt-7 top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
  <div class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
      <div class="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
        <ul class="pb-2 space-y-2">
          <li>
            <router-link :to="{path: '/admin'}" class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700" active-class="router-link-active" exact-active-class="router-link-exact-active">
                <svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                <span class="ml-3" sidebar-toggle-item="">欢迎</span>
            </router-link>
          </li>

          <li>
            <button
                type="button"
                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                aria-controls="dropdown-layouts"
                @click="isSidebarToggleDropdown1"
                ref="button">
              <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"></path>
              </svg>
              <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">物品管理</span>
              <svg sidebar-toggle-item="" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
            <ul
                id="dropdown-layouts"
                :class="{'hidden': !isSidebarDropdownOpen1, 'block': isSidebarDropdownOpen1}"
                class="py-2 space-y-2"
                ref="dropdown">
              <li>
                <router-link
                    :to="{path: '/admin/lost'}"
                    class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    active-class="router-link-active"
                    exact-active-class="router-link-exact-active">
                  物品管理
                </router-link>
              </li>
<!--              <li>-->
<!--                <router-link-->
<!--                    :to="{path: '/admin'}"-->
<!--                    class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"-->
<!--                    active-class="router-link-active"-->
<!--                    exact-active-class="router-link-exact-active">-->
<!--                  招领管理-->
<!--                </router-link>-->
<!--              </li>-->
            </ul>
          </li>


          <li>
            <button
                type="button"
                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                aria-controls="dropdown-layouts"
                @click="isSidebarToggleDropdown2"
                ref="button">
              <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
              <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">账户管理</span>
              <svg sidebar-toggle-item="" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
            <ul
                id="dropdown-layouts"
                :class="{'hidden': !isSidebarDropdownOpen2, 'block': isSidebarDropdownOpen2}"
                class="py-2 space-y-2"
                ref="dropdown">
              <li>
                <router-link
                    :to="{path: '/admin/user'}"
                    class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    active-class="router-link-active"
                    exact-active-class="router-link-exact-active">
                  用户
                </router-link>
              </li>
<!--              <li>-->
<!--                <router-link-->
<!--                    :to="{path: '/admin'}"-->
<!--                    class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"-->
<!--                    active-class="router-link-active"-->
<!--                    exact-active-class="router-link-exact-active">-->
<!--                  管理用户-->
<!--                </router-link>-->
<!--              </li>-->
            </ul>
          </li>

          <li>
            <button
                type="button"
                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                aria-controls="dropdown-layouts"
                @click="isSidebarToggleDropdown3"
                ref="button">
<!--              <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>-->
              <svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">系统管理</span>
              <svg sidebar-toggle-item="" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
            <ul
                id="dropdown-layouts"
                :class="{'hidden': !isSidebarDropdownOpen3, 'block': isSidebarDropdownOpen3}"
                class="py-2 space-y-2"
                ref="dropdown">
              <li>
                <router-link
                    :to="{path: '/admin/setting'}"
                    class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    active-class="router-link-active"
                    exact-active-class="router-link-exact-active">
                  网站设置
                </router-link>
              </li>
              <li>
                <router-link
                    :to="{path: '/admin/log'}"
                    class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    active-class="router-link-active"
                    exact-active-class="router-link-exact-active">
                  日志管理
                </router-link>
              </li>
            </ul>
          </li>

          <li>
            <button
                type="button"
                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                aria-controls="dropdown-layouts"
                @click="isSidebarToggleDropdown4"
                ref="button">
              <!--              <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>-->
              <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"></path>
              </svg>
              <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">通知管理</span>
              <svg sidebar-toggle-item="" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
            <ul
                id="dropdown-layouts"
                :class="{'hidden': !isSidebarDropdownOpen4, 'block': isSidebarDropdownOpen4}"
                class="py-2 space-y-2"
                ref="dropdown">
              <li>
                <router-link
                    :to="{path: '/admin/notice'}"
                    class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    active-class="router-link-active"
                    exact-active-class="router-link-exact-active">
                  通知
                </router-link>
              </li>
            </ul>
          </li>

          <li>
            <a
                href="/logout"
                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                ref="button">
              <svg t="1719384405963" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5910" width="22" height="22"><path d="M468.2 466.9V108.7c0-24.7 20-44.8 44.8-44.8s44.8 20 44.8 44.8V467c0 24.7-20 44.8-44.8 44.8s-44.8-20.1-44.8-44.9z m253-351.7c-33.5-17.6-73.8 6-73.8 43.8 0 19.2 11.4 35.9 28.4 44.9C800.3 270 880.2 409.4 857.4 564.3 834.8 717.8 707 840.6 552.8 857.8 343 881.2 164.7 716.9 164.7 511.7c0-134.1 76.2-250.8 187.7-308.9 15.7-8.2 26.3-23.7 26.3-41.4v-4.1c0-37.1-39.5-60-72.4-42.8-157.8 82.3-260.5 255.8-238 450.6 23.6 203.8 189.5 369 393.4 391.6 270.3 30 499.2-180.7 499.2-445-0.1-172.2-97.2-321.6-239.7-396.5z" p-id="5911" fill="#8a8a8a"></path></svg>
              <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">退出</span>

            </a>

          </li>
        </ul>

      </div>
    </div>
  </div>
</aside>

</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import axios from "@/axios";


// 读取网站标题
const webTitle = ref('')

const webTitleFetchData = async ()=>{
  const responseData = await axios.get("/webSetting/list")
  console.log(responseData.data)
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

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const isSidebarOpen = ref(false);
const isDropdownOpen = ref(false);
const isSidebarDropdownOpen1 = ref(false);
const isSidebarDropdownOpen2 = ref(false);
const isSidebarDropdownOpen3 = ref(false);
const isSidebarDropdownOpen4 = ref(false);
const button = ref<HTMLButtonElement | null>(null);
const dropdown = ref<HTMLDivElement | null>(null);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
const isSidebarToggleDropdown1 = () => {
  isSidebarDropdownOpen1.value = !isSidebarDropdownOpen1.value;
};
const isSidebarToggleDropdown2 = () => {
  isSidebarDropdownOpen2.value = !isSidebarDropdownOpen2.value;
};
const isSidebarToggleDropdown3 = () => {
  isSidebarDropdownOpen3.value = !isSidebarDropdownOpen3.value;
};
const isSidebarToggleDropdown4 = () => {
  isSidebarDropdownOpen4.value = !isSidebarDropdownOpen4.value;
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

onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
  fetchData()
  webTitleFetchData()
});

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
