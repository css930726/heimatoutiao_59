<template>
  <div id="app">
    <div class="container">
      <div class="close"><span class="iconfont iconicon-test"></span></div>
      <div class="logo"><span class="iconfont iconnew"></span></div>
      <div class="inputs">
        <!-- 使用封装的输入框 -->
        <!-- :value="user.username  子组件中只有带有value的标签才可以省略 -->
        <!-- 当子组件中发出input事件后父组件就可以直接使用v-modal了 -->
        <!-- <myinput
          :value="users.username"
          @input="handleinput"
          placeholder="请输入手机号"
        ></myinput> -->
        <myinput
          :rules="/^1[3456789]\d{9}$/"
          v-model="user.username"
          placeholder="请输入手机号"
        ></myinput>

        <!-- v-modal的实质
        1.为元素的value赋值 
        2.监听子组件发出input事件 -->
        <myinput v-model="user.password" placeholder="请输入密码"> </myinput>
        <myinput v-model="user.nickname" placeholder="请输入昵称"> </myinput>
      </div>
      <p class="tips">
        已有账号
        <a href="#/login" class="">去登录</a>
      </p>
      <!-- 使用按钮组件 -->
      <!-- 监听子组件发出的点击事件  由于做点击 所有子组件发出的cilick点击事件  此时的click不再是内置点击事件 而是子组件发出的click事件  子组件的优先级跟高 会覆盖内置的 -->
      <mybutton type="success" @click="register">注册</mybutton>
    </div>
  </div>
</template>

<script>
// 1.引入封装的按钮组件
import mybutton from "../components/mybutton.vue";
// 2.引入封装的输入框按钮
import myinput from "../components/myinput.vue";
// 解构进入登录axios
import { userregister } from "../apis/user.js";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        nickname: "",
      },
    };
  },
  components: {
    //  2. 注册组件
    mybutton,
    myinput,
  },
  methods: {
    // 标记异步函数
    async register(e) {
      let res = await userregister(this.user);
      console.log(res);
      // 如果请求结果中的信息是注册成功  那就就说明注册成功 就需要跳转到登录页面进行登录
      if (res.data.message == "注册成功") {
        this.$router.push({ name: "login" });
      } //如果没有注册成功就说明输入的信息不合法
      else {
        this.$toast("注册失败");
      }
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