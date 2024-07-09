<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">欢迎, {{ username }}!</h1>
        <p class="text-lg text-gray-600 mb-6">很高兴见到你！探索你的主页，找到你需要的一切。</p>
        <img :src="profileImage" alt="Profile Picture" class="w-24 h-24 rounded-full mx-auto mb-4" />
      </div>
      <div class="flex justify-center space-x-4 mb-6">
        <button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">查看个人资料</button>
        <button class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">开始新任务</button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="bg-blue-100 p-4 rounded-lg text-center shadow-sm">
          <h2 class="text-xl font-semibold text-gray-700 mb-2">我的任务</h2>
          <p class="text-gray-600">查看和管理你的任务列表。</p>
          <button class="mt-3 bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition duration-300">查看任务</button>
        </div>
        <div class="bg-green-100 p-4 rounded-lg text-center shadow-sm">
          <h2 class="text-xl font-semibold text-gray-700 mb-2">通知</h2>
          <p class="text-gray-600">查看最新的通知和提醒。</p>
          <button class="mt-3 bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition duration-300">查看通知</button>
        </div>
        <div class="bg-yellow-100 p-4 rounded-lg text-center shadow-sm">
          <h2 class="text-xl font-semibold text-gray-700 mb-2">设置</h2>
          <p class="text-gray-600">管理你的账户设置。</p>
          <button class="mt-3 bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 transition duration-300">管理设置</button>
        </div>
        <div class="bg-red-100 p-4 rounded-lg text-center shadow-sm">
          <h2 class="text-xl font-semibold text-gray-700 mb-2">帮助</h2>
          <p class="text-gray-600">需要帮助？查看我们的帮助中心。</p>
          <button class="mt-3 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-300">获取帮助</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// 模拟用户信息
const username = ref('张三');
const profileImage = ref('https://via.placeholder.com/96');
</script>

<style scoped>
/* 自定义样式（如有需要） */
</style>
