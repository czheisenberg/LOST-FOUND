<template>
  <section class="bg-white dark:bg-gray-800 py-8 lg:py-16 antialiased">
    <div class="max-w-2xl mx-auto px-4">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">留言 ({{ comments.length }})</h2>
<!--        <h3 class="text-green-500">{{ msg }}</h3>-->
      </div>
      <form class="mb-6" @submit.prevent="addComment">
        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label for="comment" class="sr-only">Your comment</label>
          <textarea id="comment" rows="6"
                    v-model="newComment"
                    class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..." required></textarea>
        </div>
        <button type="submit"
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
          发布留言
        </button>
      </form>
      <div v-for="(comment, commentIndex) in comments" :key="comment.commentId" class="p-6 text-base bg-white rounded-lg dark:bg-gray-800">
        <footer class="flex justify-between items-center mb-2">
          <div class="flex items-center">
            <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              <img class="mr-2 w-6 h-6 rounded-full" :src="comment.userInfoSimRsp.profileimage" :alt="comment.userInfoSimRsp.username">
              {{ comment.userInfoSimRsp.username }}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              <time :datetime="comment.updateTime" :title="comment.updateTime">{{ comment.updateTime }}</time>
            </p>
          </div>
          <button @click="toggleDropdown(commentIndex)" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
          </button>
          <div v-if="comment.showDropdown" class="z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
              <li><a @click.prevent="editComment(commentIndex)" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">编辑</a></li>
              <li><a @click.prevent="removeComment(comment.commentId)" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">删除</a></li>
<!--              <li><a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a></li>-->
            </ul>
          </div>
        </footer>
        <div v-if="comment.editing">
          <textarea v-model="comment.editContent" class="w-full p-2 mb-2 border border-gray-300 rounded"></textarea>
          <button @click="updateComment(commentIndex)" class="py-2 px-4 mr-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Save</button>
          <button @click="cancelEdit(commentIndex)" class="py-2 px-4 text-xs font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600">Cancel</button>
        </div>
        <p v-else class="text-gray-500 dark:text-gray-400">{{ comment.content }}</p>
        <div class="flex items-center mt-4 space-x-4">
          <button @click="toggleReply(commentIndex)" class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
            <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
            </svg>
            回复
          </button>
        </div>
        <!--添加回复-->
        <form v-if="comment.showReply" class="mt-4" @submit.prevent="addReply(commentIndex)">
          <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="reply" class="sr-only">Your reply</label>
            <textarea id="reply" rows="3"
                      v-model="comment.newReply"
                      class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                      placeholder="Write a reply..." required></textarea>
          </div>
          <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            发布回复
          </button>
        </form>
        <div v-if="comment.childList.length" class="mt-4">
          <article v-for="(reply, replyIndex) in comment.childList" :key="reply.commentId" class="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-800">
            <footer class="flex justify-between items-center mb-2">
              <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img class="mr-2 w-6 h-6 rounded-full" :src="reply.userInfoSimRsp.profileimage" :alt="reply.userInfoSimRsp.username">
                  {{ reply.userInfoSimRsp.username }}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  <time :datetime="reply.updateTime" :title="reply.updateTime">{{ reply.updateTime }}</time>
                </p>
              </div>
              <button @click="toggleDropdown(commentIndex, replyIndex)" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
              </button>
              <div v-if="reply.showDropdown" class="z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                  <li><a @click.prevent="editReply(commentIndex, replyIndex)" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">编辑</a></li>
                  <li><a @click.prevent="removeComment(reply.commentId)" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">删除</a></li>
<!--                  <li><a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a></li>-->
                </ul>
              </div>
            </footer>
            <div v-if="reply.editing">
              <textarea v-model="reply.editContent" class="w-full p-2 mb-2 border border-gray-300 rounded"></textarea>
              <button @click="updateReply(commentIndex, replyIndex)" class="py-2 px-4 mr-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Save</button>
              <button @click="cancelEditReply(commentIndex, replyIndex)" class="py-2 px-4 text-xs font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600">Cancel</button>
            </div>
            <p v-else class="text-gray-500 dark:text-gray-400">{{ reply.content }}</p>
            <div class="flex items-center mt-4 space-x-4">
              <button @click="toggleReply(commentIndex, replyIndex)" class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                </svg>
                回复
              </button>
            </div>
            <!--回复的回复-->
            <form v-if="reply.showReply" class="mt-4" @submit.prevent="addReply(commentIndex, replyIndex)">
              <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label for="nested-reply" class="sr-only">Your reply</label>
                <textarea id="nested-reply" rows="3"
                          v-model="reply.newReply"
                          class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                          placeholder="Write a reply..." required></textarea>
              </div>
              <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                发布回复
              </button>
            </form>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import axios from '@/axios';
import { ref, reactive, onMounted,defineProps } from 'vue';
import { useRouter } from 'vue-router';
import notification from "@/notification";

// 接受父组件DetailsView.vue传递的值；子组件调用方式: props.goodsId
const props = defineProps(['goodsId'])
console.log("goodsId is ", props.goodsId )

const router = new useRouter()

interface UserInfo {
  userId: string;
  username: string;
  profileimage: string;
}

interface Reply {
  content: string;
  updateTime: string;
  userInfoSimRsp: UserInfo;
  showReply?: boolean;
  newReply?: string;
  showDropdown?: boolean;
  editing?: boolean;
  editContent?: string;
  childList: Reply[];
}

interface Comment {
  content: string;
  updateTime: string;
  userInfoSimRsp: UserInfo;
  showDropdown?: boolean;
  showReply?: boolean;
  newReply?: string;
  editing?: boolean;
  editContent?: string;
  childList: Reply[];
}
// 获取当前登录用户的信息：userId, username, profileimage
const userId = ref('')
const username = ref('')
const profileimage = ref('')
const currentUserFetchData = async()=>{
  const responseData = await axios.get("/userinfo/selfQuery");
  // console.log("currentUserFetchData: ", responseData.data.data)
  if(responseData.data.code == 200){
    userId.value = responseData.data.data.userId;
    console.log("获取的userId:", responseData.data.data.userId)
    username.value = responseData.data.data.username;
    profileimage.value = responseData.data.data.profileimage;
  }else{
    notification.error('尚未登录，请登录查看', '')
  }

}

const newComment = ref<string>('');
const comments = reactive<Comment[]>([]);

// 请求评论/留言
const fetchComments = async () => {
  try {
    const response = await axios.get(`/comment/query/${props.goodsId}`);
    // console.log("xxxxx: ", response.data.data)
    comments.push(...response.data.data);
  } catch (error) {
    // console.log('Error fetching comments:', error);
    notification.error('尚未登录，请登录查看', '')
  }
};

onMounted(() => {
  fetchComments();
  currentUserFetchData();
});

// 新增留言
const addComment = async () => {
  if (newComment.value.trim()) {
    const newCommentData: Comment = {
      content: newComment.value.trim(),
      updateTime: new Date().toISOString(),
      userInfoSimRsp: {
        userId: userId.value,
        username: username.value,
        profileimage: profileimage.value
      },
      showDropdown: false,
      showReply: false,
      newReply: '',
      editing: false,
      editContent: '',
      childList: []
    };
    comments.push(newCommentData);

    // newComment.value = '';
    // console.log("newCommentData: ", newCommentData)
    notification.suc('新增成功!', '')

    // 调用api将留言插入数据库.
    const updateData = new FormData();
    updateData.append('goodsId', props.goodsId)
    updateData.append('content', newCommentData.content)

    try{
      const responseData = await axios.post("/comment/add", updateData, {
        headers:{
          'Content-Type':'multipart/form-data',
        }
      })
      console.log("================== ad new comment ok", responseData.data)
      // msg.value = '新增留言成功!'
      notification.suc('新增成功!', '')
      router.go(0)
    }catch(error){
      // console.log("add new comment error: ", error)
      notification.error('新增留言失败!', '')
    }
  }

};

// 删除留言
// 按commentId 删除
const removeComment = async(commentId)=>{
  console.log("点击删除时获取的当前commentId为: ",commentId);
  // 获取ok
  try{
    const responseData = await axios.delete(`/comment/delete/${commentId}`)
    // console.log("删除返回情况：", responseData.data)
    notification.suc("已删除!", '')
    router.go(0)
  }catch(error){
    notification.suc("删除发生错误!", '')
  }

}

const toggleDropdown = (commentIndex: number, replyIndex?: number) => {
  if (replyIndex !== undefined) {
    comments[commentIndex].childList[replyIndex].showDropdown = !comments[commentIndex].childList[replyIndex].showDropdown;
  } else {
    comments[commentIndex].showDropdown = !comments[commentIndex].showDropdown;
  }
};

const toggleReply = (commentIndex: number, replyIndex?: number) => {
  if (replyIndex !== undefined) {
    const reply = comments[commentIndex].childList[replyIndex];
    reply.showReply = !reply.showReply;
  } else {
    comments[commentIndex].showReply = !comments[commentIndex].showReply;
  }
};

const addReply = async (commentIndex: number, replyIndex?: number) => {
  if (replyIndex !== undefined) {
    const reply = comments[commentIndex].childList[replyIndex];
    if (reply.newReply?.trim()) {
      comments[commentIndex].childList.push({
        content: reply.newReply.trim(),
        updateTime: new Date().toISOString(),
        userInfoSimRsp: {
          userId: userId.value,
          username: username.value,
          profileimage: profileimage.value
        },
        showReply: false,
        newReply: '',
        showDropdown: false,
        editing: false,
        editContent: '',
        childList: []
      });
      // reply.newReply = '';
      // console.log("1reply data: ", reply)
      // console.log('回复的回复', reply.newReply)
      // console.log('回复的回复的父id', reply.commentId)

      const updateData = new FormData()
      updateData.append('goodsId', props.goodsId)
      updateData.append('content', reply.newReply)
      updateData.append('parentId', reply.commentId)
      // 爆红忽略
      try{
        const responseData = await axios.post("/comment/add", updateData,{
          headers:{
            'Content-Type':'multipart/form-data'
          }
        })
        // msg.value = '回复成功!'
        notification.suc("回复成功", '')
        router.go(0)
      }catch(error){
        // msg.value = error.message
        notification.error("回复失败!发送未知错误!", '')
      }
    }
  } else {
    // else 当前的留言没有回复时
    const comment = comments[commentIndex];
    if (comment.newReply.trim()) {
      comment.childList.push({
        content: comment.newReply.trim(),
        updateTime: new Date().toISOString(),
        userInfoSimRsp: {
          userId: userId.value,
          username: username.value,
          profileimage: profileimage.value
        },
        showReply: false,
        newReply: '',
        showDropdown: false,
        editing: false,
        editContent: '',
        childList: []
      });
      // comment.newReply = '';
      // console.log("新的: ", comment.newReply)
      // console.log("新的回复内容为: ", comment.childList)
      const updateData = new FormData();
      updateData.append('goodsId', props.goodsId)
      // comment.newReply 爆红不碍事
      updateData.append('content', comment.newReply)
      // parentId 为当前的 commentId, 这里编辑器报红不碍事
      updateData.append('parentId', comment.commentId)
      try{
        const responseData = await axios.post("/comment/add", updateData, {
          headers:{
            'Content-Type':'multipart/form-data'
          }
        })
        // console.log("----------------- add reply comment ok", responseData.data)
        notification.suc("回复成功!",'')
        router.go(0)
      }catch(error){
        notification.error("回复失败!发生未知错误!",'')
      }


    }
  }
};

const editComment = (commentIndex: number) => {
  const comment = comments[commentIndex];
  comment.editing = true;
  comment.editContent = comment.content;
  comment.showDropdown = false;
};

const updateComment = async (commentIndex: number) => {
  const comment = comments[commentIndex];
  console.log("updateComment.comment", comment)
  if (comment.editContent?.trim()) {
    comment.content = comment.editContent.trim();
    console.log("更新：", comment.content)

    const updateData = new FormData()
    updateData.append('commentId',comment.commentId)
    updateData.append('content', comment.content)

    try{
      const responseData = await axios.put("/comment/update", updateData, {
        headers:{
          'Content-Type':'multipart/form-data'
        }
      })
      // console.log("更新后返回数据: ", responseData.data)
      notification.suc("更新成功!", '')
      router.go(0)
    }catch(error){
      notification.error("更新失败!发生未知错误1", "")
    }



    comment.editing = false;
  }
};

const cancelEdit = (commentIndex: number) => {
  const comment = comments[commentIndex];
  comment.editing = false;
};

const editReply = (commentIndex: number, replyIndex: number) => {
  const reply = comments[commentIndex].childList[replyIndex];
  reply.editing = true;
  reply.editContent = reply.content;
  reply.showDropdown = false;
};

const updateReply = async (commentIndex: number, replyIndex: number) => {
  const reply = comments[commentIndex].childList[replyIndex];
  if (reply.editContent?.trim()) {
    reply.content = reply.editContent.trim();

    console.log("reply comment:", reply)

    const updateData = new FormData()
    updateData.append('commentId',reply.commentId)
    updateData.append('content', reply.content)

    try{
      const responseData = await axios.put("/comment/update", updateData, {
        headers:{
          'Content-Type':'multipart/form-data'
        }
      })
      // console.log("更新后返回数据: ", responseData.data)
      notification.suc("更新完成!", "")
      router.go(0)
    }catch(error){
      notification.error("更新错误!发生未知错误!","")
    }


    reply.editing = false;
  }
};

const cancelEditReply = (commentIndex: number, replyIndex: number) => {
  const reply = comments[commentIndex].childList[replyIndex];
  reply.editing = false;
};
</script>

<style>
/* Add your styles here if needed */
</style>
