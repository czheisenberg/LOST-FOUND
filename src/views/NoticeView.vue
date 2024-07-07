<template>
    <div>
      <TheNavbar />
      <div class="container mx-auto mt-10 p-4 dark:bg-gray-800 shadow-md">
        <h1 class="text-2xl font-bold dark:text-white mb-4">通知列表</h1>
<!--        v-if="notifications.length === 0"-->
<!--        <div  class="dark:text-white">没有通知</div>-->
        <div >
<!--          v-for="(notification, index) in notifications"-->
<!--          :key="index"-->
          <div
            v-for="card in paginatedCards"
            :key="card.id"
            class="mb-4 p-4 rounded-md dark:bg-gray-700 shadow"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="font-semibold dark:text-white">{{ card.releaseDate }}</span>
<!--              <span class="text-xs text-gray-500">{{ card.content}}</span>-->
            </div>
            <p class="dark:text-white">{{ card.content}}</p>
          </div>
        </div>
      </div>
      <TheFooter />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted, computed} from "vue";
  import TheFooter from "@/components/TheFooter.vue";
  import TheNavbar from "@/components/TheNavbar.vue";
  import axios from "@/axios";

  interface NoticeData {
    id: number,
    username: string,
    releaseDate: string,
    content: string,
    update_time: string,
    create_time: string,
  }
  // 当前页码
  const currentPage = ref(1);
  const itemsPerPage = 10; // 每页显示的卡片数量

  // 总页数
  const totalPages = computed(() => {
    return Math.ceil(cards.value.length / itemsPerPage);
  });

  const paginatedCards = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return cards.value.slice(start, end);
  });


  const cards = ref([])
  const noticeFetchData = async() =>{
    try{
      const responseData = await axios("/userManage/queryCondition")
      // console.log(responseData.data.data)
      cards.value = responseData.data.data.map((item: NoticeData)=>({
        id: item.id,
        username: item.username,
        releaseDate: item.releaseDate,
        content: item.content,
        update_time: item.update_time,
        create_time: item.create_time
      }))
    }catch(e){
      console.log("err:",e)
    }
  }

  onMounted(()=>{
    noticeFetchData()
  })


  </script>
  
  <style scoped>
  /* 你的样式代码 */
  </style>
  