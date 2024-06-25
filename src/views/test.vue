<template>
  <div>
  <div class="relative inline-block text-left">
    <button @click="showPopover = !showPopover" class="bg-red-500 text-white px-4 py-2 rounded">
      删除
    </button>
    <div v-if="showPopover" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div class="p-4">
        <p class="text-sm text-gray-700">确定要删除吗？</p>
        <div class="mt-4 flex justify-end space-x-2">
          <button @click="confirmDelete" class="bg-blue-500 text-white px-4 py-2 rounded">
            确认
          </button>
          <button @click="cancelDelete" class="bg-gray-500 text-white px-4 py-2 rounded">
            取消
          </button>
        </div>
      </div>
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
