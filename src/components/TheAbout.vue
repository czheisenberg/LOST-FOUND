<template>
  <TheNavbar/>
  <div class="container mx-auto mt-4 flex flex-wrap dark:bg-gray-800 justify-center items-center">
    <div class="text-center">
      <div class="flex items-center justify-center mb-4">
        <p class="font-bold">{{ webTitle }}</p>
      </div>
      <div class="flex items-center justify-center">
        <p class="text-gray-700 dark:text-white">{{ webDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import {ref, onMounted} from 'vue'
import axios from '@/axios'

const webTitle = ref('')
const webDescription = ref('')

const FetchData = async ()=>{
  const responseData = await axios.get("/webSetting/list")
  console.log(responseData.data)
  webTitle.value = responseData.data.data[0].webtitle
  webDescription.value = responseData.data.data[0].webdescription
}
onMounted(()=>{
  FetchData();
})

</script>
