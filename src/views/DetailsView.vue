<template>
    <div class="container mx-auto mt-4 flex flex-wrap dark:bg-gray-800">
        details
    {{ id}}
    </div>
    
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import { useRoute } from 'vue-router';


export default defineComponent({
    name: 'DetailsView',
    setup(){
        
        const route = useRoute();
        const id = route.params.id;     // 从首页能获取到ID之后则将此ID带入后端查询，从后端调出所有的信息。
        console.log("假设后端: ", "http://127.0.0.1:8888/list/" + id)
        return{
            id,
        }
    }
})

</script>