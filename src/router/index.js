// 1.引入Vue
import Vue from 'vue'
// 2.引入路由
import VueRouter from 'vue-router'
// 3.明确使用路由
Vue.use(VueRouter)
// 4.创建路由实例
const router = new VueRouter({
  routes: [
    {
      // 组件名字
      name: 'login',
      // 组件路径
      path: '/login',
      // 按需引入组件
      component: () => import('../views/login.vue')
    }
  ]
})

// 4.暴露路由
export default router