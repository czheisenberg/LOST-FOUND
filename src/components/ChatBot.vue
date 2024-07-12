
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
    websocket.value = new WebSocket(`ws://localhost:8088/ws/${clientId}`);

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