<template>
  <div class="flex flex-col h-full w-full">
    <TheNavbar/>
    <div class="flex content-center justify-center items-center h-full">
        <div v-if="loadSuc" id="app">
          <TUIKit v-if="userId.length != 0" :SDKAppID="1600044444" :userID="userId" :conversationID="clickId"/>
          <TUICallKit class="callkit-container" :allowedMinimized="true" :allowedFullScreen="false"/>
        </div>
      <div v-if="!loadSuc" role="status" class="mt-64">
        <svg aria-hidden="true" class="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {genTestUserSig, TUIConversation, TUIKit} from '@/TUIKit';
import {TUICallKit} from '@tencentcloud/call-uikit-vue';
import {onBeforeMount, onMounted, ref} from "vue";
import axios from "@/axios";
import TheNavbar from "@/components/TheNavbar.vue";
import {useRoute} from "vue-router";
import {
  TUIConversationService,
} from '@tencentcloud/chat-uikit-engine';
import {enableSampleTaskStatus} from "@/TUIKit/utils/enableSampleTaskStatus";

const userId = ref('')
const loadSuc = ref(false)

const clickId = ref()

const route = useRoute()

onBeforeMount(async () => {


  try {
    let response = await axios.get('/userinfo/selfQuery');
    const userID = response.data.data.userId
    const username = response.data.data.username

    const userSig = genTestUserSig({
      SDKAppID: 1600044444,
      secretKey: "eca447b02f9c451f16e375b681636348a61815456a4ec90e7a47b2efa1f92bb8",
      userID: 'administrator'
    }).userSig


    // 判断账户是否注册
    response = await axios.post('https://console.tim.qq.com/v4/im_open_login_svc/account_check?sdkappid=' + 1600044444 + '&identifier=administrator&usersig=' + userSig + '&random=2949672&contenttype=json'
        , {
          "CheckItem": [
            {
              "UserID": userID
            }
          ]
        }, {
          withCredentials: false
        })

    // 注册账号
    if (response.data.ResultItem[0].AccountStatus != "Imported") {
      response = await axios.post('https://console.tim.qq.com/v4/im_open_login_svc/account_import?sdkappid=' + 1600044444 + '&identifier=administrator&usersig=' + userSig + '&random=9999&contenttype=json'
          , {
            "UserID": userID,
            "Nick": username,
            "FaceUrl": ""
          }, {
            withCredentials: false
          })
      if (response.data.ErrorCode == 0) {
        console.log("账号注册成功")
      } else {
        console.log("账号注册失败")
      }
    }

    userId.value = userID

    clickId.value = "C2C" + route.query.userId
    loadSuc.value = true

  } catch (error) {
    console.error('获取用户信息失败:', error);
    loadSuc.value = true
  }

})

// onMounted(()=> {
//   // 跳转传参方式
//   if (route.query.userId) {
//     // 建立对话
//     TUIConversationService.switchConversation(`C2C${route.query.userId}`).then(() => {
//       console.warn('打开会话成功');
//     })
//         .catch((err: any) => {
//           console.warn('打开会话失败', err.code, err.msg);
//         })
//   }
// })

</script>
<style lang="scss">

</style>
