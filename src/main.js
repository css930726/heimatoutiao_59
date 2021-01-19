import Vue from 'vue'
import App from './App.vue'


// 引入vant组件库里面的toast提示   全局引入将挂载到vue的prototype上  后期使用this.$toast使用

import { Toast } from 'vant';

Vue.use(Toast);
Vue.config.productionTip = false
// 1.引入路由
import router from './router/index.js'

new Vue({
  // 2.注入路由
  router,
  render: h => h(App),
}).$mount('#app')
