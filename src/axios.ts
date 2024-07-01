// src/axios.ts
import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8088',
    timeout: 1000,
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

export default instance;
