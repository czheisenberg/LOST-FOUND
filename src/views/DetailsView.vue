<template>
<TheNavbar/>
    <div class="container mx-auto mt-4 flex flex-wrap justify-center dark:bg-gray-800">
    <!-- 详细信息 start -->
     <div v-for="(dI, index) in detailsInformation" :key="index" class="detailsInformation w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4" >
        <div class="space-x-1 space-y-4">
            <!-- 个人基本信息 -->
            <div class="flex items-center justify-between dark:text-white">
                <div class="flex items-center">
                    <img :src=dI.profileImage alt="" class="w-10 h-10 rounded-full mr-2">
                    <span>{{ dI.username  }}</span>
                </div>
                <div>
                    <span v-if="dI.stuffState" class="bg-green-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-300 dark:text-blue-800 ms-3">捡到物品</span>
                    <span v-else class="bg-red-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-300 dark:text-blue-800 ms-3">丢失物品</span>
                </div>
            </div>
            <div class="text-sm dark:text-white">
                <span><b>发布日期:</b> {{ dI.dateTime }}</span>
            </div>

            <!-- 图片 start -->
            <div class="flex items-center justify-center">
                <img :src=dI.goodsImg alt="">
            </div>
            <!-- 图片 end-->

            <!-- message start -->
            
            <div class="dark:text-white">
                <div class="font-bold">详细描述:
                    <div class="font-thin px-3">{{ dI.message }}</div>
                </div>
                <div class="font-bold">物品位置:
                    <div class="font-thin px-3">{{ dI.address }}</div>
                </div>
                <div class="font-bold">姓名:
                    <div class="font-thin px-3">{{ dI.name }}</div>
                </div>

                <div class="dark:text-white flex items-center justify-between">
                <span><b>联系电话: </b>{{ dI.phoneNumber }}</span>
                <!-- <div>
                    <span v-if="dI.stuffState" class="bg-green-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-300 dark:text-blue-800 ms-3">捡到物品</span>
                    <span v-else class="bg-red-300 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-300 dark:text-blue-800 ms-3">丢失物品</span>
                </div> -->
            </div>
                
            </div>
        
            
            <!-- message end -->

            <!-- 线索留言板 start -->
            <div class="">
                <textarea class="w-full p-2 border rounded-lg" rows="4" placeholder="写下你的留言"></textarea>
                <button class="bg-blue-500 text-xs text-white px-4 py-2 rounded-lg mt-2">提交</button>
            </div>
            <!-- 线索留言板 end -->
           

        </div>
        
     </div>
     <!-- 详细信息 end -->

    </div>
<TheFooter/>
    
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import { useRoute } from 'vue-router';
import TheFooter from '@/components/TheFooter.vue';
import TheNavbar from '@/components/TheNavbar.vue';

export default defineComponent({
    name: 'DetailsView',
    components: {
    TheNavbar,
    TheFooter
  },
    setup(){
        
        const route = useRoute();
        const id = route.params.id;     // 从首页能获取到ID之后则将此ID带入后端查询，从后端调出所有的信息。
        // console.log("假设后端: ", "http://127.0.0.1:8888/list/" + id)

         // 模拟从数据库获取数据
        const detailsInformation = ref([
        {
            id: 2,
            profileImage : ref("https://avatars.githubusercontent.com/u/52897817?v=4"),
            username : ref('Alice'),
            name: ref('李某'),
            dateTime : ref('6/14/2024 10:34PM'),
            goods: ref('手表'),
            goodsImg : ref('https://flowbite.com/docs/images/products/apple-watch.png'),
            message : ref('求助🙏我于今日在操场丢失一块Apple Watch🥲'),
            address: ref('操场'),
            phoneNumber : ref('13545678999'),
            stuffState : true,
            detailsUrl: "#",
            
        },
        // 更多示例数据...
        ]);
        

    


    return{
        id,
        detailsInformation
        
    }
    }
})

</script>