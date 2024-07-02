<template>
  <!-- 留言板 start -->
  <div class="container mx-auto mt-10 p-4 dark:bg-gray-800 shadow-md">
    <h2 class="text-3xl my-6">评论</h2>
    <!--留言表单容器组件-->
    <CommentBox/>
    <!--分割线组件-->
    <DividerHorizontal/>
    <div v-for="(comment) in comments" :key="comment.id">
      <!--单个留言组件-->
      <CommentItem
        :user="comment.user"
        :avatar="comment.avatar"
        :time = "comment.time"
        :content = "comment.content"
      />
      <!--回复列表容器组件-->
      <ReplyBox v-if="comment.replies">
        <!-- 回复 -->
        <CommentItem
            v-for="reply in comment.replies"
            :key="reply.id"
            :user="reply.user"
            :avatar="reply.avatar"
            :time="reply.time"
            :content="reply.content"
        />
      </ReplyBox>

    </div>
  </div>
  <!-- 留言板 end -->
</template>




<script lang="ts" setup>
import CommentBox from "@/components/MessageBoardComponents/CommentBox.vue";
import DividerHorizontal from "@/components/MessageBoardComponents/DividerHorizontal.vue";
import CommentItem from "@/components/MessageBoardComponents/CommentItem.vue";
import ReplyBox from "@/components/MessageBoardComponents/ReplyBox.vue";
import {ref} from "vue";

const face1 = ref('http://img-resource-198239.oss-cn-beijing.aliyuncs.com/images/c1c74ec5-3962-42b0-88ca-1a3e39eeb40f.jpg?Expires=1719907066&OSSAccessKeyId=LTAI5tQ6W9iAHKuWgLruyjwT&Signature=mWcyyCEQDLb2nPWLE%2FG7w41iMWY%3D')
const face2 = ref('https://avatars.githubusercontent.com/u/52897817?v=4')
const face3 = ref('http://img-resource-198239.oss-cn-beijing.aliyuncs.com/images/a7a69b93-128f-47b1-ad18-d8ad59808772.jpg?Expires=1719908331&OSSAccessKeyId=LTAI5tQ6W9iAHKuWgLruyjwT&Signature=vaRH3OdWy1OTiekpSQIMzYXg8CA%3D')

const comments = [
  {
    id: 1,
    user: "梦落轻寻",
    avatar: face1.value,
    time: "2小时之前",
    content:
        "哇！这篇文章真是写的太好啦！收到很大的启发，希望博主能够再接再厉，产出越来越多，越来越好的文章！凑字数，字数，字数...",
    replies: [
      {
        id: 2,
        user: "陌上花开",
        avatar: face2.value,
        time: "2小时之前",
        content: "赞！",
      },
      {
        id: 3,
        user: "半梦半醒半浮生√<",
        avatar: face3.value,
        time: "2小时之前",
        content:
            "这是一篇非常长的长篇大论，这篇文章写的非常好，无论是技术点还是理论点，都非常的好。而且主题分明，每一个点都有自己的解释，这篇文章的主题是：CSS3的新特性，如何使用CSS3的新特性，以及如何使用CSS3的新特性。真的是非常好的文章。",
      },
    ],
  },
];
</script>