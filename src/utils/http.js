import axios from 'axios'
import qs from "qs"
import Vue from "vue"
import { resolve } from 'path';
Vue.prototype.qs = qs
    // axios 全局配置
axios.defaults.baseURL = 'http://192.168.0.122:8098';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截器
axios.interceptors.request.use(function(config) {
    return config;
}, function(error) {
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    return Promise.reject(error);
});

class Http {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(url, { params: params })
                .then(res => {
                    resolve(res)
                })
                .catch(error => {
                    reject(error)
                })
        })
    };
    post(url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(res => {
                    resolve(res)
                })
                .catch(error => {
                    reject(error)
                })
        })
    };
    put(url, params) {
        return new Promise((resolve, reject) => {
            axios.put(url, params)
                .then(res => {
                    resolve(res)
                })
                .catch(error => {
                    reject(error)
                })
        })
    };
    del() {
        return new Promise((resolve, reject) => {
            axios.delete(url, { params: params })
                .then(res => {
                    resolve(res)
                })
                .catch(error => {
                    reject(error)
                })
        })
    };
}
export default new Http();