import 'flowbite';
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'
import {createPinia} from "pinia";
import VueParticles from 'vue-particles';
import notification from '@/notification'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultImage = require('@/assets/default.svg');

// 添加全局图像错误处理事件
document.addEventListener('error', (event: Event) => {
    const target = event.target as HTMLImageElement;
    if (target.tagName.toLowerCase() === 'img') {
        target.src = defaultImage;
    }
}, true);
const app = createApp(App);


app.config.errorHandler = (err, vm, info) => {
    // 处理错误
    console.error(`Error: ${(err as Error).toString()}\nInfo: ${info}`);
};


// createApp(App).use(router).mount('#app')
const pinia = createPinia();
app.use(VueParticles)
app.use(pinia);
app.use(router);
app.use(ElementPlus, {
    locale: zhCn
});
app.use(UndrawUi)
app.config.globalProperties.$notify = notification; // 将通知模块挂载到全局属性
app.config.compilerOptions.isCustomElement = (tag) => tag === 'vue-advanced-chat' || tag === 'emoji-picker'
app.mount('#app');
