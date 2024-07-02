<template>
  <!-- 留言板 start -->
  <div class="container mx-auto mt-10 p-4 dark:bg-gray-800 shadow-md">
    <h2 class="text-3xl my-6">评论</h2>
    <form action="" class="grid">
            <textarea name="comment" id="" placeholder="请输入你的评论" class="bg-gray-50 p-2 rounded">

            </textarea>
      <fieldset class="py-4">
        <input type="submit" value="评论" class="px-4 py-1 bg-blue-600 rounded text-white" />
        <input type="reset" value="取消" class="px-4 py-1 bg-white rounded border ml-3" />
      </fieldset>
    </form>
    <div class="border-b border-gray-300 my-2 mb-4"></div>
    <div>
      <div class="flex">
        <img src="/images/face1.webp" alt="" class="w-12 h-12 mr-4 rounded-full" />
        <div>
          <!--用户名-->
          <p>梦落轻寻</p>
          <!--发布日期-->
          <p class="text-gray-600 text-sm">2 小时之前</p>
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
        哇！这篇文章真是写的太好啦！收到很大的启发，希望博主能够再接再厉，产出越来越多，越来越好的文章！凑字数，字数，字数...
      </p>

      <!--回复-->
      <div class="pl-8 border-l-2 border-gray-200">
        <!-- 回复 -->
        <div class="flex">
          <!-- 即使在 public 文件夹下，也需要使用 / 绝对路径引用它下面的文件，省略 Public -->
          <img src="/images/face2.webp" alt="" class="w-12 h-12 mr-4 rounded-full" />
          <div>
            <p>陌上花开</p>
            <p class="text-gray-600 text-sm">2 小时之前</p>
          </div>

          <span class="ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </span>
        </div>
        <p class="text-gray-600 py-4">赞！</p>
        <div class="flex">
          <!-- 即使在 public 文件夹下，也需要使用 / 绝对路径引用它下面的文件，省略 Public -->
          <img src="/images/face3.webp" alt="" class="w-12 h-12 mr-4 rounded-full" />
          <div>
            <p>半梦半醒半浮生√</p>
            <p class="text-gray-600 text-sm">2 小时之前</p>
          </div>

          <span class="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
            </span>
        </div>
        <p class="text-gray-600 py-4">
          这是一篇非常长的长篇大论，这篇文章写的非常好，无论是技术点还是理论点，都非常的好。而且主题分明，每一个点都有自己的解释，这篇文章的主题是：CSS3的新特性，如何使用CSS3的新特性，以及如何使用CSS3的新特性。真的是非常好的文章。
        </p>
      </div>
      <button class="pt-4 pb-10 text-blue-600">回复</button>
    </div>
  </div>
  <!-- 留言板 end -->
</template>




<script lang="ts" setup>

import {reactive, ref} from "vue";

interface Message {
  username: string;
  content: string;
  date: string;
}


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
</script>