<!--<template>-->
<!--  <section class="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">-->
<!--    <div class="max-w-2xl mx-auto px-4">-->
<!--      <div class="flex justify-between items-center mb-6">-->
<!--        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion ({{ comments.length }})</h2>-->
<!--      </div>-->
<!--      <form class="mb-6" @submit.prevent="addComment">-->
<!--        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">-->
<!--          <label for="comment" class="sr-only">Your comment</label>-->
<!--          <textarea id="comment" rows="6"-->
<!--                    v-model="newComment"-->
<!--                    class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"-->
<!--                    placeholder="Write a comment..." required></textarea>-->
<!--        </div>-->
<!--        <button type="submit"-->
<!--                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">-->
<!--          Post comment-->
<!--        </button>-->
<!--      </form>-->
<!--      <div v-for="(comment, commentIndex) in comments" :key="comment.commentId" class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">-->
<!--        <footer class="flex justify-between items-center mb-2">-->
<!--          <div class="flex items-center">-->
<!--            <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">-->
<!--              <img class="mr-2 w-6 h-6 rounded-full" :src="comment.userInfoSimRsp.profileimage" :alt="comment.userInfoSimRsp.username">-->
<!--              {{ comment.userInfoSimRsp.username }}-->
<!--            </p>-->
<!--            <p class="text-sm text-gray-600 dark:text-gray-400">-->
<!--              <time :datetime="comment.updateTime" :title="comment.updateTime">{{ comment.updateTime }}</time>-->
<!--            </p>-->
<!--          </div>-->
<!--          <button @click="toggleDropdown(commentIndex)" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">-->
<!--            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">-->
<!--              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>-->
<!--            </svg>-->
<!--          </button>-->
<!--          <div v-if="comment.showDropdown" class="z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">-->
<!--            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">-->
<!--              <li><a @click.prevent="editComment(commentIndex)" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a></li>-->
<!--              <li><a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a></li>-->
<!--              <li><a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a></li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </footer>-->
<!--        <div v-if="comment.editing">-->
<!--          <textarea v-model="comment.editContent" class="w-full p-2 mb-2 border border-gray-300 rounded"></textarea>-->
<!--          <button @click="updateComment(commentIndex)" class="py-2 px-4 mr-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Save</button>-->
<!--          <button @click="cancelEdit(commentIndex)" class="py-2 px-4 text-xs font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600">Cancel</button>-->
<!--        </div>-->
<!--        <p v-else class="text-gray-500 dark:text-gray-400">{{ comment.content }}</p>-->
<!--        <div class="flex items-center mt-4 space-x-4">-->
<!--          <button @click="toggleReply(commentIndex)" class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">-->
<!--            <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">-->
<!--              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>-->
<!--            </svg>-->
<!--            Reply-->
<!--          </button>-->
<!--        </div>-->
<!--        <form v-if="comment.showReply" class="mt-4" @submit.prevent="addReply(commentIndex)">-->
<!--          <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">-->
<!--            <label for="reply" class="sr-only">Your reply</label>-->
<!--            <textarea id="reply" rows="3"-->
<!--                      v-model="comment.newReply"-->
<!--                      class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"-->
<!--                      placeholder="Write a reply..." required></textarea>-->
<!--          </div>-->
<!--          <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">-->
<!--            Post reply-->
<!--          </button>-->
<!--        </form>-->
<!--        <div v-if="comment.childList.length" class="mt-4">-->
<!--          <article v-for="(reply, replyIndex) in comment.childList" :key="reply.commentId" class="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">-->
<!--            <footer class="flex justify-between items-center mb-2">-->
<!--              <div class="flex items-center">-->
<!--                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">-->
<!--                  <img class="mr-2 w-6 h-6 rounded-full" :src="reply.userInfoSimRsp.profileimage" :alt="reply.userInfoSimRsp.username">-->
<!--                  {{ reply.userInfoSimRsp.username }}-->
<!--                </p>-->
<!--                <p class="text-sm text-gray-600 dark:text-gray-400">-->
<!--                  <time :datetime="reply.updateTime" :title="reply.updateTime">{{ reply.updateTime }}</time>-->
<!--                </p>-->
<!--              </div>-->
<!--              <button @click="toggleDropdown(commentIndex, replyIndex)" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">-->
<!--                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">-->
<!--                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>-->
<!--                </svg>-->
<!--              </button>-->
<!--              <div v-if="reply.showDropdown" class="z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">-->
<!--                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">-->
<!--                  <li><a @click.prevent="editReply(commentIndex, replyIndex)" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a></li>-->
<!--                  <li><a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a></li>-->
<!--                  <li><a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a></li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </footer>-->
<!--            <div v-if="reply.editing">-->
<!--              <textarea v-model="reply.editContent" class="w-full p-2 mb-2 border border-gray-300 rounded"></textarea>-->
<!--              <button @click="updateReply(commentIndex, replyIndex)" class="py-2 px-4 mr-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Save</button>-->
<!--              <button @click="cancelEditReply(commentIndex, replyIndex)" class="py-2 px-4 text-xs font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600">Cancel</button>-->
<!--            </div>-->
<!--            <p v-else class="text-gray-500 dark:text-gray-400">{{ reply.content }}</p>-->
<!--            <div class="flex items-center mt-4 space-x-4">-->
<!--              <button @click="toggleReply(commentIndex, replyIndex)" class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">-->
<!--                <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">-->
<!--                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>-->
<!--                </svg>-->
<!--                Reply-->
<!--              </button>-->
<!--            </div>-->
<!--            <form v-if="reply.showReply" class="mt-4" @submit.prevent="addReply(commentIndex, replyIndex)">-->
<!--              <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">-->
<!--                <label for="nested-reply" class="sr-only">Your reply</label>-->
<!--                <textarea id="nested-reply" rows="3"-->
<!--                          v-model="reply.newReply"-->
<!--                          class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"-->
<!--                          placeholder="Write a reply..." required></textarea>-->
<!--              </div>-->
<!--              <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">-->
<!--                Post reply-->
<!--              </button>-->
<!--            </form>-->
<!--          </article>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->
<!--</template>-->

<!--<script lang="ts" setup>-->
<!--import axios from '@/axios';-->
<!--import { ref, reactive, onMounted } from 'vue';-->

<!--interface UserInfo {-->
<!--  userId: string;-->
<!--  username: string;-->
<!--  profileimage: string;-->
<!--}-->

<!--interface Reply {-->
<!--  commentId: string;-->
<!--  content: string;-->
<!--  updateTime: string;-->
<!--  userInfoSimRsp: UserInfo;-->
<!--  showReply?: boolean;-->
<!--  newReply?: string;-->
<!--  showDropdown?: boolean;-->
<!--  editing?: boolean;-->
<!--  editContent?: string;-->
<!--  childList: Reply[];-->
<!--}-->

<!--interface Comment {-->
<!--  commentId: string;-->
<!--  content: string;-->
<!--  updateTime: string;-->
<!--  userInfoSimRsp: UserInfo;-->
<!--  showDropdown?: boolean;-->
<!--  showReply?: boolean;-->
<!--  newReply?: string;-->
<!--  editing?: boolean;-->
<!--  editContent?: string;-->
<!--  childList: Reply[];-->
<!--}-->

<!--const newComment = ref<string>('');-->
<!--const comments = reactive<Comment[]>([]);-->

<!--const fetchComments = async () => {-->
<!--  try {-->
<!--    const response = await axios.get('/comment/query/1003365697922928640');-->
<!--    console.log("xxxxx: ", response.data.data)-->
<!--    comments.push(...response.data.data);-->
<!--  } catch (error) {-->
<!--    console.log('Error fetching comments:', error);-->
<!--  }-->
<!--};-->

<!--onMounted(() => {-->
<!--  fetchComments();-->
<!--});-->

<!--const addComment = () => {-->
<!--  if (newComment.value.trim()) {-->
<!--    const newCommentData: Comment = {-->
<!--      commentId: new Date().toISOString(),-->
<!--      content: newComment.value.trim(),-->
<!--      updateTime: new Date().toISOString(),-->
<!--      userInfoSimRsp: {-->
<!--        userId: 'anonymous',-->
<!--        username: 'Anonymous',-->
<!--        profileimage: 'https://via.placeholder.com/150'-->
<!--      },-->
<!--      showDropdown: false,-->
<!--      showReply: false,-->
<!--      newReply: '',-->
<!--      editing: false,-->
<!--      editContent: '',-->
<!--      childList: []-->
<!--    };-->
<!--    comments.push(newCommentData);-->
<!--    newComment.value = '';-->
<!--  }-->
<!--};-->

<!--const toggleDropdown = (commentIndex: number, replyIndex?: number) => {-->
<!--  if (replyIndex !== undefined) {-->
<!--    comments[commentIndex].childList[replyIndex].showDropdown = !comments[commentIndex].childList[replyIndex].showDropdown;-->
<!--  } else {-->
<!--    comments[commentIndex].showDropdown = !comments[commentIndex].showDropdown;-->
<!--  }-->
<!--};-->

<!--const toggleReply = (commentIndex: number, replyIndex?: number) => {-->
<!--  if (replyIndex !== undefined) {-->
<!--    const reply = comments[commentIndex].childList[replyIndex];-->
<!--    reply.showReply = !reply.showReply;-->
<!--  } else {-->
<!--    comments[commentIndex].showReply = !comments[commentIndex].showReply;-->
<!--  }-->
<!--};-->

<!--const addReply = (commentIndex: number, replyIndex?: number) => {-->
<!--  if (replyIndex !== undefined) {-->
<!--    const reply = comments[commentIndex].childList[replyIndex];-->
<!--    if (reply.newReply?.trim()) {-->
<!--      comments[commentIndex].childList.push({-->
<!--        commentId: new Date().toISOString(),-->
<!--        content: reply.newReply.trim(),-->
<!--        updateTime: new Date().toISOString(),-->
<!--        userInfoSimRsp: {-->
<!--          userId: 'anonymous',-->
<!--          username: 'Anonymous',-->
<!--          profileimage: 'https://via.placeholder.com/150'-->
<!--        },-->
<!--        showReply: false,-->
<!--        newReply: '',-->
<!--        showDropdown: false,-->
<!--        editing: false,-->
<!--        editContent: '',-->
<!--        childList: []-->
<!--      });-->
<!--      reply.newReply = '';-->
<!--    }-->
<!--  } else {-->
<!--    const comment = comments[commentIndex];-->
<!--    if (comment.newReply.trim()) {-->
<!--      comment.childList.push({-->
<!--        commentId: new Date().toISOString(),-->
<!--        content: comment.newReply.trim(),-->
<!--        updateTime: new Date().toISOString(),-->
<!--        userInfoSimRsp: {-->
<!--          userId: 'anonymous',-->
<!--          username: 'Anonymous',-->
<!--          profileimage: 'https://via.placeholder.com/150'-->
<!--        },-->
<!--        showReply: false,-->
<!--        newReply: '',-->
<!--        showDropdown: false,-->
<!--        editing: false,-->
<!--        editContent: '',-->
<!--        childList: []-->
<!--      });-->
<!--      comment.newReply = '';-->
<!--    }-->
<!--  }-->
<!--};-->

<!--const editComment = (commentIndex: number) => {-->
<!--  const comment = comments[commentIndex];-->
<!--  comment.editing = true;-->
<!--  comment.editContent = comment.content;-->
<!--  comment.showDropdown = false;-->
<!--};-->

<!--const updateComment = (commentIndex: number) => {-->
<!--  const comment = comments[commentIndex];-->
<!--  if (comment.editContent?.trim()) {-->
<!--    comment.content = comment.editContent.trim();-->
<!--    comment.editing = false;-->
<!--  }-->
<!--};-->

<!--const cancelEdit = (commentIndex: number) => {-->
<!--  const comment = comments[commentIndex];-->
<!--  comment.editing = false;-->
<!--};-->

<!--const editReply = (commentIndex: number, replyIndex: number) => {-->
<!--  const reply = comments[commentIndex].childList[replyIndex];-->
<!--  reply.editing = true;-->
<!--  reply.editContent = reply.content;-->
<!--  reply.showDropdown = false;-->
<!--};-->

<!--const updateReply = (commentIndex: number, replyIndex: number) => {-->
<!--  const reply = comments[commentIndex].childList[replyIndex];-->
<!--  if (reply.editContent?.trim()) {-->
<!--    reply.content = reply.editContent.trim();-->
<!--    reply.editing = false;-->
<!--  }-->
<!--};-->

<!--const cancelEditReply = (commentIndex: number, replyIndex: number) => {-->
<!--  const reply = comments[commentIndex].childList[replyIndex];-->
<!--  reply.editing = false;-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--/* Add your styles here if needed */-->
<!--</style>-->

<template>
  <div class="fixed bottom-0 right-0 mb-4 mr-4">
    <button @click="toggleChatbox" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
      </svg>
      疑惑
    </button>
  </div>
  <div v-if="isChatboxOpen" class="fixed bottom-16 right-4 w-96">
    <div class="bg-white shadow-md rounded-lg max-w-lg w-full">
      <div class="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
        <p class="text-lg font-semibold">Bot</p>
        <button @click="toggleChatbox" class="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div ref="chatbox" class="p-4 h-80 overflow-y-auto">
        <div v-for="msg in messages" :key="msg.id" :class="['mb-2', msg.type === 'sent' ? 'text-right' : '']">
          <p :class="['py-2 px-4 rounded-lg inline-block', msg.type === 'sent' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700']">
            {{ msg.content }}
          </p>
        </div>
      </div>
      <div class="p-4 border-t flex">
        <input v-model="messageToSend" @keyup.enter="send" type="text" placeholder="键入信息..." class="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <button @click="send" class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">发送</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

interface Message {
  id: string;
  content: string;
  type: 'sent' | 'received';
}

const websocket = ref<WebSocket | null>(null);
const clientId = Math.random().toString(36).substr(2);
const isChatboxOpen = ref(false);
const messageToSend = ref('');
const messages = ref<Message[]>([]);
const chatbox = ref<HTMLDivElement | null>(null);

const toggleChatbox = () => {
  isChatboxOpen.value = !isChatboxOpen.value;
};

const addMessage = (content: string, type: 'sent' | 'received') => {
  messages.value.push({ id: Math.random().toString(36).substr(2), content, type });
  nextTick(() => {
    if (chatbox.value) {
      chatbox.value.scrollTop = chatbox.value.scrollHeight;
    }
  });
};

const send = () => {
  if (messageToSend.value.trim() !== '' && websocket.value && websocket.value.readyState === WebSocket.OPEN) {
    websocket.value.send(messageToSend.value);
    addMessage(messageToSend.value, 'sent');
    messageToSend.value = '';
  }
};

const closeWebSocket = () => {
  if (websocket.value) {
    websocket.value.close();
  }
};

onMounted(() => {
  if ('WebSocket' in window) {
    websocket.value = new WebSocket(`ws://localhost:8081/ws/${clientId}`);

    websocket.value.onerror = () => {
      addMessage("连接错误", 'received');
    };

    websocket.value.onopen = () => {
      addMessage("连接成功", 'received');
    };

    websocket.value.onmessage = (event) => {
      addMessage(event.data, 'received');
    };

    websocket.value.onclose = () => {
      addMessage("连接关闭", 'received');
    };
  } else {
    alert('当前浏览器不支持 WebSocket');
  }
});

onBeforeUnmount(() => {
  closeWebSocket();
});
</script>

<style scoped>
.chat-window {
  display: flex;
  flex-direction: column;
}
.message {
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 0.5rem;
  max-width: 70%;
}
</style>

