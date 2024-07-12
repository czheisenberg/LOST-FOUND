<template>
  <TheNavbar/>
  <!--  <h2>{{ searchQuery }}</h2>-->
  <div class="container mx-auto mt-4 flex flex-wrap dark:bg-gray-800">
    <!-- 循环渲染当前页的卡片 -->
    <div v-for="(card, index) in paginatedCards" :key="index" class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
      <!-- 卡片内容 -->
      <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-between items-center p-4">
          <!-- 用户头像和用户名 -->
          <a href="#" class="flex items-center">
            <img :src="card.profileImage" alt="Profile Image" class="w-10 h-10 rounded-full mr-2">
            <span class="hover:text-blue-500 text-black dark:text-white">{{ card.username }}</span>
          </a>
          <!-- 发布时间 -->
          <span class="text-xs text-black dark:text-white">{{ card.dateTime }}</span>
        </div>
        <!-- 商品图片 -->

        <img class="object-cover w-full h-56 rounded-t-lg" :src="card.goodsImg" alt="Product Image" />

        <div class="p-4">
          <!-- 物品描述 -->
          <!--  slice(0,15)字符串长度截取    -->
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ card.message.slice(0,14) }}……</h5>

          <!-- 物品状态判断 -->
          <div class="mt-2.5 mb-5">
            <span v-if="card.stuffState == 1" class="bg-green-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-300 dark:text-blue-800 ms-3">捡到物品</span>
            <span v-else-if="card.stuffState == 0" class="bg-red-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-300 dark:text-blue-800 ms-3">丢失物品</span>
            <span v-else class="bg-blue-700 text-white text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-300 dark:text-blue-800 ms-3">已完成</span>
          </div>
          <!-- 联系电话和详细信息按钮 -->
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-gray-900 dark:text-white">联系电话: {{ card.phoneNumber }}</span>
            <router-link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" :to="{ name: 'details', params: { id: card.id, message: card.message } }">详细信息</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 循环渲染卡片 end -->

    <!-- 翻页 start -->
    <div class="w-full flex justify-center mt-4">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px text-sm">
          <li>
            <button @click="prevPage" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" :disabled="currentPage === 1">上一页</button>
          </li>
          <li>
            <span class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{{ currentPage }}</span>
          </li>
          <li>
            <button @click="nextPage" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" :disabled="currentPage === totalPages">下一页</button>
          </li>
        </ul>
      </nav>
    </div>
    <!-- 翻页 end -->
  </div>
<!--  <TheFooter/>-->
  <ChatBot/>
</template>


<script lang="ts" setup>
import { computed, ref, onMounted ,watch} from 'vue';
import axios from '../axios';
import { useRoute, useRouter } from 'vue-router';
import TheFooter from '@/components/TheFooter.vue';
import TheNavbar from '@/components/TheNavbar.vue';
import ChatBot from "@/components/ChatBot.vue";

interface BackendData {
  goodsId: number;
  userInfo: {
    profileimage: string;
    username: string;
  };
  datetime: string;
  goodsimg: string;
  message: string;
  phonenumber: string;
  stuffstate: boolean;
}

// console.log("------",searchQuery.value)
// const cards = ref(
//   [
//     {
//       // 以下这些信息从数据库中读取
//         id: 1,
//         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
//         username : ref('Alice'),
//         name: ref('李某'),
//         dateTime : ref('6/14/2024 10:34PM'),
//         goods: ref('手表'),
//         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
//         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
//         phoneNumber : ref('13545678999'),
//         address: ref('操场'),
//
//       // 物品状态: flase 代表:丢失物品, true 代表发现物品
//         stuffState : false,
//       // 详细信息
//       detailsUrl: "#",
//
//     },
//     {
//         id: 2,
//         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
//         username : ref('Alice'),
//         name: ref('李某'),
//         dateTime : ref('6/14/2024 10:34PM'),
//         goods: ref('手表'),
//         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
//         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
//         phoneNumber : ref('13545678999'),
//         address: ref('操场'),
//         stuffState : true,
//         detailsUrl: "#"
//     },
//     {
//         id: 3,
//         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
//         username : ref('Alice'),
//         name: ref('李某'),
//         dateTime : ref('6/14/2024 10:34PM'),
//         goods: ref('手表'),
//         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
//         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
//         phoneNumber : ref('13545678999'),
//         address: ref('操场'),
//         stuffState : true,
//         detailsUrl: "#"
//     },
//     {
//         id: 4,
//         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
//         username : ref('Alice'),
//         name: ref('李某'),
//         dateTime : ref('6/14/2024 10:34PM'),
//         goods: ref('手表'),
//         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
//         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
//         phoneNumber : ref('13545678999'),
//         address: ref('操场'),
//         stuffState : true,
//         detailsUrl: "#"
//     },
//     {
//         id: 5,
//         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
//         username : ref('Alice'),
//         name: ref('李某'),
//         dateTime : ref('6/14/2024 10:34PM'),
//         goods: ref('手表'),
//         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
//         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
//         phoneNumber : ref('13545678999'),
//         address: ref('操场'),
//         stuffState : true,
//         detailsUrl: "#"
//     },
//     {
//         id: 6,
//         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
//         username : ref('Alice'),
//         name: ref('李某'),
//         dateTime : ref('6/14/2024 10:34PM'),
//         goods: ref('手表'),
//         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
//         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
//         phoneNumber : ref('13545678999'),
//         address: ref('操场'),
//         stuffState : false,
//         detailsUrl: "#"
//     },
//     {
//         id: 7,
//         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
//         username : ref('Alice'),
//         name: ref('李某'),
//         dateTime : ref('6/14/2024 10:34PM'),
//         goods: ref('手表'),
//         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
//         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
//         phoneNumber : ref('13545678999'),
//         address: ref('操场'),
//         stuffState : false,
//         detailsUrl: "#"
//     },
//     {
//         id: 8,
//         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
//         username : ref('Alice'),
//         name: ref('李某'),
//         dateTime : ref('6/14/2024 10:34PM'),
//         goods: ref('手表'),
//         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
//         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
//         phoneNumber : ref('13545678999'),
//         address: ref('操场'),
//         stuffState : true,
//         detailsUrl: "#"
//     },
//     {
//         id: 9,
//         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
//         username : ref('Alice'),
//         name: ref('李某'),
//         dateTime : ref('6/14/2024 10:34PM'),
//         goods: ref('手表'),
//         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
//         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
//         phoneNumber : ref('13545678999'),
//         address: ref('操场'),
//         stuffState : true,
//         detailsUrl: "#"
//     },
//     {
//         id: 10,
//         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
//         username : ref('Alice'),
//         name: ref('李某'),
//         dateTime : ref('6/14/2024 10:34PM'),
//         goods: ref('手表'),
//         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
//         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
//         phoneNumber : ref('13545678999'),
//         address: ref('操场'),
//         stuffState : true,
//         detailsUrl: "#"
//     },
//   ]
// )

const cards = ref([])
// 当前页码
const currentPage = ref(1);
const itemsPerPage = 8; // 每页显示的卡片数量

// 总页数
const totalPages = computed(() => {
  return Math.ceil(cards.value.length / itemsPerPage);
});

const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return cards.value.slice(start, end);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const route = useRoute()
const router = useRouter()
const searchQuery = ref(route.query.search?.toString() || '');
const isLoading = ref(false);

const fetchData = async()=>{
  // if (!searchQuery.value) return;
  isLoading.value = true;
  try{
    const url = searchQuery.value
        ? `/goods/list?info=${searchQuery.value}`
        : '/goods/list';
    axios.get(url)
        .then(response => {
          // console.log("responseData: ", response.data.data)
          cards.value = response.data.data.list.map((item: BackendData) => ({
            id: item.goodsId,
            profileImage: item.userInfo.profileimage,
            username: item.userInfo.username,
            dateTime: item.datetime,
            goodsImg: item.goodsimg,
            message: item.message,
            phoneNumber: item.phonenumber,
            stuffState: item.stuffstate,
          }));
          cards.value.reverse()
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }catch(error){
    console.log('error', error)
  }finally {
    isLoading.value = false;
  }

}

onMounted(() => {
  fetchData();
});

// watch监听路由变化
watch(() => route.query.search, (newQuery) => {
  searchQuery.value = newQuery ? newQuery.toString() : '';
  fetchData();
});
// console.log(cards.value)
</script>
