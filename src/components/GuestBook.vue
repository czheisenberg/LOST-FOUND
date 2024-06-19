<template>
    <!-- <div class="max-w-2xl mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">留言板</h1>
      <form @submit.prevent="addMessage" class="mb-6">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">姓名</label>
          <input
            type="text"
            id="name"
            v-model="name"
            class="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700">留言</label>
          <textarea
            id="message"
            v-model="message"
            class="mt-1 p-2 w-full border border-gray-300 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          提交
        </button>
      </form>
      <ul>
        <li v-for="(entry, index) in messages" :key="index" class="border-b border-gray-200 py-4">
          <p class="text-lg font-semibold">{{ entry.name }}</p>
          <p>{{ entry.message }}</p>
        </li>
      </ul>
    </div> -->

    
<div class="flex items-start gap-2.5">
   <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image">
   <div class="flex flex-col gap-1 w-full max-w-[320px]">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
         <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
      </div>
      <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
         <p class="text-sm font-normal text-gray-900 dark:text-white"> That's awesome. I think our users will really appreciate the improvements.</p>
      </div>
      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
   </div>
   <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
         <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
      </svg>
   </button>
   <div id="dropdownDots" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
         <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reply</a>
         </li>
         <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forward</a>
         </li>
         <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a>
         </li>
         <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
         </li>
         <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
         </li>
      </ul>
   </div>
</div>

  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'GuestBook',
    setup() {
      const name = ref('');
      const message = ref('');
      const messages = ref([]);
  
      const addMessage = () => {
        messages.value.push({ name: name.value, message: message.value });
        name.value = '';
        message.value = '';
      };
  
      return {
        name,
        message,
        messages,
        addMessage,
      };
    },
  };
  </script>
  
  <style scoped>
  /* 你可以在这里添加任何其他的样式 */
  </style>
  