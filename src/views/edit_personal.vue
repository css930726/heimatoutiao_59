<template>
  <div>
    <!-- 编辑用户信息 -->
    <!-- 使用组件 -->
    <myheader title="编辑用户信息">
      <!-- $router.go(-1)回退一步 -->
      <span class="iconfont iconjiantou2" slot="left" @click="$router.go(-1)"></span>
      <!-- 指定名字的值插在指定插槽中 -->
      <span class="iconfont iconwode" slot="right"></span>
    </myheader>
  </div>
</template>

<script>
// 1.引入封装的头部栏
import myheader from '../components/myheader.vue'
export default {
  // 2.注册组件
  components: {
    myheader
  }
}
</script>

<style>
</style>