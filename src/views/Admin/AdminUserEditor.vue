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
                  <span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">编辑</span>
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
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">用户名</label>
              <input type="text" name="goods" id="name" v-model="formData.goods" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="username" required=""></div>
            <div>
              <label for="phonenumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">昵称</label>
              <input type="text" name="phonenumber" id="phonenumber" v-model="formData.phonenumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required=""></div>
            <div>
              <label for="file_input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">头像</label>
              <input @change="handleFileChange"  class="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" required=""></div>
            <div>
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">邮箱</label>
              <input type="text" name="address" id="address" v-model="formData.address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="example@xx.com" required=""></div>
            <div>
              <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">电话号码</label>
<!--              <textarea id="message" rows="4" v-model="formData.message" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="在此输入事件描述" required=""></textarea></div>-->
              <input type="text" name="phonenumber" id="phonenumber" v-model="formData.phonenumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required=""></div>
              <div>
              <label for="stuffstate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">密码</label>
<!--              <select id="stuffstate" v-model="formData.stuffstate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">-->
<!--                <option value="0">丢失</option><option value="1">发现</option></select>-->
                <input type="text" name="phonenumber" id="phonenumber" v-model="formData.phonenumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
<!--            <div>-->
<!--              <label for="time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">时间</label>-->
<!--              <input type="text" name="datetime" id="time" v-model="formData.datetime" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="输入大致时间: ex: 2024-06-21 17:00:24" required="">-->
<!--            </div>-->
            <div>
              {{ msg }}
            </div>

            <div>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">提交</button>
              <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">取消</button>
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


const router = useRouter()


// 添加数据
// 定义表单数据结构
const formData = ref({
  goods: '',
  phonenumber: '',
  address:'',
  message: '',
  stuffstate: '丢失',
  datetime: ''
});
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

console.log(formData.value.goods)

// 提交表单时的处理函数
const msg = ref('')
const handleSubmit = async () => {
  if (selectedFile.value) {
    const uploadData = new FormData();
    uploadData.append('goods', formData.value.goods);
    uploadData.append('phonenumber', formData.value.phonenumber);
    uploadData.append('address', formData.value.address);
    uploadData.append('message', formData.value.message);
    uploadData.append('stuffstate', formData.value.stuffstate);
    uploadData.append('datetime', formData.value.datetime)
    uploadData.append('goodsimg', selectedFile.value);

    if(formData.value.phonenumber.length > 11 || formData.value.phonenumber.length < 0){
      msg.value = '手机号格式错误'
    }else{
      try {
        const response = await axios.post('/goods/add', uploadData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        msg.value = '发布成功'
        // console.log('上传成功:', response.data);

        // router.go(-1)
        router.push('/user/goods')
      } catch (error) {
        msg.value = String(error)
        // console.error('上传失败:', error);
      }
    }



  } else {
    msg.value="请选择一张图片"
    // console.log('请先选择一个文件');
  }
};


</script>

<style>
/* 自定义选中状态样式 */
.router-link-active {
  background-color: var(--tw-bg-opacity);
  background-color: rgba(213, 221, 235, 0.4); /* Custom light gray color */
}
</style>