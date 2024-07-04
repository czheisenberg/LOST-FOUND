<template>


<footer class="hidden fixed bottom-0 h-5 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">LOST & FOUND</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">操作文档</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">隐私政策</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">关于我们</a>
        </li>
        <li>
            <a href="#" class="hover:underline">联系客服</a>
        </li>
    </ul>
</footer>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheFooter',
});
</script>
