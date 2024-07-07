<template>
  <TheBackSidebar/>
  <!-- <TheBackContent/> -->

<div id="main-content" class="relative  h-full overflow-y-auto  lg:ml-64 dark:bg-gray-900">
<main>

<div class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
<div class="mb-4 col-span-full xl:mb-2 mt-10">
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
            <a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">Users</a>
          </div>
        </li> -->
        <li>
          <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            <span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">账户设置</span>
          </div>
        </li>
      </ol>
  </nav>
  <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">账户设置</h1>
</div>
<!-- Right Content -->
<div class="col-span-full xl:col-auto">
  <form class="profileImage" @submit.prevent="handleSubmitProfileImage">
  <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <div class="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
          <img class="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0" :src="userInfo.profileimage">
          <div>
              <h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">头像</h3>
              <div class="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  JPG, GIF or PNG. 不超过 800K
              </div>
              <div class="flex items-center space-x-4 ">
<!--                  <button type="input" class="inline-flex bg-blue-500 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">-->
<!--                      <svg class="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path><path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path></svg>-->
<!--                      上传图片-->
<!--                  </button>-->
                <input @change="handleFileChange"  class="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" required="">
              </div>
              <div class="col-span-6 sm:col-full mt-4 space-x-3">
                <button type="submit" class="text-white bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >保存</button>
                <button type="reset" class="text-white bg-red-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >取消</button>
              </div>

              <div class="text-green-500 mt-1">{{ msg }}</div>

          </div>
      </div>
  </div>
  </form>

  <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <h3 class="mb-4 text-xl font-semibold dark:text-white">账户密码</h3>
      <form action="#">
          <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                  <label for="current-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">当前密码</label>
                  <input type="text" name="current-password" id="current-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="••••••••" required>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">新密码</label>
                  <input data-popover-target="popover-password" data-popover-placement="bottom" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required>
                  <div data-popover="" id="popover-password" role="tooltip" class="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(1414px, -1382px);" data-popper-placement="top" data-popper-reference-hidden="" data-popper-escaped="">
                      <div class="p-3 space-y-2">
                          <h3 class="font-semibold text-gray-900 dark:text-white">必须至少包含6个字符</h3>
                          <div class="grid grid-cols-4 gap-2">
                              <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
                              <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>
                              <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
                              <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>
                          </div>
                          <p>密码包括:</p>
                          <ul>
                              <li class="flex items-center mb-1">
                                  <svg class="w-4 h-4 mr-2 text-green-400 dark:text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                  大写 &amp; 小写字母
                              </li>
                              <li class="flex items-center mb-1">
                                  <svg class="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                  一个特殊符号 (#$&amp;)
                              </li>
                              <li class="flex items-center">
                                  <svg class="w-4 h-4 mr-2 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                  更长的密码(最小12个字符)
                              </li>
                          </ul>
                  </div>
                  <div data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(139px, 0px);"></div>
                  </div>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">重复当前密码</label>
                  <input type="text" name="confirm-password" id="confirm-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="••••••••" required>
              </div>
            <div class="col-span-6 sm:col-full space-x-3">
              <button type="submit" class="text-white bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >保存</button>
              <button type="reset" class="text-white bg-red-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >取消</button>
            </div>
          </div>
      </form>
  </div>
</div>
<div class="col-span-2">
  <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <h3 class="mb-4 text-xl font-semibold dark:text-white">基本信息</h3>
      <form @submit.prevent="handleSubmitInformation" >
          <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                  <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">姓名</label>
                  <input type="text" v-model="username" name="username" id="username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="姓名" required>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">邮箱</label>
                  <input type="text" v-model="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="example@company.com" required>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">电话号码</label>
                  <input type="text" v-model="phoneNumber" name="phone-number" id="phone-number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="18888888888" required>
              </div>
              <div class="col-span-6 sm:col-span-3">
                  <label for="birthday" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">生日</label>
                  <input type="text" v-model="birthday" name="birthday" id="birthday" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="2001-01-01" required>
              </div>
            <div class="col-span-6 sm:col-full  space-x-3">
              <button type="submit" class="text-white bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >保存</button>
              <button type="reset" class="text-white bg-red-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >取消</button>
            </div>
          </div>
        <div class="text-green-500 mt-1">{{ msg2 }}</div>
      </form>
  </div>
</div>

</div>

</main>


</div>

</template>
<script lang="ts" setup>

import TheBackSidebar from '@/components/TheBackSidebar.vue';
import axios from '../../../axios'
import {onMounted, ref} from "vue";
import {  useRouter } from 'vue-router';
import dayjs from 'dayjs'


const router = useRouter()

const userInfo = ref('')

// 获取用户信息
const username = ref('')
const email = ref('')
const phoneNumber = ref('')
const birthday = ref('')
const userInfoFetchData = async()=>{
  try {
    const responseData = await axios.get('userinfo/selfQuery')
    console.log("responseData.data.data ++++++++++++++++++",responseData.data.data)
    userInfo.value = responseData.data.data
    username.value = responseData.data.data.username
    email.value = responseData.data.data.email
    phoneNumber.value = responseData.data.data.phonenumber
    birthday.value = dayjs(responseData.data.data.birthday).format('YYYY-MM-DD')
  } catch (error) {
    console.log(error)
  }
}

// 更新信息
// 上传头像
// 用于存储选中的文件
const selectedFile = ref<File | null>(null);
// 文件改变时的处理函数
const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    selectedFile.value = target.files[0];
  } else {
    selectedFile.value = null;
  }
};
// 定义表单数据结构
const formData = ref({
  username: '',
  phonenumber: '',
  email:'',
  birthday: '',
  profileimage: '',
});

// 提交表单时的处理函数
const msg = ref('')
const handleSubmitProfileImage = async () => {
  if (selectedFile.value) {
    const uploadData = new FormData();
    uploadData.append('profileimage', selectedFile.value);

    try {
      const response = await axios.post('/userinfo/updateUserInfo', uploadData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      msg.value = '更新成功'
      // console.log('response.data:', response.data);

      router.go(0)
    } catch (error) {
      msg.value = String(error)
      // console.error('上传失败:', error);
    }

  } else {
    msg.value="请选择一张图片"
    // console.log('请先选择一个文件');
  }
};

// 更新用户信息
const msg2 = ref('')
const handleSubmitInformation = async()=>{
  // console.log("从前端获取的值:", username.value,email.value,phoneNumber.value,birthday.value)
  const uploadData = new FormData();
  uploadData.append('username', username.value);
  uploadData.append('phonenumber', phoneNumber.value);
  uploadData.append('email', email.value);
  uploadData.append('birthday', birthday.value);

  try {
    const response = await axios.post('/userinfo/updateUserInfo', uploadData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    msg2.value = '更新成功'
    console.log('----------------------response.data:', response.data);

    router.go(0)
  } catch (error) {
    msg2.value = String(error)
    console.error('error:', error)
  }

}

onMounted(()=>{
  userInfoFetchData()
})



</script>
