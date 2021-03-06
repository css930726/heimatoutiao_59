// 引入封装的axios
import axios from '../utils/axios.js'

// 登录请求
// 单一暴露  后续还有很多请求
export const userlogin = function (data) {
  // 返回axios登录请求
  return axios({
    url: '/login',
    method: 'post',
    data
  })
}
// 注册请求
export const userregister = function (data) {
  return axios({
    url: '/register',
    method: 'post',
    data
  })
}
// 个人中心
export const userinfo = function (id) {
  return axios({
    url: `user/${id}`,
    // 传入token验证
    // headers: { Authorization: localStorage.getItem('token') }
  })
}