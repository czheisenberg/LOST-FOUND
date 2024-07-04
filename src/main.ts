import 'flowbite';
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

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

app.use(router).mount('#app')
