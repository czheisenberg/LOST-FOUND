<template>
   <TheBackSidebar/>
   <TheBackContent/>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import TheBackSidebar from '@/components/TheBackSidebar.vue';
import TheBackContent from '@/components/TheBackContent.vue';

export default defineComponent({
 name: 'UserCenterView',
 components: {
   TheBackSidebar,
   TheBackContent
 },
 
});

</script>