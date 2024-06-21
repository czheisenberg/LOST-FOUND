<template>
   <TheBackSidebar/>
   <!-- <TheBackContent/> -->
<!--   <div id="main-content" class="relative  h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">-->
<!--    <main>-->
<!--      <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">-->
<!--    <div class="w-full mb-1 mt-10">-->
<!--        <div class="mb-4">-->
<!--            <nav class="flex mb-5" aria-label="Breadcrumb">-->
<!--                <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">-->
<!--                  <li class="inline-flex items-center">-->
<!--                    <a href="#" class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">-->
<!--                      <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>-->
<!--                      用户中心-->
<!--                    </a>-->
<!--                  </li>-->
<!--                  &lt;!&ndash; <li>-->
<!--                    <div class="flex items-center">-->
<!--                      <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>-->
<!--                      <a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">E-commerce</a>-->
<!--                    </div>-->
<!--                  </li> &ndash;&gt;-->
<!--                  <li>-->
<!--                    <div class="flex items-center">-->
<!--                      <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>-->
<!--                      <span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">欢迎</span>-->
<!--                    </div>-->
<!--                  </li>-->
<!--                </ol>-->
<!--            </nav>-->
<!--            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">欢迎</h1>-->
<!--        </div>-->
<!--        -->
<!--    </div>-->
<!--</div>-->
<!--<div class="flex flex-col">-->
<!--    -->
<!--</div>-->

<!--<div class="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">-->
<!--   -->
<!--</div>-->





<!--</main>-->
<!--    -->
<!--  </div>-->
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import TheBackSidebar from '@/components/TheBackSidebar.vue';
// import TheBackContent from '@/components/TheBackContent.vue';

export default defineComponent({
 name: 'UserCenterView',
 components: {
   TheBackSidebar,
  //  TheBackContent
 },
 
});

</script>