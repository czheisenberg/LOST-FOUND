<template>
  <TheNavbar />

<div class="container mx-auto mt-10 flex flex-wrap justify-center dark:bg-gray-800 shadow-md">
  <!-- w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4 -->
  <div
    v-for="(dI, index) in detailsInformation"
    :key="index"
    class="detailsInformation flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4"
  >
    <!-- 文字信息 start -->
    <div class="w-full md:w-1/2 order-2 md:order-1 space-y-4 md:space-y-0">
      <!-- 个人基本信息 -->
      <div class="flex items-center justify-between dark:text-white">
        <div class="flex items-center">
          <img
            :src="dI.profileImage"
            alt=""
            class="w-10 h-10 rounded-full mr-2"
          />
          <span>{{ dI.username }}</span>
        </div>
        <div>
          <span
            v-if="dI.stuffState"
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
        <span><b>发布日期:</b> {{ dI.dateTime }}</span>
      </div>
      <!-- message start -->

      <div class="dark:text-white">
        <div class="font-bold">
          详细描述:
          <div class="font-thin px-3">{{ dI.message }}</div>
        </div>
        <div class="font-bold">
          物品位置:
          <div class="font-thin px-3">{{ dI.address }}</div>
        </div>
        <div class="font-bold">
          姓名:
          <div class="font-thin px-3">{{ dI.name }}</div>
        </div>

        <div class="dark:text-white flex items-center justify-between">
          <span><b>联系电话: </b>{{ dI.phoneNumber }}</span>
        </div>
      </div>
      <!-- message end -->
    </div>
    <!-- 文字信息 end -->

    <!-- 图片 start -->
    <div class="w-full md:w-1/2 order-1 md:order-2">
      <img :src="dI.goodsImg" alt="" class="w-full h-auto" />
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
import TheFooter from "@/components/TheFooter.vue";
import TheNavbar from "@/components/TheNavbar.vue";

interface DetailInformation {
  id: number;
  profileImage: string;
  username: string;
  name: string;
  dateTime: string;
  goods: string;
  goodsImg: string;
  message: string;
  address: string;
  phoneNumber: string;
  stuffState: boolean;
  detailsUrl: string;
}

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
    const id = route.params.id as string;

    const detailsInformation = ref<DetailInformation[]>([
      {
        id: 2,
        profileImage: "https://avatars.githubusercontent.com/u/52897817?v=4",
        username: "Alice",
        name: "李某",
        dateTime: "6/14/2024 10:34PM",
        goods: "手表",
        goodsImg: "https://flowbite.com/docs/images/products/apple-watch.png",
        message: "求助🙏我于今日在操场丢失一块Apple Watch🥲",
        address: "操场",
        phoneNumber: "13545678999",
        stuffState: true,
        detailsUrl: "#",
      },
      // 更多示例数据...
    ]);

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
    });

    return {
      id,
      detailsInformation,
      newMessage,
      messages,
      submitMessage
    };
  },
});
</script>
