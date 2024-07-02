<template>
  <TheNavbar />

<div class="container mx-auto mt-10 flex flex-wrap justify-center dark:bg-gray-800 shadow-md">
<!--   w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4-->
  <div
    class="detailsInformation flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4"
  >
    <!-- 文字信息 start -->
    <div class="w-full md:w-1/2 order-2 md:order-1 space-y-4 md:space-y-0">
      <!-- 个人基本信息 -->
      <div class="flex items-center  dark:text-white">
        <div class="flex items-center">
          <img
            :src="profileImage"
            alt=""
            class="w-10 h-10 rounded-full mr-2"
          />
          <span> {{ username }} </span>
        </div>
        <div>
          <span
              v-if="cards.stuffstate"
            class="bg-green-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-300 dark:text-blue-800 ms-3"
            >捡到物品</span
          >
          <span
              v-else
            class="bg-red-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-300 dark:text-blue-800 ms-3"
            >丢失物品</span
          >
        </div>
      </div>

      <div class="text-sm dark:text-white">
        <span><b>发布日期: {{ cards.datetime }}</b> </span>
      </div>
      <!-- message start -->

      <div class="dark:text-white">
        <div class="font-bold">
          详细描述:
          <div class="font-thin px-3">{{ cards.message}}</div>
        </div>
        <div class="font-bold">
          物品位置:
          <div class="font-thin px-3"> {{ cards.address }}</div>
        </div>
        <div class="font-bold">
          姓名:
          <div class="font-thin px-3"> 假名字</div>
        </div>

        <div class="dark:text-white flex items-center justify-between">
          <span><b>联系电话: {{ cards.phonenumber}}</b></span>
        </div>
      </div>
      <!-- message end -->
    </div>
    <!-- 文字信息 end -->

    <!-- 图片 start -->
    <div class="w-full md:w-1/2 order-1 md:order-2">
      <img  :src="cards.goodsimg" alt="" class="w-full h-auto" />
    </div>
    <!-- 图片 end -->
  </div>
</div>

  <TheMessageBoard/>



  <TheFooter />
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from '../axios';
import TheFooter from "@/components/TheFooter.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheMessageBoard from "@/components/TheMessageBoard.vue";





export default defineComponent({
  name: "DetailsView",
  components: {
    TheMessageBoard,
    TheNavbar,
    TheFooter,
  },
  setup() {
    const route = useRoute();
    const goodsId = route.params.id as string;


    console.log("router.params.id: ", goodsId)


    const cards = ref([])
    const username = ref('')
    const profileImage = ref('')

    const detailData = async ()=>{
      try{
        const responseData = await axios.get(`/goods/list/${goodsId}`)
        // console.log(responseData.data.data)
        // console.log(responseData.data.data.address)
        cards.value = responseData.data.data
        username.value = responseData.data.data.userInfo.username
        profileImage.value = responseData.data.data.userInfo.profileimage

      }catch (e){
        console.log("err: ", e)
      }
    }
    // console.log("cards data:", cards)



    onMounted(() => {
      // 模拟从数据库获取数据
      // detailsInformation.value = getDetailsInformation();
      // messages.value = getInitialMessages();
      detailData()
    });

    return {
      cards,
      username,
      profileImage,
      goodsId,
    };
  },
});
</script>
