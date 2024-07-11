<template>
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <!-- <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"> -->
          LOST & FOUND
      </a>
      <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 class="mb-1 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              重置密码
          </h2>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" @submit.prevent="handleSubmit">
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">你的邮箱</label>
                  <input type="email" v-model="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
              </div>
              <div class="space-y-1">
                  <label for="verificationCode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">验证码</label>
                  <input type="text" v-model="verificationCode" name="verificationCode" id="verificationCode" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
<!--                  <button type="button" @click="requesetVerificationCode" class=" text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">获取验证码</button>-->
                    <button
                        type="button"
                        @click="requesetVerificationCode"
                        :disabled="isCountingDown"
                        class="text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      {{ isCountingDown ? `${minutes}:${seconds < 10 ? '0' : ''}${seconds}` : '获取验证码' }}
                    </button>
                <p class="text-green-500"> {{ msg1 }}</p>
              </div>
              <div>
                  <label for="newPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">新密码</label>
                  <input type="confirm-password" v-model="newPassword" name="newPassword" id="newPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              </div>
              <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="newsletter" aria-describedby="newsletter" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required>
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="newsletter" class="font-light text-gray-500 dark:text-gray-300">我接受 <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">这些条款和条件</a></label>
                  </div>
              </div>
              <button type="submit" class="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">重置密码</button>
              <p class="text-green-500"> {{ msg2 }}</p>
          </form>
      </div>
  </div>
</section>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import axios from '@/axios'
import {useRouter} from "vue-router";

const router = useRouter()

const email = ref('')
// 从邮箱中返回的验证码
const verificationCode = ref('');
const newPassword = ref('')

const isCountingDown = ref(false);
const totalSeconds = ref(0);
const minutes = ref(0);
const seconds = ref(0);
let interval = null;

const msg1 = ref('')
const msg2 = ref('')

// 获取验证码
const requesetVerificationCode = async() =>{
  const updateData = new FormData()
  updateData.append('email', email.value)

  try{
    const responseData = await axios.post("/password/reset", updateData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
    msg1.value = "验证码已发送，请查看你的邮箱!"
    // console.log("验证码已发送，请查看你的邮箱!")
    // 开始倒计时
    startCountdown();
  }catch(error){
    // console.log("验证码发送失败，检查输入的邮箱有效性")
    msg1.value = "验证码发送失败，检查输入的邮箱有效性 或者你的账户不存在!"
  }
}
// 两分钟倒计时
const startCountdown = () => {
  totalSeconds.value = 120; // 2 minutes
  isCountingDown.value = true;
  interval = setInterval(() => {
    if (totalSeconds.value > 0) {
      totalSeconds.value--;
      minutes.value = Math.floor(totalSeconds.value / 60);
      seconds.value = totalSeconds.value % 60;
    } else {
      clearInterval(interval);
      isCountingDown.value = false;
    }
  }, 1000);
};

const handleSubmit = async () =>{
  // console.log("email: ", email.value)
  // console.log("输入的验证码: ", verificationCode.value)
  // console.log("输入的新密码: ", newPassword.value)
  // 开始重置密码

  const updateData = new FormData()
  updateData.append("email", email.value )
  updateData.append("token", verificationCode.value)
  updateData.append("password", newPassword.value)

  try{
    const responseData = await axios.post("/password/savePassword", updateData, {
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
    // console.log("密码重置成功!", responseData.data)
    msg2.value = "密码重置成功! 3秒后跳转登录页面!"
    setTimeout(()=>{
      router.push("/login")
    },3000)
  }catch(error){
    // console.log("发生错误: ", error)
    msg2.value = "密码重置失败! 请稍后尝试或联系管理员更改密码!"
  }
}


</script>