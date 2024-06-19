<template>
    <div>
      <TheNavbar />
      <div class="container mx-auto mt-10 p-4 dark:bg-gray-800 shadow-md">
        <h1 class="text-2xl font-bold dark:text-white mb-4">通知列表</h1>
        <div v-if="notifications.length === 0" class="dark:text-white">没有通知</div>
        <div v-else>
          <div
            v-for="(notification, index) in notifications"
            :key="index"
            class="mb-4 p-4 rounded-md dark:bg-gray-700 shadow"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="font-semibold dark:text-white">{{ notification.title }}</span>
              <span class="text-xs text-gray-500">{{ notification.date }}</span>
            </div>
            <p class="dark:text-white">{{ notification.content }}</p>
          </div>
        </div>
      </div>
      <TheFooter />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import TheFooter from "@/components/TheFooter.vue";
  import TheNavbar from "@/components/TheNavbar.vue";
  
  interface Notification {
    title: string;
    content: string;
    date: string;
  }
  
  export default defineComponent({
    name: "NotificationsView",
    components: {
      TheNavbar,
      TheFooter,
    },
    setup() {
    //   const notifications = ref<Notification[]>([]);
  
    //   const fetchNotifications = async () => {
    //     // 假设这是从后端获取通知数据的函数
    //     const response = await fetch("http://127.0.0.1:8888/notifications");
    //     const data = await response.json();
    //     notifications.value = data;
    //   };
        
    const notifications = [
    {
      title: "通知标题1",
      content: "这是通知内容1",
      date: "2024-06-19",
    },
    {
      title: "通知标题2",
      content: "这是通知内容2",
      date: "2024-06-18",
    },
    // 更多通知...
  ];
      onMounted(() => {
        // fetchNotifications();
      });
  
      return {
        notifications,
      };
    },
  });
  </script>
  
  <style scoped>
  /* 你的样式代码 */
  </style>
  