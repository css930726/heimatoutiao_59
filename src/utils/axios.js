// 封装axios请求
import axios from 'axios'
// 设置基准路径
axios.default.baseURL = 'http://127.0.0.1:3000'

// 暴露axios
export default axios