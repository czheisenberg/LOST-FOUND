<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        LOST & FOUND
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            登录你的帐户
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleLogin">
            <div>
              <label for="account" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">用户名</label>
              <input v-model="account" type="text" id="account" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required>
            </div>
<!--            <div>-->
<!--              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">你的邮箱</label>-->
<!--              <input v-model="email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>-->
<!--            </div>-->
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">你的密码</label>
              <input v-model="password" type="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300">记住我</label>
                </div>
              </div>
              <a href="/reset" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">忘记密码?</a>
            </div>
            <button type="submit" class="w-full text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">登录</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              还没有账户? <a href="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">去注册</a>
            </p>
            <p class="text-center text-red-500">
              {{message}}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from '../axios';
import { LoginRequest, LoginResponse } from '../types';
import { useRoute, useRouter } from 'vue-router';
import { ElNotification } from 'element-plus'
import notification from "@/notification";

export default defineComponent({
  setup() {
    const router = useRouter(); // 获取路由对象
    const account = ref<string>('');
    const password = ref<string>('');
    const message = ref('')

    const handleLogin = async () => {
      const requestData: LoginRequest = {
        account: account.value,
        pwd: password.value
      };
      console.log(account.value)
      console.log(password.value)


      try {
        const response = await axios.post('/login/doLogin',   requestData);
        // console.log("--------",requestData)
        if (response.data.code === 200) {
          const { tokenName, tokenValue } = response.data.data;
          localStorage.setItem(tokenName, tokenValue);
          console.log('Login successful:', response.data);

          if(requestData.account === "admin"){
            router.push('/admin')
          }else{
            router.push('/user')
          }
        } else {
          notification.error('登录失败', response.data.message)
        }
      } catch (error) {
        notification.error('登录失败', '服务器内部错误')
      }
    };

    return {
      account,
      password,
      handleLogin,
      message
    };
  }
});
</script>
