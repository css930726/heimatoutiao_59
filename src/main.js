import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 1.引入路由
import router from './router/index.js'

new Vue({
  // 2.注入路由
  router,
  render: h => h(App),
}).$mount('#app')
