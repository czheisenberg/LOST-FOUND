<template>
  <TheAdminBackSidebar/>
  <!--  content 部分 -->
  <div id="main-content" class="relative  h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
    <main>
      <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <div class="w-full mb-1 mt-10 font-bold">
          <nav class="flex mb-5" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
              <li class="inline-flex items-center">
                <a href="#" class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                  <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                  用户中心
                </a>
              </li>
              <li>
                <div class="flex items-center">
                  <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">用户</a>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">新增</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <div class="w-full">
          <form class="space-y-4" @submit.prevent="handleSubmit">
            <div>
              <label for="account" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">用户名</label>
              <input type="text" name="account" id="account" v-model="account" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="username" required=""></div>
            <div>
              <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">真实姓名</label>
              <input type="text" name="username" id="username" v-model="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" placeholder="nick name"></div>
<!--            <div>-->
<!--              <label for="file_input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">头像</label>-->
<!--              <input @change="handleFileChange"  class="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" required="">-->
<!--            </div>-->
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">邮箱</label>
              <input type="text" name="email" id="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="example@xx.com" required=""></div>
            <div>
              <label for="phoneNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">电话号码</label>
              <input type="text" name="phoneNumber" id="phoneNumber" v-model="phoneNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" placeholder="18888888888">
            </div>
            <div>
              <label for="birthday" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">生日</label>
<!--              <input type="text" name="birthday" id="birthday" v-model="birthday" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" placeholder="2001-01-01">-->
              <div class="block">
                <el-date-picker
                    v-model="birthday"
                    type="date"
                    placeholder="选择一个日期"
                    @change="handleDateChange"
                />
              </div>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">密码</label>
              <input type="password" name="password" id="password" v-model="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" placeholder="******">
            </div>
            <div>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">提交</button>
              <a href="/admin/user" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">取消</a>
            </div>
            <div class="text-yellow-400">
              <p>注意: 添加用户时不设置头像，添加过后再编辑头像! 或者用户手动去对应的用户的后台添加头像!</p>
            </div>

          </form>
        </div>
      </div>


    </main>
  </div>>
</template>

<script lang="ts" setup>

import TheAdminBackSidebar from "@/components/TheAdminBackSidebar.vue";
import { ref } from 'vue';
import axios from '../../axios'
import {  useRouter } from 'vue-router';
import notification from "@/notification";
import dayjs from "dayjs";


const router = useRouter()


// 定义添加添加信息对应的变量
const account = ref('')
const username = ref('')
const email = ref('')
const phoneNumber = ref('')
const birthday = ref('')
const password = ref('')


// 获取日期
const currentDate = ref('')
const handleDateChange = (value) => {
  currentDate.value = dayjs(value).format("YYYY-MM-DD")

  // console.log('选定的日期是:', value)
  console.log("选定的日期是",currentDate.value)
}

const handleSubmit = async()=>{
    const uploadData = new FormData();
    uploadData.append('account', account.value)
    uploadData.append('username', username.value)
    uploadData.append('email', email.value)
    uploadData.append('phonenumber', phoneNumber.value)
    uploadData.append('birthday', birthday.value)
    uploadData.append('password', password.value)


    // console.log("从前端获取的数据: ", account.value, username.value, email.value, phoneNumber.value, birthday.value, password.value)

  try{
      const responseData = await axios.post('/register/doRegister', uploadData,{
        headers:{
          'Content-Type':'multipart/form-data',
        },
      })
    if(responseData.data.message === "ok"){
      // console.log(responseData.data)
      notification.suc("新增用户完成!","")

      router.push('/admin/user')
    }

  }catch (error){
      notification.error("新增用户失败!", error.message)
  }
}


</script>

<style>

</style>