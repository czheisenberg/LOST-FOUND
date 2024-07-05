import 'flowbite';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from "pinia";


// createApp(App).use(router).mount('#app')
const pinia=createPinia();
const app=createApp(App);
app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.mount('#app');