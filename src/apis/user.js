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