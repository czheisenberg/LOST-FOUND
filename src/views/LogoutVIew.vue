
<template>
  logout
</template>

<script  lang="ts">
import { defineComponent ,onMounted} from 'vue';
import axios from '../axios'
import {  useRouter } from 'vue-router';

export default  defineComponent({
  name: 'LogoutView',

  setup(){
    const router = useRouter(); // 获取路由对象
    const fetchData = async()=>{
      try{
        const response = await axios.post('/login/doLoginOut');
        localStorage.removeItem("lftoken")
        router.push("/")
      }catch(err){
        console.log("err: ", err)
      }
    }

    onMounted(()=>{
      fetchData()
    })
  }

})
</script>
