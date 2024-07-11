<script lang="ts">

import TheNavbar from "@/components/TheNavbar.vue";
import {defineComponent, onMounted} from "vue";
import router from "@/router";

export default defineComponent({
  components: {TheNavbar},

  methods: {
    returnImgSearch() {
      router.push("imgSearch")
    }
  },

  mounted() {
    this.goodsRes = JSON.parse(this.$route.query.goodsRes as string);
    console.log(this.goodsRes);
    const dataUrl = localStorage.getItem('uploadImg');
    if (dataUrl) {
      this.fileUrl = dataUrl;
    }
  },

  data() {
    return {
      goodsRes: [],
      fileUrl: ''
    }
  }
})

</script>

<template>

  <main class="flex flex-col max-h-screen">
    <TheNavbar/>

    <div class="flex flex-row justify-between items-center p-3 bg-white shadow-md dark:bg-gray-800">
      <button type="button" @click="returnImgSearch" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
        </svg>
        <span class="sr-only">Icon description</span>
      </button>
      <h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white content-center dark:bg-gray-800">相似物品搜索结果</h5>
      <span/>
    </div>

<!--    <div class="flex flex-row md:flex-row justify-stretch items-start p-34 ">-->

<!--      <div class="bg-gray-100 dark:bg-gray-700 h-full rounded-lg">-->
<!--        <img :src="fileUrl" class="max-w-full max-h-full object-contain scale-75"/>-->
<!--      </div>-->
<!--&lt;!&ndash;      grid grid-cols-2&ndash;&gt;-->
<!--      <div class="w-full  sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">-->
<!--        &lt;!&ndash; 循环渲染当前页的卡片 &ndash;&gt;-->
<!--        <div v-for="(card, index) in goodsRes" :key="index"-->
<!--             class="w-full h-full px-4 mb-4">-->
<!--          &lt;!&ndash; 卡片内容 &ndash;&gt;-->
<!--          <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">-->
<!--            <div class="flex justify-between items-center p-4">-->
<!--              &lt;!&ndash; 用户头像和用户名 &ndash;&gt;-->
<!--              <a href="#" class="flex items-center">-->
<!--                <img :src="card.userInfo.profileimage" alt="Profile Image" class="w-10 h-10 rounded-full mr-2">-->
<!--                <span class="hover:text-blue-500 text-black dark:text-white">{{ card.userInfo.username }}</span>-->
<!--              </a>-->
<!--              &lt;!&ndash; 发布时间 &ndash;&gt;-->
<!--              <span class="text-xs text-black dark:text-white">{{ card.datetime }}</span>-->
<!--            </div>-->
<!--            &lt;!&ndash; 商品图片 &ndash;&gt;-->
<!--            <a>-->
<!--              <img class="bg-gray-100 dark:bg-gray-700 object-contain w-full h-64 rounded-t-lg"-->
<!--                   :src="card.goodsimg" alt="Product Image"/>-->
<!--            </a>-->
<!--            <div class="p-4">-->
<!--              &lt;!&ndash; 物品描述 &ndash;&gt;-->
<!--              <a>-->
<!--                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ card.message }}</h5>-->
<!--              </a>-->
<!--              &lt;!&ndash; 物品状态判断 &ndash;&gt;-->
<!--              <div class="mt-2.5 mb-5">-->
<!--            <span v-if="card.stuffstate"-->
<!--                  class="bg-green-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-300 dark:text-blue-800 ms-3">捡到物品</span>-->
<!--                <span v-else-->
<!--                      class="bg-red-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-300 dark:text-blue-800 ms-3">丢失物品</span>-->
<!--              </div>-->
<!--              &lt;!&ndash; 联系电话和详细信息按钮 &ndash;&gt;-->
<!--              <div class="flex items-center justify-between">-->
<!--                <span class="text-xs font-bold text-gray-900 dark:text-white">联系电话: {{ card.phonenumber }}</span>-->
<!--                <router-link-->
<!--                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"-->
<!--                    :to="{ name: 'details', params: { id: card.goodsId, message: card.message } }">详细信息-->
<!--                </router-link>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->
    <div class="flex flex-col md:flex-row justify-stretch items-start p-4 md:p-34">
      <div class="bg-gray-100 dark:bg-gray-700 h-full rounded-lg mb-4 md:mb-0 mx-auto md:mx-0 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <img :src="fileUrl" class="max-w-full max-h-full object-contain scale-75"/>
      </div>
      <div class="flex lg:flex-row lg:flex-wrap flex-col w-full px-4 mb-4">
        <div v-for="(card, index) in goodsRes" :key="index" class=" lg:w-1/2 px-4 mb-4">
          <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center p-4">
              <a href="#" class="flex items-center">
                <img :src="card.goodsInfoRsp.userInfo.profileimage" alt="Profile Image" class="w-10 h-10 rounded-full mr-2">
                <span class="hover:text-blue-500 text-black dark:text-white">{{ card.goodsInfoRsp.userInfo.username }}</span>
              </a>
              <span class="text-xs text-black dark:text-white">{{ card.goodsInfoRsp.datetime }}</span>
            </div>
            <a>
              <img class="bg-gray-100 dark:bg-gray-700 object-contain w-full h-64 rounded-t-lg" :src="card.goodsInfoRsp.goodsimg" alt="Product Image"/>
            </a>
            <div class="p-4">
              <a>
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ card.goodsInfoRsp.message }}</h5>
              </a>
              <div class="mt-2.5 mb-5">
                <span v-if="card.goodsInfoRsp.stuffstate == 0" class="bg-green-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-300 dark:text-blue-800 ms-3">捡到物品</span>
                <span v-else-if="card.goodsInfoRsp.stuffstate == 1" class="bg-red-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-300 dark:text-blue-800 ms-3">丢失物品</span>
                <span v-else class="bg-blue-700 text-white text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-300 dark:text-blue-800 ms-3">已完成</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-gray-900 dark:text-white">联系电话: {{ card.goodsInfoRsp.phonenumber }}</span>
                <router-link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                             :to="{ name: 'details', params: { id: card.goodsInfoRsp.goodsId, message: card.goodsInfoRsp.message } }">详细信息
                </router-link>
              </div>
              <a>
                <h5 class="text-xl font-semibold tracking-tight text-gray-500 dark:text-white p-3">相似度： {{ card.pro.toFixed(2) }} %</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<style scoped>

</style>
