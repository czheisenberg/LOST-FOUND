// src/axios.ts
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 1000,
    // headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use(config => {
    const tokenName = 'lftoken'; // 可以根据需要动态获取 tokenName
    const token = localStorage.getItem(tokenName);
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default instance;
