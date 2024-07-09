<template>
    <TheBackSidebar/>
    <div id="main-content" class="relative  h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
    <main>
      <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
    <div class="w-full mb-1 mt-10">
        <div class="mb-4">
            <nav class="flex mb-5" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                  <li class="inline-flex items-center">
                    <a href="#" class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                      <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                      用户中心
                    </a>
                  </li>
                  <!-- <li>
                    <div class="flex items-center">
                      <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                      <a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">E-commerce</a>
                    </div>
                  </li> -->
                  <li>
                    <div class="flex items-center">
                      <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                      <span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">欢迎</span>
                    </div>
                  </li>
                </ol>
            </nav>
<!--            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">欢迎 {{ account }}</h1>-->
          <div class="text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">欢迎, {{ username }}!</h1>
            <p class="text-lg text-gray-600 mb-6">很高兴见到你！探索你的主页，找到你需要的一切。</p>
            <img :src="profileImage" alt="Profile Picture" class="w-24 h-24 rounded-full mx-auto mb-4" />
          </div>
          <div class="flex justify-center space-x-4 mb-6">
            <router-link to="/user/settings" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">查看个人资料</router-link>
            <router-link to="/user/goods" class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">发布物品</router-link>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-blue-100 p-4 rounded-lg text-center shadow-sm">
              <h2 class="text-xl font-semibold text-gray-700 mb-2">物品管理</h2>
              <p class="text-gray-600">查看和管理你发布的物品。</p>
              <router-link to="/user/goods" class="mt-3 bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition duration-300">查看物品</router-link>
            </div>
            <div class="bg-green-100 p-4 rounded-lg text-center shadow-sm">
              <h2 class="text-xl font-semibold text-gray-700 mb-2">通知</h2>
              <p class="text-gray-600">查看最新的通知和提醒。</p>
              <router-link to="/notice" class="mt-3 bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition duration-300">查看通知</router-link>
            </div>
            <div class="bg-yellow-100 p-4 rounded-lg text-center shadow-sm">
              <h2 class="text-xl font-semibold text-gray-700 mb-2">设置</h2>
              <p class="text-gray-600">管理你的账户设置。</p>
              <router-link to="/user/settings" class="mt-3 bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 transition duration-300">管理设置</router-link>
            </div>
            <div class="bg-red-100 p-4 rounded-lg text-center shadow-sm">
              <h2 class="text-xl font-semibold text-gray-700 mb-2">帮助</h2>
              <p class="text-gray-600">需要帮助？请点击右下角的Bot。</p>
              <button class="mt-3 bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-300">疑惑</button>
            </div>
          </div>
        </div>
        
    </div>
</div>
<div class="flex flex-col">
    
</div>

<div class="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
   
</div>





</main>
    <ChatBot/>
  </div>
</template>

<script lang="ts" setup>
import{ref, onMounted} from 'vue';
import axios from '../../../axios'
import TheBackSidebar from '@/components/TheBackSidebar.vue';
import ChatBot from "@/components/ChatBot.vue";


const account = ref('')
const username = ref('')
const profileImage = ref('')

const fetchData = async()=>{
  try{
    const response = await axios.get('/userinfo/selfQuery');
    account.value = response.data.data.account
    console.log(account.value)
    console.log(response.data)
    username.value = response.data.data.username
    profileImage.value = response.data.data.profileimage
  }catch(err){
    console.log("err:", err)
  }
}

onMounted(()=>{
  fetchData()
})



</script>