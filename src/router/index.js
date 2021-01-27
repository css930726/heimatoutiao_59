// 1.引入Vue
import Vue from 'vue'
// 2.引入路由
import VueRouter from 'vue-router'
// 3.明确使用路由
Vue.use(VueRouter)
// 4.创建路由实例
const router = new VueRouter({
  routes: [
    // 登录
    {
      // 组件名字
      name: 'login',
      // 组件路径
      path: '/login',
      // 按需引入组件
      component: () => import('../views/login.vue')
    }
    // 注册
    , {
      name: 'register',
      path: '/register',
      component: () => import('../views/register.vue')
    },
    // 个人中心
    {
      name: 'personal',
      path: '/personal/:id',
      component: () => import('../views/personal.vue')
    },
    // 编辑个人中心页
    {
      name: 'edituser',
      path: '/edituser/:id',
      component: () => import('../views/edit_profile.vue')
    }
  ]
})
// 添加导航守卫  如果要跳转的页面需要token的话验证是否带有token 如果验证成功就跳转 如果没有 或者验证失败就不跳转
router.beforeEach((to, from, next) => {
  // ...
  console.log(to, from);
  // 如果要去的资源路径包含/personal  拿到token进行验证
  if (to.path.indexOf('/personal') !== -1) {
    // 取出登录后存储的token
    let token = localStorage.getItem('token')
    // 如果有token
    if (token) {
      next()
    }
    // 如果没有token
    else {
      // 跳转登录页   next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址
      next({ name: 'login' })
    }
  }
  next()
})
// 4.暴露路由
export default router