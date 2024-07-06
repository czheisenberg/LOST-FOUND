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
    <div class="w-full max-w-sm md:w-1/2 order-1 md:order-2">
      <img  :src="cards.goodsimg" alt="" class="w-full h-auto object-contain" />
    </div>
    <!-- 图片 end -->
  </div>
</div>
<!-- 留言板 start -->
<div class="container mx-auto mt-10 p-4 dark:bg-gray-800 shadow-md">
  <h2 class="text-2xl font-bold dark:text-white mb-4">留言板</h2>
  <form @submit.prevent="submitMessage" class="mb-6">
    <div class="mb-4">
      <label for="username" class="block text-sm font-medium dark:text-white">用户名</label>
      <input
        type="text"
        id="username"
        v-model="newMessage.username"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:text-white"
        required
      />
    </div>
    <div class="mb-4">
      <label for="message" class="block text-sm font-medium dark:text-white">留言</label>
      <textarea
        id="message"
        v-model="newMessage.content"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-700 dark:text-white"
        rows="3"
        required
      ></textarea>
    </div>
    <button
      type="submit"
      class="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
    >
      提交留言
    </button>
  </form>
  <div>
    <h3 class="text-xl font-bold dark:text-white mb-4">留言列表</h3>
    <div v-for="(message, index) in messages" :key="index" class="mb-4 p-4 rounded-md dark:bg-gray-700 shadow">
      <div class="flex items-center justify-between mb-2">
        <span class="font-semibold dark:text-white">{{ message.username }}</span>
        <span class="text-xs text-gray-500">{{ message.date }}</span>
      </div>
      <p class="dark:text-white">{{ message.content }}</p>
    </div>
  </div>
</div>
<!-- 留言板 end -->



  <TheFooter />
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from '../axios';
import TheFooter from "@/components/TheFooter.vue";
import TheNavbar from "@/components/TheNavbar.vue";


interface Message {
  username: string;
  content: string;
  date: string;
}



export default defineComponent({
  name: "DetailsView",
  components: {
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

    const newMessage = reactive<Message>({
      username: '',
      content: '',
      date: ''
    });

    const messages = ref<Message[]>([
      {
        username: '留言用户A',
        content: '这是一个留言。',
        date: '2023-06-19'
      },
      // 更多留言...
    ]);

    const submitMessage = () => {
      const date = new Date().toISOString().split('T')[0];
      messages.value.push({
        username: newMessage.username,
        content: newMessage.content,
        date: date
      });
      newMessage.username = '';
      newMessage.content = '';
    };

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
      newMessage,
      messages,
      submitMessage
    };
  },
});
</script>
