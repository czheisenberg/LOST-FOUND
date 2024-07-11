<script setup lang="ts">
import {ref, onMounted} from 'vue';
import TheNavbar from "@/components/TheNavbar.vue";
import axios from '../axios';
import router from "@/router";

const uploadSuccess = ref(true)

// 识别结果
const goodsRes = ref([])
// 识别完成
const recSuccess = ref(false)

const handleFiles = (files: FileList) => {
  const file = files.item(0);

  if (!file)
    return;

  uploadSuccess.value = false;

  let param = new FormData()  // 创建form对象
  param.append('uploadFile', file, file.name)  // 通过append向form对象添加数据
  let config = {
    headers: {'Content-Type': 'multipart/form-data'}
  }

  axios.post('/goods/querySim', param, config).then(response => {
    uploadSuccess.value = true;
    recSuccess.value = true;
    goodsRes.value = response.data.data

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.result) {
        localStorage.setItem('uploadImg', fileReader.result.toString());
        router.push({name: 'imgView', query: {goodsRes: JSON.stringify(goodsRes.value)}});
      }

    };

  }).catch(err => {
    console.log(err)
  });

};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log("handleFileChange")
  if (target.files) {
    handleFiles(target.files);
  }
};

// onMounted(() => {
//
// });


</script>

<template>
  <TheNavbar/>


  <div v-if="!recSuccess"
       class="m-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center pb-5">相似物品搜索</h5>
    <div class="flex items-center justify-center w-full">
      <label
          ref="dropzoneRef"
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div v-if="uploadSuccess" class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
              class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
          >
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">点击上传</span> 或拖拽上传
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            BMP, PNG, JPG, JPEG or PNG
          </p>
        </div>

        <input v-if="uploadSuccess"
               @change="handleFileChange"
               id="dropzone-file"
               type="file"
               class="hidden"
        />

        <div v-if="!uploadSuccess" role="status">
          <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
               viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"/>
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
        </div>

      </label>
    </div>
  </div>

  <div v-if="recSuccess"
       class="m-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-between pb-5">
      <button @click=" goodsRes = []; recSuccess = false; uploadSuccess=true; fileInputRef=null" type="button"
              class="text-white h-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
             height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m15 19-7-7 7-7"/>
        </svg>
        <span class="sr-only">Icon description</span>
      </button>
      <h5 class="mb-2 content-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        搜索结果</h5>
      <div/>
    </div>


    <!-- 循环渲染当前页的卡片 -->
    <div v-for="(card, index) in goodsRes" :key="index" class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
      <!-- 卡片内容 -->
      <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-between items-center p-4">
          <!-- 用户头像和用户名 -->
          <a href="#" class="flex items-center">
            <img :src="card.userInfo.profileimage" alt="Profile Image" class="w-10 h-10 rounded-full mr-2">
            <span class="hover:text-blue-500 text-black dark:text-white">{{ card.userInfo.username }}</span>
          </a>
          <!-- 发布时间 -->
          <span class="text-xs text-black dark:text-white">{{ card.datetime }}</span>
        </div>
        <!-- 商品图片 -->
        <a>
          <img class="object-cover w-full h-56 rounded-t-lg" :src="card.goodsimg" alt="Product Image"/>
        </a>
        <div class="p-4">
          <!-- 物品描述 -->
          <a>
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ card.message }}</h5>
          </a>
          <!-- 物品状态判断 -->
          <div class="mt-2.5 mb-5">
            <span v-if="card.stuffstate"
                  class="bg-green-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-300 dark:text-blue-800 ms-3">捡到物品</span>
            <span v-else
                  class="bg-red-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-300 dark:text-blue-800 ms-3">丢失物品</span>
          </div>
          <!-- 联系电话和详细信息按钮 -->
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-gray-900 dark:text-white">联系电话: {{ card.phonenumber }}</span>
            <router-link
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                :to="{ name: 'details', params: { id: card.goodsId, message: card.message } }">详细信息
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <h2 class="p-10 text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      没有找到相似的物品</h2>

  </div>

</template>

<style scoped>
/* Add any additional styles here */
</style>
