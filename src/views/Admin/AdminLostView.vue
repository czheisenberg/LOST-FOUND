<template>
  <TheAdminBackSidebar/>
  <div id="main-content" class="relative  h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
    <main>
      <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <div class="w-full mb-1 mt-10">
          <div class="mb-4">
            <nav class="flex mb-5" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                <li class="inline-flex items-center">
                  <a href="/admin" class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                    <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    管理员后台
                  </a>
                </li>
                <!-- <li>
                  <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">E-commerce</a>
                  </div>
                </li> -->
                <li>
                  <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">失物管理</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">失物管理</h1>
          </div>
          <div class="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
            <div class="flex items-center mb-4 sm:mb-0">
<!--              <form class="sm:pr-3" action="#" method="GET">-->
<!--                <label for="products-search" class="sr-only">Search</label>-->
<!--                <div class="relative w-48 mt-1 sm:w-64 xl:w-96">-->
<!--                  <input type="text" name="email" id="products-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="搜索">-->
<!--                </div>-->
<!--              </form>-->
<!--              <div class="flex items-center w-full sm:justify-end">-->
<!--                <div class="flex pl-2 space-x-1">-->
<!--                  <a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">-->
<!--                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>-->
<!--                  </a>-->
<!--                  <a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">-->
<!--                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>-->
<!--                  </a>-->
<!--                  <a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">-->
<!--                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>-->
<!--                  </a>-->
<!--                  <a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">-->
<!--                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>-->
<!--                  </a>-->
<!--                </div>-->
<!--              </div>-->
            </div>
            <a href="/admin/goods/add" id="createProductButton" class="text-white bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-primary-800" type="button" >
              新增信息
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden shadow">
              <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                <thead class="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th scope="col" class="p-4">
<!--                    <div class="flex items-center">-->
<!--                      <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">-->
<!--                      <label for="checkbox-all" class="sr-only">checkbox</label>-->
<!--                    </div>-->
                  </th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                    所属用户
                  </th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                    物品名称
                  </th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                    缩略图
                  </th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                    简要描述
                  </th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                    时间
                  </th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                    联系方式
                  </th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                    状态
                  </th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                    操作
                  </th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

                <tr v-for="card in paginatedCards" :key="card.id" class="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td class="w-4 p-4">
<!--                    <div class="flex items-center">-->
<!--                      <input id="checkbox-194556" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">-->
<!--                      <label for="checkbox-194556" class="sr-only">checkbox</label>-->
<!--                    </div>-->
                  </td>
                  <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <div class="text-base font-semibold text-gray-900 dark:text-white">{{ card.username }}</div>
                    <!-- <div class="text-sm font-normal text-gray-500 dark:text-gray-400">Html templates</div> -->
                  </td>
                  <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <div class="text-base font-semibold text-gray-900 dark:text-white">{{ card.goods }}</div>
                    <!-- <div class="text-sm font-normal text-gray-500 dark:text-gray-400">Html templates</div> -->
                  </td>
                  <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <a :href=card.goodsImg target="_blank">
                      <img class="h-auto max-w-xs w-24" :src=card.goodsImg alt="image description">
                    </a>
                  </td>
                  <td class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">{{ card.message }}</td>
                  <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ card.dateTime }}</td>
                  <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ card.phoneNumber }}</td>
                  <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="mt-2.5 mb-5">
                      <span v-if="card.stuffState" class="bg-green-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-300 dark:text-blue-800 ms-3">捡到物品</span>
                      <span v-else class="bg-red-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-300 dark:text-blue-800 ms-3">丢失物品</span>
                    </div>
                  </td>

                  <td class="p-4 space-x-2 whitespace-nowrap">

                    <router-link :to="{name:'adminGoodsEditor',params:{id: card.id}}"  type="button" id="updateProductButton"   class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-blue-500 dark:focus:ring-primary-800">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                      编辑
                    </router-link>

                    <!--                                <button type="button"   class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">-->
                    <!--                                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>-->
                    <!--                                    删除-->
                    <!--                                </button>-->


                    <button
                        type="button"
                        @click="confirmDelete(card.id)"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                    >
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                        ></path>
                      </svg>
                      删除
                    </button>




                  </td>
                </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center mb-4 sm:mb-0">
<!--          <a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">-->
<!--            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>-->
<!--          </a>-->
<!--          <a href="#" class="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">-->
<!--            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>-->
<!--          </a>-->
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> <span class="font-semibold text-gray-900 dark:text-white"></span> <span class="font-semibold text-gray-900 dark:text-white"></span></span>
        </div>
        <div class="flex items-center space-x-3">
          <button @click="prevPage" :disabled="currentPage === 1"  class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-blue-500 dark:focus:ring-primary-800">
            <svg class="w-5 h-5 mr-1 -ml-1"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            上一页
          </button>
          <button @click="nextPage" :disabled="currentPage === totalPages" class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-blue-500 dark:focus:ring-primary-800">
            下一页
            <svg class="w-5 h-5 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
      </div>

    </main>

  </div>
</template>
<script lang="ts">
import { defineComponent,ref,computed, onMounted } from 'vue';
import axios from '../../axios'
import TheAdminBackSidebar from '@/components/TheAdminBackSidebar.vue';
import {  useRouter } from 'vue-router';



interface BackendData {
  goodsId: number;
  userInfo: {
    profileimage: string;
    username: string;
  };
  datetime: string;
  goodsimg: string;
  goods: string;
  message: string;
  phonenumber: string;
  stuffstate: boolean;
}



export default defineComponent({
  name: 'UserGoodsView',
  components: {
    TheAdminBackSidebar,
    // TheBackContent
  },
  setup(){
    // const cards = ref(
    //   [
    //     {
    //       // 以下这些信息从数据库中读取
    //         id: 1,
    //         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
    //         username : ref('Alice'),
    //         name: ref('李某'),
    //         dateTime : ref('6/14/2024 10:34PM'),
    //         goods: ref('手表'),
    //         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
    //         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
    //         phoneNumber : ref('13545678999'),
    //         address: ref('操场'),
    //
    //       // 物品状态: flase 代表:丢失物品, true 代表发现物品
    //         stuffState : false,
    //       // 详细信息
    //       detailsUrl: "#",
    //
    //     },
    //     {
    //         id: 2,
    //         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
    //         username : ref('Alice'),
    //         name: ref('李某'),
    //         dateTime : ref('6/14/2024 10:34PM'),
    //         goods: ref('手表'),
    //         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
    //         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
    //         phoneNumber : ref('13545678999'),
    //         address: ref('操场'),
    //         stuffState : true,
    //         detailsUrl: "#"
    //     },
    //     {
    //         id: 3,
    //         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
    //         username : ref('Alice'),
    //         name: ref('李某'),
    //         dateTime : ref('6/14/2024 10:34PM'),
    //         goods: ref('手表'),
    //         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
    //         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
    //         phoneNumber : ref('13545678999'),
    //         address: ref('操场'),
    //         stuffState : true,
    //         detailsUrl: "#"
    //     },
    //     {
    //         id: 4,
    //         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
    //         username : ref('Alice'),
    //         name: ref('李某'),
    //         dateTime : ref('6/14/2024 10:34PM'),
    //         goods: ref('手表'),
    //         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
    //         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
    //         phoneNumber : ref('13545678999'),
    //         address: ref('操场'),
    //         stuffState : true,
    //         detailsUrl: "#"
    //     },
    //     {
    //         id: 5,
    //         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
    //         username : ref('Alice'),
    //         name: ref('李某'),
    //         dateTime : ref('6/14/2024 10:34PM'),
    //         goods: ref('手表'),
    //         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
    //         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
    //         phoneNumber : ref('13545678999'),
    //         address: ref('操场'),
    //         stuffState : true,
    //         detailsUrl: "#"
    //     },
    //     {
    //         id: 6,
    //         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
    //         username : ref('Alice'),
    //         name: ref('李某'),
    //         dateTime : ref('6/14/2024 10:34PM'),
    //         goods: ref('手表'),
    //         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
    //         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
    //         phoneNumber : ref('13545678999'),
    //         address: ref('操场'),
    //         stuffState : false,
    //         detailsUrl: "#"
    //     },
    //     {
    //         id: 7,
    //         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
    //         username : ref('Alice'),
    //         name: ref('李某'),
    //         dateTime : ref('6/14/2024 10:34PM'),
    //         goods: ref('手表'),
    //         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
    //         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
    //         phoneNumber : ref('13545678999'),
    //         address: ref('操场'),
    //         stuffState : false,
    //         detailsUrl: "#"
    //     },
    //     {
    //         id: 8,
    //         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
    //         username : ref('Alice'),
    //         name: ref('李某'),
    //         dateTime : ref('6/14/2024 10:34PM'),
    //         goods: ref('手表'),
    //         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
    //         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
    //         phoneNumber : ref('13545678999'),
    //         address: ref('操场'),
    //         stuffState : true,
    //         detailsUrl: "#"
    //     },
    //     {
    //         id: 9,
    //         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
    //         username : ref('Alice'),
    //         name: ref('李某'),
    //         dateTime : ref('6/14/2024 10:34PM'),
    //         goods: ref('手表'),
    //         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
    //         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
    //         phoneNumber : ref('13545678999'),
    //         address: ref('操场'),
    //         stuffState : true,
    //         detailsUrl: "#"
    //     },
    //     {
    //         id: 10,
    //         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
    //         username : ref('Alice'),
    //         name: ref('李某'),
    //         dateTime : ref('6/14/2024 10:34PM'),
    //         goods: ref('手表'),
    //         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
    //         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
    //         phoneNumber : ref('13545678999'),
    //         address: ref('操场'),
    //         stuffState : true,
    //         detailsUrl: "#"
    //     },
    //     {
    //         id: 11,
    //         profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
    //         username : ref('Alice'),
    //         name: ref('李某'),
    //         dateTime : ref('6/14/2024 10:34PM'),
    //         goods: ref('钥匙'),
    //         goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
    //         message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
    //         phoneNumber : ref('13545678999'),
    //         address: ref('操场'),
    //         stuffState : true,
    //         detailsUrl: "#"
    //     },
    //   ]
    // )
    const cards = ref([])

    const router = useRouter()

    // 获取当前登录用户的userId
    const userId = ref('')

    // 获取数据
    const fetchData = async()=>{
      try{
        const userIdResponse = await axios.get('/userinfo/selfQuery');
        userId.value = userIdResponse.data.data.userId

        axios.get(`/goods/list`)
            .then(response => {
              // 假设后端返回的数据是 response.data.data.list
              // console.log("userId:",userId.value,"data:",response.data.data)
              cards.value = response.data.data.list.map((item: BackendData) => ({

                id: item.goodsId,
                profileImage: item.userInfo.profileimage,
                username: item.userInfo.username,
                goods: item.goods,
                dateTime: item.datetime,
                goodsImg: item.goodsimg,
                message: item.message,
                phoneNumber: item.phonenumber,
                stuffState: item.stuffstate,

              }));
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        // console.log(cards)
      }catch(err){
        console.log("err: ",err)
      }
    }
    console.log("cards: ", cards)
    // 当前页码
    const currentPage = ref(1);
    const itemsPerPage = 10; // 每页显示的卡片数量

    // 总页数
    const totalPages = computed(() => {
      return Math.ceil(cards.value.length / itemsPerPage);
    });

    const paginatedCards = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return cards.value.slice(start, end);
    });

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };


    // 单个删除
    const confirmDelete = (id: number) => {
      const userConfirmed = confirm('确定要删除吗？删除后将无法恢复！')
      if (userConfirmed) {
        deleteProduct(id)
        alert('已删除！该项已被删除。')
      }
    }

    const deleteProduct = async (id: number) => {
      try {

        const deleteResponse = await axios.delete(`/goods/delete?goodsId=${id}`)
        if(deleteResponse.data.message === "ok"){
          router.go(0)
        }
      } catch (e) {
        console.log("del err:", e)
      }
    }

    onMounted(()=>{
      // currentUserId(),
      fetchData()

    })

    return{
      cards,
      currentPage,
      totalPages,
      paginatedCards,
      prevPage,
      nextPage,
      // handleFileChange,
      // formData,
      // handleSubmit,
      // msg
      confirmDelete,


    }
  }

});
</script>