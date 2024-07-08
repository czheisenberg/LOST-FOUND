<template>
  <!-- 留言板 start -->
  <div class="container mx-auto mt-10 p-4 dark:bg-gray-800 shadow-md">
    <h2 class="text-3xl my-6">评论</h2>
    <!--留言表单容器组件-->
    <CommentBox @submit="addNewComment"/>
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
      <ReplyContainer v-if="comment.replies">
        <!-- 回复 -->
        <CommentItem
            v-for="reply in comment.replies"
            :key="reply.id"
            :user="reply.user"
            :avatar="reply.avatar"
            :time="reply.time"
            :content="reply.content"
        />
      </ReplyContainer>
      <ReplyBox @submit="addNewComment($event, comment.id)" />
    </div>
  </div>
  <!-- 留言板 end -->
</template>




<script lang="ts" setup>
import CommentBox from "@/components/MessageBoardComponents/CommentBox.vue";
import DividerHorizontal from "@/components/MessageBoardComponents/DividerHorizontal.vue";
import CommentItem from "@/components/MessageBoardComponents/CommentItem.vue";
import ReplyBox from "@/components/MessageBoardComponents/ReplyBox.vue";
import {onMounted, ref} from "vue";
import ReplyContainer from "@/components/MessageBoardComponents/ReplyContainer.vue";

const face1 = ref('http://img-resource-198239.oss-cn-beijing.aliyuncs.com/images/c1c74ec5-3962-42b0-88ca-1a3e39eeb40f.jpg?Expires=1719907066&OSSAccessKeyId=LTAI5tQ6W9iAHKuWgLruyjwT&Signature=mWcyyCEQDLb2nPWLE%2FG7w41iMWY%3D')
const face2 = ref('https://avatars.githubusercontent.com/u/52897817?v=4')
const face3 = ref('http://img-resource-198239.oss-cn-beijing.aliyuncs.com/images/a7a69b93-128f-47b1-ad18-d8ad59808772.jpg?Expires=1719908331&OSSAccessKeyId=LTAI5tQ6W9iAHKuWgLruyjwT&Signature=vaRH3OdWy1OTiekpSQIMzYXg8CA%3D')
const face4 = ref('')
const comments = ref([]);

// async function getAllComments() {
//   const res = await fetch("/api/comments");
//   comments.value = await res.json();
// }


let rid = ref(4);

const constructNewComment = (content) => {
  return {
    id: rid.value++,
    user: "当前用户",
    avatar: face4.value,
    content,
    time: "1秒前",
  };
};
const addNewComment = (content) => {
  const newComment = constructNewComment(content);
  comments.value.push(newComment);
};

const addReply = (content, id) => {
  const reply = constructNewComment(content);
  let comment = comments.value.find((comment) => comment.id === id);
  if (comment.replies) {
    comment.replies.push(reply);
  } else {
    comment.replies = [reply];
  }
};

// const addNewComment = async (content, replyTo) => {
//   const res =  await fetch(`/api/comments`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       content,
//       ...(replyTo && { replyTo }),
//     }),
//   });

  // const newComment = await res.json();
  // if (!replyTo) {
  //   comments.value.unshift(newComment);
  // } else {
  //   comments.value.find((c) => c.id === replyTo).replies.unshift(newComment);
  // }

  // 新增完评论后，自动获取新的评论列表
  // Notion API 有延迟，在添加完 page 之后，需要过一会才能获取到新的评论列表
  // setTimeout(async () => {
  //   await getAllComments();
  // }, 1000);
// };

// onMounted(()=>{
//   getAllComments();
// })
</script>