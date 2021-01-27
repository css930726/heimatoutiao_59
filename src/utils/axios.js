// 封装axios请求
import axios from 'axios'
// 设置基准路径
// axios.default.baseURL = 'http://127.0.0.1:3000'
axios.defaults.baseURL = 'http://localhost:3000'



// 添加请求拦截器  所有请求都会经过拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config);
  // 1.拿到token
  let token = localStorage.getItem('token')
  // 2.判断 如果要去的页面需要token就拿到存储的token就验证 如果没有重定向到登录页
  if (token) {
    config.headers.Authorization = token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 暴露axios
export default axios