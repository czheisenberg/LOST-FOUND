<template>
  <div class="bg-white dark:bg-gray-800">
    <vue-particles color="#cca4e3"
                   :particleOpacity="0.6"
                   :particlesNumber="100"
                   shapeType="polygon"
                   :particleSize="4"
                   linesColor="#dedede"
                   :linesWidth="1"
                   :lineLinked="true"
                   :lineOpacity="0.5"
                   :linesDistance="150"
                   :moveSpeed="6"
                   :hoverEffect="true"
                   hoverMode="bubble"
                   :clickEffect="true"
                   clickMode="remove"
                   class="particles-bg"></vue-particles>
    <!-- <TheNavbar /> -->
    <main class="min-h-screen">

      <router-view />
    </main>
    <!-- <TheFooter /> -->
  </div>
</template>

<style scoped>
.particles-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none; /* 使粒子背景不阻挡点击事件 */
}
</style>

<script lang="ts">


import { defineComponent ,onMounted} from 'vue';

import {initFlowbite} from "flowbite";
// import TheFooter from '@/components/TheFooter.vue';
// import TheNavbar from '@/components/TheNavbar.vue';



export default defineComponent({
  name: 'app',
  components: {
    // TheNavbar,
    // TheFooter
  },

  setup(){
    onMounted(()=>{
      initFlowbite();
    })
  }



});
</script>
