<template>
<TheAdminBackSidebar/>

</template>

<script lang="ts">


import { defineComponent } from 'vue';
import TheAdminBackSidebar from '@/components/TheAdminBackSidebar.vue';
// import TheBackContent from '@/components/TheBackContent.vue';

export default defineComponent({
 name: 'AdminView',
 components: {
   TheAdminBackSidebar,
  //  TheBackContent
 },

});
</script>