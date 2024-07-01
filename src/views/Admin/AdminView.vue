<template>
  <TheAdminBackSidebar/>
  <div id="main-content" class="relative  h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
    <main>
      <div
          class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <div class="w-full mb-1 mt-10">
          <div class="mb-4">
            <nav class="flex mb-5" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                <li class="inline-flex items-center">
                  <a href="#"
                     class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                    <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    管理员后台
                  </a>
                </li>
                <!-- <li>
                  <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">E-commerce</a>
                  </div>
                </li> -->
                <li>
                  <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">欢迎</span>
                  </div>
                </li>
              </ol>
            </nav>

            <div class="grid grid-cols-4 gap-4">

              <div
                  class="col-span-4 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-start items-center px-4 pt-4 space-x-5">
                  <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="avatar" alt="avatar"/>
                  <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">管理员</h5>
                  <span class="text-sm text-gray-500 dark:text-gray-400">您好 admin，愿你天黑有灯，下雨有伞。</span>
                </div>
              </div>


              <!--      api 统计图表      -->
              <div class="row-span-2 max-h-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
                <div class="flex justify-between">
                  <div>
                    <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">{{
                        apiTotalVis
                      }}</h5>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">七天API访问量</p>
                  </div>
                  <div v-if="apiTendency"
                       class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                    {{ apiIncrRate }} %
                    <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 10 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 13V1m0 0L1 5m4-4 4 4"/>
                    </svg>
                  </div>

                  <div v-if="!apiTendency"
                       class="flex items-center px-2.5 py-0.5 text-base font-semibold text-red-500 dark:text-red-500 text-center">
                    {{ apiIncrRate }} %
                    <svg class="w-6 h-6 text-red-500 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 19V5m0 14-4-4m4 4 4-4"/>
                    </svg>
                  </div>

                </div>
                <div id="api_chart"/>
                <div
                    class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                  <div class="flex justify-between items-center pt-5">
                    <!-- Button -->
                    <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="lastDaysdropdown"
                        data-dropdown-placement="bottom"
                        class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                        type="button">
                      Last 7 days
                      <svg class="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                           viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 1 4 4 4-4"/>
                      </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="lastDaysdropdown"
                         class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                          <a href="#"
                             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                        </li>
                        <li>
                          <a href="#"
                             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                        </li>
                        <li>
                          <a href="#"
                             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last
                            7
                            days</a>
                        </li>
                        <li>
                          <a href="#"
                             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last
                            30 days</a>
                        </li>
                        <li>
                          <a href="#"
                             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last
                            90 days</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!--     登录统计图表         -->
              <div class="row-span-2 max-h-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
                <div class="flex justify-between">
                  <div>
                    <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">{{
                        loginTotalVis
                      }}</h5>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">七天登录量</p>
                  </div>
                  <div v-if="loginTendency"
                       class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                    {{ loginIncrRate }} %
                    <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 10 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 13V1m0 0L1 5m4-4 4 4"/>
                    </svg>
                  </div>

                  <div v-if="!loginTendency"
                       class="flex items-center px-2.5 py-0.5 text-base font-semibold text-red-500 dark:text-red-500 text-center">
                    {{ loginIncrRate }} %
                    <svg class="w-6 h-6 text-red-500 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 19V5m0 14-4-4m4 4 4-4"/>
                    </svg>
                  </div>

                </div>
                <div id="login_chart"/>
                <div
                    class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                  <div class="flex justify-between items-center pt-5">
                    <!-- Button -->
                    <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="lastDaysdropdown"
                        data-dropdown-placement="bottom"
                        class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                        type="button">
                      Last 7 days
                      <svg class="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                           viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 1 4 4 4-4"/>
                      </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="lastDaysdropdown"
                         class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                          <a href="#"
                             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                        </li>
                        <li>
                          <a href="#"
                             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                        </li>
                        <li>
                          <a href="#"
                             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last
                            7
                            days</a>
                        </li>
                        <li>
                          <a href="#"
                             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last
                            30 days</a>
                        </li>
                        <li>
                          <a href="#"
                             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last
                            90 days</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>


              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <svg class="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                </svg>
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">用户数量</h5>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">当前系统已注册用户数量: 100</p>
              </div>

              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <svg class="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                </svg>
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">管理员数量</h5>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">当前系统已注册管理员数量: 100</p>
              </div>


            </div>


          </div>

        </div>
      </div>

      <div
          class="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
      </div>


    </main>

  </div>
</template>

<script lang="ts">
function getDeviceType(): string {
  const userAgent = navigator.userAgent;

  if (/Mobi|Android/i.test(userAgent)) {
    return "Mobile";
  } else if (/iPad|Tablet/i.test(userAgent)) {
    return "Tablet";
  } else {
    return "Desktop";
  }
}

import {defineComponent, onMounted, Ref, ref} from 'vue';
import TheAdminBackSidebar from '@/components/TheAdminBackSidebar.vue';
import axios from "@/axios";
// import TheBackContent from '@/components/TheBackContent.vue';
import ApexCharts from 'apexcharts'

export default defineComponent({
  name: 'AdminView',
  components: {
    TheAdminBackSidebar,
    //  TheBackContent
  },
  setup() {
    const account = ref('')
    // 头像
    const avatar = ref('')

    const dateArray: Date[] = []
    const apiVisitArray = ref([0, 0, 0, 0, 0, 0, 0])
    const loginVisitArray = ref([0, 0, 0, 0, 0, 0, 0])

    // 七天访问量
    const apiTotalVis = ref(0);
    // 增长率
    const apiIncrRate = ref(0.0)
    // 减少还是增长
    const apiTendency = ref(false)

    // 七天访问量
    const loginTotalVis = ref(0);
    // 增长率
    const loginIncrRate = ref(0.0)
    // 减少还是增长
    const loginTendency = ref(false)

    // 用户数量
    const userCount = ref(0)

    const apiOptions = {
      chart: {
        // height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        },
      },
      series: [
        {
          name: "API Count",
          data: [0],
          color: "#1A56DB",
        },
      ],
      xaxis: {
        categories: ['前六天', '前五天', '前四天', '前三天', '前两天', '前天', '今天'],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    }
    const loginOptions = {
      chart: {
        // height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        },
      },
      series: [
        {
          name: "Login Count",
          data: [0],
          color: "#1A56DB",
        },
      ],
      xaxis: {
        categories: ['前六天', '前五天', '前四天', '前三天', '前两天', '前天', '今天'],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    }

    let apiChart: ApexCharts;
    let loginChart: ApexCharts;

    const fetchData = async () => {
      try {
        const response = await axios.get('/userinfo/selfQuery');
        account.value = response.data.data.account
        avatar.value = response.data.data.profileimage
        console.log(account.value)
        console.log(response.data)
      } catch (err) {
        console.log("err:", err)
      }

      const queryWeekCount = async (api: string, array: Ref) => {
        const dateArray: Date[] = [];
        const currentDate = new Date();

        // 填充日期数组
        for (let i = 0; i < 7; i++) {
          const date = new Date(currentDate);
          date.setDate(currentDate.getDate() - i);
          dateArray.push(date);
        }

        for (let i = 0; i < 7; i++) {
          const params: { beginTime: Date, endTime?: Date } = {beginTime: dateArray[i]};

          if (i > 0) {
            params.endTime = dateArray[i - 1];
          }

          const response = await axios.get(api, {params});
          array.value[i] = response.data.data;
        }
      }


      try {

        await queryWeekCount('/log/apiCount', apiVisitArray)
        await queryWeekCount('/log/loginCount', loginVisitArray)

        await apiChart.updateSeries([{
          name: "API Count",
          data: apiVisitArray.value.reverse(),
          color: "#1A56DB",
        }])


        // api次数更新
        apiTotalVis.value = 0;

        apiVisitArray.value.forEach((item) => {
          apiTotalVis.value += item
        })

        let rate = (apiVisitArray.value[6] - apiVisitArray.value[5]) / (apiVisitArray.value[5] == 0 ? 1 : apiVisitArray.value[1]);

        // 减少
        if (rate < 0) {
          apiIncrRate.value = -rate
          apiTendency.value = false
        } else {
          apiIncrRate.value = rate
          apiTendency.value = true
        }


        // 登录次数更新
        await loginChart.updateSeries([{
          name: "Login Count",
          data: loginVisitArray.value.reverse(),
          color: "#1A56DB",
        }])


        loginTotalVis.value = 0;

        loginVisitArray.value.forEach((item) => {
          loginTotalVis.value += item
        })

        rate = (loginVisitArray.value[6] - loginVisitArray.value[5]) / (loginVisitArray.value[5] == 0 ? 1 : loginVisitArray.value[1])

        // 减少
        if (rate < 0) {
          loginIncrRate.value = -rate
          loginTendency.value = false
        } else {
          loginIncrRate.value = rate
          loginTendency.value = true
        }


        console.log(apiVisitArray.value)
        console.log(loginVisitArray.value)
      } catch (err) {
        console.log("err:", err)
      }


      try {
        // 用户数量查询
        const response = await axios.get('/userManage/query')
        userCount.value = response.data.data.total
      } catch (err) {
        console.log("err:", err)
      }


    }

    onMounted(() => {
      fetchData();
      apiChart = new ApexCharts(document.querySelector("#api_chart"), apiOptions);
      loginChart = new ApexCharts(document.querySelector("#login_chart"), loginOptions);
      apiChart.render();
      loginChart.render();
    })

    return {
      account,
      apiTotalVis,
      apiIncrRate,
      apiTendency,
      loginTotalVis,
      loginIncrRate,
      loginTendency,
      userCount,
      avatar
    }
  }

});
</script>
