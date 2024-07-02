<template>
<!--  单个留言组件-->
  <div class="flex">
    <img :src="avatar" alt="" class="w-12 h-12 mr-4 rounded-full" />
    <div>
      <!--用户名-->
      <p>{{ user }}</p>
      <!--发布日期-->
      <p class="text-gray-600 text-sm">{{ time }}</p>
    </div>
    <!-- 菜单右对齐 -->
    <span class="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </span>
  </div>
  <p class="text-gray-600 py-4">
    <!--留言内容-->
    {{ content }}
  </p>
</template>

<!--<script lang="ts" >-->
<!--//单个留言组件-->
<!--export default {-->
<!--  props: {-->
<!--    user: String,-->
<!--    avatar: String,-->
<!--    time: String,-->
<!--    content: String-->
<!--  }-->
<!--}-->
<!--</script>-->
<script lang="ts" setup>
import {defineProps} from 'vue'
defineProps(["user", "avatar", "time", "content"]);
</script>