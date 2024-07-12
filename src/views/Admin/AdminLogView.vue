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
                <li>
                  <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">系统设置</a>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">日志管理</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">日志管理</h1>
          </div>
          <div class="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
            <div class="flex items-center mb-4 sm:mb-0">
              <div class="sm:pr-3">
                <label for="products-search" class="sr-only">Search</label>
                <div class="relative w-48 mt-1 sm:w-64 xl:w-96">
                  <input type="text" name="email"  v-model="queryContent" id="products-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="搜索">
                </div>
              </div>
<!--                <input v-model="queryContent" type="text" class="rounded-md h-8" id="postContent" placeholder="请输入要查询的方法">-->
              <div class="flex items-center w-full sm:justify-end">
                <div class="flex items-center pl-2 space-x-5 ">
                    <div class=" mt-1" >
                      <el-date-picker
                        v-model="value"
                        type="daterange"
                        start-placeholder="Start date"
                        end-placeholder="End date"
                        style="height: 41px"
                      />
                    </div>
                  <div class="mt-1">
                    <!-- 查询按钮 -->
<!--                    <div class="query">-->
<!--                      <button class="queryButton2">查询</button>-->
<!--                      <button class="queryButton" @click="query">QUERY</button>-->
<!--                    </div>-->
                    <button @click="query" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-blue-500 dark:focus:ring-primary-800" type="button" id="updateProductButton">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                      查询
                    </button>
                  </div>



                </div>
              </div>
            </div>
<!--            <a href="/admin/goods/add" id="createProductButton" class="text-white bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-primary-800" type="button" >-->
<!--              新增信息-->
<!--            </a>-->
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden shadow">
              <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                <thead class="bg-gray-100 dark:bg-gray-700">
<!--                <tr>-->
<!--                  <th scope="col" class="p-4">-->
<!--                    <div class="flex items-center">-->
<!--                      <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">-->
<!--                      <label for="checkbox-all" class="sr-only">checkbox</label>-->
<!--                    </div>-->
<!--                  </th>-->
<!--                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">-->
<!--                    方法ID-->
<!--                  </th>-->
<!--                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">-->
<!--                    用户ID-->
<!--                  </th>-->
<!--                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">-->
<!--                    接口路径-->
<!--                  </th>-->
<!--                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">-->
<!--                    接口方法-->
<!--                  </th>-->
<!--                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">-->
<!--                    IP-->
<!--                  </th>-->
<!--                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">-->
<!--                    访问时间-->
<!--                  </th>-->
<!--                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">-->
<!--                    耗时-->
<!--                  </th>-->
<!--                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">-->
<!--                    状态-->
<!--                  </th>-->
<!--                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">-->
<!--                    操作-->
<!--                  </th>-->
<!--                </tr>-->
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

<!--                <tr v-for="card in paginatedCards" :key="card.apiLogId" class="hover:bg-gray-100 dark:hover:bg-gray-700">-->
<!--                  <td class="w-4 p-4">-->
<!--                    <div class="flex items-center">-->
<!--                      <input id="checkbox-194556" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">-->
<!--                      <label for="checkbox-194556" class="sr-only">checkbox</label>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">-->
<!--                    <div class="text-base font-semibold text-gray-900 dark:text-white">{{ card.apiLogId }}</div>-->
<!--                  </td>-->
<!--                  <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">-->
<!--                    <div class="text-base font-semibold text-gray-900 dark:text-white">{{ card.userId }}</div>-->
<!--                  </td>-->

<!--                  <td class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">{{ card.uri }}</td>-->
<!--                  <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ card.method }}</td>-->
<!--                  <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ card.ip }}</td>-->
<!--                  <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ card.time }}</td>-->
<!--                  <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ card.taketime }}ms</td>-->
<!--                  <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ card.state }}</td>-->

<!--                  <td class="p-4 space-x-2 whitespace-nowrap">-->

<!--                    <button-->
<!--                        type="button"-->
<!--                        @click="confirmDelete(card.apiLogId)"-->
<!--                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"-->
<!--                    >-->
<!--                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--                        <path-->
<!--                            fill-rule="evenodd"-->
<!--                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"-->
<!--                            clip-rule="evenodd"-->
<!--                        ></path>-->
<!--                      </svg>-->
<!--                      删除-->
<!--                    </button>-->




<!--                  </td>-->
<!--                </tr>-->

                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <!-- 表单 -->
                  <el-table :data="tableData" class="dark:bg-gray-800 bg-green-500"  >
                    <el-table-column width="50px">
                          <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                          <label for="checkbox-all" class="sr-only">checkbox</label>
                    </el-table-column>
                    <el-table-column prop="apiLogId" label="方法ID" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400" />
                    <el-table-column prop="userId" label="用户ID " class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"  />
                    <el-table-column prop="uri" label="接口路径" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400" />
                    <el-table-column prop="method" label="接口方法" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400" />
                    <el-table-column prop="ip" label=" IP" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400" />
                    <el-table-column prop="time" label="访问时间" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400" />
                    <el-table-column prop="taketime" label=" 耗时" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400" />
                    <el-table-column prop="state" label="状态" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400" />
                    <el-table-column  label="操作" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400" >

                      <button type="button"  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg> 删除 </button>
                    </el-table-column>

                  </el-table>
                  <!-- 中间弹出删除确认框 -->
                  <div class="mid" :style="{display: none}" style="position: absolute;z-index: 10;top: 0px; background-color: rgb(255, 255, 255,0.5);width: 100%;height: 100%;">
                    <div class="ConfirmBox" style="position: absolute;top: 200px;left: 350px; width: 400px;   height: 200px;   background-color: #e1e4e9;border-radius: 6px;">
                      <span style="display: block;position: relative; margin-top: 70px;margin-left: 130px;">请选择删除的用户id:</span>
                      <input type="text" style="position: absolute;  width: 50px;height: 20px;left: 250px;top: 73px; " v-model="idUser">
                      <button class="sure" @click="clickSure" style="margin-left: 70px;margin-top: 70px;width: 50px;">确认</button>
                      <button class="cancel" @click="clickCancel" style="  margin-left: 155px;width: 50px;">取消</button>
                    </div>
                  </div>

                </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

<!--      <div class="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">-->
<!--        <div class="flex items-center mb-4 sm:mb-0">-->
<!--          <a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">-->
<!--            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>-->
<!--          </a>-->
<!--          <a href="#" class="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">-->
<!--            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>-->
<!--          </a>-->
<!--          <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> <span class="font-semibold text-gray-900 dark:text-white"></span> <span class="font-semibold text-gray-900 dark:text-white"></span></span>-->
<!--        </div>-->
<!--        <div class="flex items-center space-x-3">-->
<!--          <button @click="prevPage" :disabled="currentPage === 1"  class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-blue-500 dark:focus:ring-primary-800">-->
<!--            <svg class="w-5 h-5 mr-1 -ml-1"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>-->
<!--            上一页-->
<!--          </button>-->
<!--          <button @click="nextPage" :disabled="currentPage === totalPages" class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-blue-500 dark:focus:ring-primary-800">-->
<!--            下一页-->
<!--            <svg class="w-5 h-5 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->

    </main>

  </div>
</template>
<script lang="ts" setup>
import { defineComponent,ref,computed, onMounted } from 'vue';
import axios from '../../axios'
import TheAdminBackSidebar from '@/components/TheAdminBackSidebar.vue';
import {  useRouter } from 'vue-router';
import {useAdmininform} from "@/store/admininform";




const cards = ref([])

const router = useRouter()

// 获取当前登录用户的userId
const userId = ref('')

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


interface logData{
  apiLogId: string,
  userId: string,
  uri: string,
  method: string,
  ip: string,
  time: string,
  taketime: string,
  state: string,
}
// 获取日志记录
// const logsFetchData = async ()=>{
//   const response = await axios.post("/log/apiList")
//   console.log("--------", response.data.data.list)
//   cards.value = response.data.data.list.map((item: logData)=>({
//     apiLogId: item.apiLogId,
//     userId: item.userId,
//     uri: item.uri,
//     method: item.method,
//     ip: item.ip,
//     time: item.time,
//     taketime: item.taketime,
//     state: item.state
//   }))
// }
// 单个删除
// 单个删除
const confirmDelete = (id: number) => {
  const userConfirmed = confirm('确定要删除吗？删除后将无法恢复！')
  if (userConfirmed) {
    // deleteProduct(id)
    alert('已删除！该项已被删除。')
  }
}
const deleteProduct = async (id: number) => {
  try {

    const deleteResponse = await axios.delete(`/userManage/delete?userId=${id}`)
    if(deleteResponse.data.message === "ok"){
      router.go(0)
    }
  } catch (e) {
    console.log("del err:", e)
  }
}

const store=useAdmininform();
const tableData = ref(store.logDate); //接收返回的数据
/* 时间 */
const value = ref([])
const queryContent=ref(null);//与输入框进行双向绑定获取输入值

// 进入页面初始化数据。

const fetchData = async() =>{
  let {data}= await axios.post("/log/apiList",{
    method:queryContent.value,
    beginTime:null,
    endTime:null
  },{});

  tableData.value=data.data.list;
}

const query=async ()=>{

  if(value.value[0]==null&&value.value[1]==null){
    let {data}= await axios.post("/log/apiList",{
      method:queryContent.value,
      beginTime:null,
      endTime:null
    },{});

    console.log("返回的数据:",data.data.list);

    tableData.value=data.data.list;
  }else{


    let begin=new Date( value.value[0]);
    let end=new Date(value.value[1]);

    /* 查询按钮 */
    let {data}= await axios.post("/log/apiList",{
      method:queryContent.value,
      beginTime:begin,
      endTime:end
    },{});
    console.log("queryContent: ", queryContent.value)
    console.log("-----返回的数据:",data.data.list);

    tableData.value=data.data.list;
  }
}



/* 删除 */
let none=ref("none");
//删除按钮
let buttonDelete=()=>{
  none.value="block"
}
//点击取消删除
function  clickCancel(){
  none.value="none";
}
//点击确定删除
let idUser=ref<number>();
const clickSure= async()=>{
  //向后端发送请求，删除数据
  let {data}=await axios.get("/log/deleteByidApi",{
    params:{
      idUser:idUser.value
    }
  });
  console.log(data.data);

  tableData.value=data.data
  //隐藏盒子
  none.value="none";

}

console.log("--------------------+", queryContent.value)

onMounted(()=>{

  // fetchData()
});


</script>

<style scoped>


/* 查询按钮 */
.query{
  position: relative;

  width: 200px;
  transform-style: preserve-3d;
  transition: all 1s;
  width: 80px;
  height: 30px;
}

.queryButton2{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 80px;
  height: 30px;
  border-radius: 6px;
  background-color: green;
  transform: translateZ(15px);
}
.queryButton{
  position: absolute;
  top: 0px;
  left: 0px;
  transform: rotateX(90deg);
  transform: rotateX(90deg) translateZ(15px);
  width: 80px;
  height: 30px;
  border-radius: 6px;
  background-color: yellow;
}
.query:hover{
  transform: rotateX(-89deg);
}

</style>