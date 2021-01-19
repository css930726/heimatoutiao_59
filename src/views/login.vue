<template>
  <div id="app">
    <div class="container">
      <div class="close"><span class="iconfont iconicon-test"></span></div>
      <div class="logo"><span class="iconfont iconnew"></span></div>
      <div class="inputs">
        <input placeholder="请输入手机号" class="input" />
        <input placeholder="密码" class="input" type="password" />
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class="">去注册</a>
      </p>
      <!-- 使用按钮组件 -->
      <!-- 监听子组件发出的点击事件  由于做点击 所有子组件发出的cilick点击事件  此时的click不再是内置点击事件 而是子组件发出的click事件  子组件的优先级跟高 会覆盖内置的 -->
      <mybutton type="primary" @click="loginclick">登录</mybutton>
    </div>
  </div>
</template>

<script>
// 1.引入封装的按钮组件
import mybutton from "../components/mybutton.vue";
export default {
  components: {
    //  2. 注册组件
    mybutton,
  },
  methods: {
    loginclick() {
      console.log(1);
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>