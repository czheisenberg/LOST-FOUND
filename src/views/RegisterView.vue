<template>
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <!-- <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"> -->
          LOST & FOUND    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  创建用户
              </h1>
              <form class="space-y-4 md:space-y-6" @submit.prevent="handleRegister">
                <div>
                  <label for="account" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">昵称</label>
                  <input type="text" v-model="account" name="account" id="account" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="account" required>
                </div>
                <div>
                  <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">真实姓名</label>
                  <input type="text" v-model="username" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required>
                </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">你的邮箱</label>
                      <input type="email" v-model="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">你的密码</label>
                      <input type="password" v-model="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                  </div>
<!--                  <div>-->
<!--                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">重复密码</label>-->
<!--                      <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>-->
<!--                  </div>-->
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">我接受 <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">这些条款和条件</a></label>
                      </div>
                  </div>
                  <button type="submit" class="w-full text-white bg-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">创建用户</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    已经有账户了？ <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">点击登录</a>
                  </p>
                  <p class="text-center text-red-500">
                    {{msg}}
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</template>


<script lang="ts" setup>
import {ref } from 'vue';
import axios from '../axios';
import { useRouter } from 'vue-router';

    const router = useRouter(); // 获取路由对象

    const account = ref('')
    const username = ref('')
    const email = ref('')
    const password = ref('')

    const msg = ref('')

    const handleRegister = async ()=>{
      const uploadData = new FormData()
      uploadData.append('account', account.value)
      uploadData.append('username', username.value)
      uploadData.append('email', email.value)
      uploadData.append('password', password.value)

      try{
        const responseData = await axios.post('/register/doRegister',uploadData,{
          headers:{
            'Content-Type':'multipart/form-data',
          },
        })

        msg.value = responseData.data.message
        // router.push('/login')
        console.log("注册返回: ", responseData.data)
      }catch (error){
        msg.value = error.message
        console.log("注册失败: ", error)
      }

}
</script>