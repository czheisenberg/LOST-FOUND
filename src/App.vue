<template>
  
  <div class="bg-white dark:bg-gray-800">
    <!-- <TheNavbar /> -->
    <main class="min-h-screen">
      <router-view />
    </main>
    <!-- <TheFooter /> -->
  </div>
</template>

<style>

</style>

<script lang="ts">

import { defineComponent } from 'vue';

// import TheFooter from '@/components/TheFooter.vue';
// import TheNavbar from '@/components/TheNavbar.vue';

export default defineComponent({
  name: 'app',
  components: {
    // TheNavbar,
    // TheFooter
  },
  
});
</script>
