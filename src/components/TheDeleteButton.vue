<template>
<!--  <div>-->
<!--    <button @click="showPopover = !showPopover" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">-->
<!--      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>-->
<!--      删除-->
<!--    </button>-->
<!--    <div v-if="showPopover" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">-->
<!--      <div class="p-4">-->
<!--        <p class="text-sm text-gray-700">确定要删除吗？</p>-->
<!--        <div class="mt-4 flex  space-x-2">-->
<!--          <button @click="confirmDelete" class="bg-blue-500 text-white px-4 py-2 rounded">-->
<!--            确认-->
<!--          </button>-->
<!--          <button @click="cancelDelete" class="bg-gray-500 text-white px-4 py-2 rounded">-->
<!--            取消-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->


  <button @click="showPopover = !showPopover" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
    删除
  </button>
  <div v-if="showPopover" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div class="p-4">
      <p class="text-sm text-gray-700">确定要删除吗？</p>
      <div class="mt-4 flex  space-x-2">
        <button @click="confirmDelete" class="bg-blue-500 text-white px-4 py-2 rounded">
          确认
        </button>
        <button @click="cancelDelete" class="bg-gray-500 text-white px-4 py-2 rounded">
          取消
        </button>
      </div>
    </div>
  </div>
</template>



<script lang="ts" setup>
import { ref } from 'vue';

const showPopover = ref(false);

const confirmDelete = () => {
  showPopover.value = false;
  // 处理确认删除的逻辑

  console.log('删除已确认');
};

const cancelDelete = () => {
  showPopover.value = false;
};
</script>

<style scoped>
/* 可选：根据需要添加自定义样式 */
</style>
