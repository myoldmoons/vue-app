import axios from 'axios'
import Vue from 'vue'
// axios 全局配置
axios.defaults.baseURL = 'https://api.example.com'; 
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截器
axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// 响应拦截器
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

/**
 * axios 请求方法
 * @param {*} url 请求地址
 * @param {*} method 请求方式
 * @param {*} params 请求参数
 */
const http=(url,method,params)=>{
    return new Promise((resolve,reject)=>{
        if(method=='get'){
            axios.get(url,{params:params}).then(res=>{
                resolve(res);
            }).catch(error=>{
                reject(error)
            })
        }
        if(method=='post'){
            axios.post(url,params).then(res=>{
                resolve(res)
            }).catch(error=>{
                reject(error)
            })
        }
    })
}
export default http;