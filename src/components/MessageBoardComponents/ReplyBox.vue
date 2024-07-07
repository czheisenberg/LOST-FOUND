<template>
<!--  回复列表容器组件-->
  <button class="pt-4 pb-10 text-blue-600" :class="[showCommentBox ? 'pb-2': 'pb-10']" @click="showCommentBox = !showCommentBox">回复</button>
  <CommentBox v-if="showCommentBox" class="mb-4" @submit="emit('submit',$event);showCommentBox = false" />
</template>

<script lang="ts" setup>
// 回复列表容器组件

import {defineEmits, ref} from "vue";
import CommentBox from "@/components/MessageBoardComponents/CommentBox.vue";

const showCommentBox = ref(false)
const emit = defineEmits(["submit"]);
</script>