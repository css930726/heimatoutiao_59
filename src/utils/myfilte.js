// 引入moment组件封装过滤器
import moment from 'moment'
// 单一暴露  传入数据和过滤内容
export const datafoarm = function (data, spe = '/') {
  return moment(data).format(`YYYY${spe}MM${spe}DD HH:mm:ss`)
}