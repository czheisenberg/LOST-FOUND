<template>
<!--  <div class="MessageBoard ">-->
<!--    <main class="p-4 bg-gray-50 min-h-screen">-->
<!--      <div class="max-w-screen-xl mx-auto bg-white p-8 rounded-lg shadow-2xl">-->
<!--        <h2 class="text-3xl my-6">评论</h2>-->
<!--        <form action="" class="grid">-->
<!--            <textarea name="comment" id="" placeholder="请输入你的评论" class="bg-gray-50 p-2 rounded">-->

<!--            </textarea>-->
<!--            <fieldset class="py-4">-->
<!--              <input type="submit" value="评论" class="px-4 py-1 bg-blue-600 rounded text-white" />-->
<!--              <input type="reset" value="取消" class="px-4 py-1 bg-white rounded border ml-3" />-->
<!--            </fieldset>-->
<!--        </form>-->
<!--        <div class="border-b border-gray-300 my-2 mb-4"></div>-->
<!--        <div>-->
<!--          <div class="flex">-->
<!--            <img src="/images/face1.webp" alt="" class="w-12 h-12 mr-4 rounded-full" />-->
<!--            <div>-->
<!--              &lt;!&ndash;用户名&ndash;&gt;-->
<!--              <p>梦落轻寻</p>-->
<!--              &lt;!&ndash;发布日期&ndash;&gt;-->
<!--              <p class="text-gray-600 text-sm">2 小时之前</p>-->
<!--            </div>-->
<!--            &lt;!&ndash; 菜单右对齐 &ndash;&gt;-->
<!--            <span class="ml-auto">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">-->
<!--                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />-->
<!--              </svg>-->
<!--            </span>-->
<!--          </div>-->
<!--          <p class="text-gray-600 py-4">-->
<!--              &lt;!&ndash;留言内容&ndash;&gt;-->
<!--            哇！这篇文章真是写的太好啦！收到很大的启发，希望博主能够再接再厉，产出越来越多，越来越好的文章！凑字数，字数，字数...-->
<!--          </p>-->

<!--          &lt;!&ndash;回复&ndash;&gt;-->
<!--          <div class="pl-8 border-l-2 border-gray-200">-->
<!--            &lt;!&ndash; 回复 &ndash;&gt;-->
<!--            <div class="flex">-->
<!--              &lt;!&ndash; 即使在 public 文件夹下，也需要使用 / 绝对路径引用它下面的文件，省略 Public &ndash;&gt;-->
<!--              <img src="/images/face2.webp" alt="" class="w-12 h-12 mr-4 rounded-full" />-->
<!--              <div>-->
<!--                <p>陌上花开</p>-->
<!--                <p class="text-gray-600 text-sm">2 小时之前</p>-->
<!--              </div>-->

<!--              <span class="ml-auto">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" >-->
<!--                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />-->
<!--                </svg>-->
<!--              </span>-->
<!--            </div>-->
<!--            <p class="text-gray-600 py-4">赞！</p>-->
<!--            <div class="flex">-->
<!--              &lt;!&ndash; 即使在 public 文件夹下，也需要使用 / 绝对路径引用它下面的文件，省略 Public &ndash;&gt;-->
<!--              <img src="/images/face3.webp" alt="" class="w-12 h-12 mr-4 rounded-full" />-->
<!--              <div>-->
<!--                <p>半梦半醒半浮生√</p>-->
<!--                <p class="text-gray-600 text-sm">2 小时之前</p>-->
<!--              </div>-->

<!--              <span class="ml-auto">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" >-->
<!--                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />-->
<!--                </svg>-->
<!--            </span>-->
<!--            </div>-->
<!--            <p class="text-gray-600 py-4">-->
<!--              这是一篇非常长的长篇大论，这篇文章写的非常好，无论是技术点还是理论点，都非常的好。而且主题分明，每一个点都有自己的解释，这篇文章的主题是：CSS3的新特性，如何使用CSS3的新特性，以及如何使用CSS3的新特性。真的是非常好的文章。-->
<!--            </p>-->
<!--          </div>-->
<!--          <button class="pt-4 pb-10 text-blue-600">回复</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </main>-->
<!--  </div>-->
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">评论</h1>
    <div v-for="comment in comments" :key="comment.id" class="mb-6">
      <div class="bg-white shadow-md rounded p-4">
        <div class="flex items-center mb-2">
          <img :src="comment.avatar" alt="avatar" class="w-10 h-10 rounded-full mr-4">
          <div>
            <p class="text-lg font-semibold">{{ comment.user }}</p>
            <p class="text-sm text-gray-500">{{ comment.time }}</p>
          </div>
        </div>
        <p class="mb-4">{{ comment.content }}</p>
        <div class="ml-6">
          <div v-for="reply in comment.replies" :key="reply.id" class="mb-2">
            <div class="flex items-center mb-2">
              <img :src="reply.avatar" alt="avatar" class="w-8 h-8 rounded-full mr-2">
              <div>
                <p class="text-md font-semibold">{{ reply.user }}</p>
                <p class="text-sm text-gray-500">{{ reply.time }}</p>
              </div>
            </div>
            <p>{{ reply.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white shadow-md rounded p-4">
      <h2 class="text-xl font-bold mb-4">添加评论</h2>
      <form @submit.prevent="addComment" class="space-y-4">
        <div>
          <label for="user" class="block text-sm font-medium text-gray-700">用户名</label>
          <input type="text" v-model="newComment.user" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div>
          <label for="avatar" class="block text-sm font-medium text-gray-700">头像 URL</label>
          <input type="text" v-model="newComment.avatar" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div>
          <label for="content" class="block text-sm font-medium text-gray-700">内容</label>
          <textarea v-model="newComment.content" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
        </div>
        <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          提交
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from '@/axios'
interface Reply {
  id: number;
  commentId: number;
  user: string;
  avatar: string;
  time: string;
  content: string;
}

interface Comment {
  id: number;
  user: string;
  avatar: string;
  time: string;
  content: string;
  replies: Reply[];
}

const comments = ref<Comment[]>([]);
const newComment = ref<Partial<Comment>>({
  user: '',
  avatar: '',
  content: '',
});

const getComments = async () => {
  try {
    const response = await axios.get('/api/comments');
    comments.value = response.data;
  } catch (error) {
    console.error('获取评论失败:', error);
  }
};

const addComment = async () => {
  try {
    const response = await axios.post('/api/comments', newComment.value);
    // comments.value.push(response.data); // 假设后端返回新添加的评论
    console.log("-------", response.data)
    newComment.value = { user: '', avatar: '', content: '' };
  } catch (error) {
    console.error('添加评论失败:', error);
  }
};

onMounted(getComments);
</script>

<style>
/* 这里可以添加额外的样式，或者在需要时使用 Tailwind CSS 提供的工具类 */
</style>
