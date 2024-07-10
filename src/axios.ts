// src/axios.ts
import axios from 'axios';
import router from "@/router";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8088',
    timeout: 1000 * 30,
    // headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use(config => {
    const tokenName = 'lftoken'; // 可以根据需要动态获取 tokenName
    const token = localStorage.getItem(tokenName);
    if (token) {
        config.headers[tokenName] = token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});


// use(两个参数)
instance.interceptors.response.use(res => {

    if (res.data.code == 402) {
        // 清除失效Token
        localStorage.removeItem('lftoken');
        // 跳转到登录页面
        router.push('/login')
    } else if (res.data.code == 403) { // 权限异常错误
        router.push('/permissionError')
    }
    return res
}, err => {
    // 未登录错误
    if (err.response.data.code == 402) {
        // 清除失效Token
        localStorage.removeItem('lftoken');
        // 跳转到登录页面
        router.push('/login')
    } else if (err.response.data.code == 403) { // 权限异常错误
        router.push('/permissionError')
    }
    return Promise.reject(err)
});


export default instance;
