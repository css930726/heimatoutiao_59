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
          msg="请输入正确的手机号"
        ></myinput>

        <!-- v-modal的实质
        1.为元素的value赋值 
        2.监听子组件发出input事件 -->
        <myinput v-model="user.password" placeholder="请输入密码"> </myinput>
      </div>
      <p class="tips">
        没有账号？
        <a href="#/register" class="">去注册</a>
      </p>
      <!-- 使用按钮组件 -->
      <!-- 监听子组件发出的点击事件  由于做点击 所有子组件发出的cilick点击事件  此时的click不再是内置点击事件 而是子组件发出的click事件  子组件的优先级跟高 会覆盖内置的 -->
      <mybutton type="primary" @click="login">登录</mybutton>
    </div>
  </div>
</template>

<script>
// 1.引入封装的按钮组件
import mybutton from "../components/mybutton.vue";
// 2.引入封装的输入框按钮
import myinput from "../components/myinput.vue";
// 解构进入登录axios
import { userlogin } from "../apis/user.js";
export default {
  data() {
    return {
      user: {
        username: "13800138000",
        password: "123",
      },
    };
  },
  components: {
    //  2. 注册组件
    mybutton,
    myinput,
  },
  methods: {
    // async标记异步函数
    async login(e) {
      // 验证收集数据的正确性  如果正确发送请求  如果失败提示用户密码或者名字错误
      if (
        /^1[3456789]\d{9}$/.test(this.user.username) &&
        /^.{3,}$/.test(this.user.password)
      ) {
        try {
          // 等待异步函数返回数据 然后接收
          let res = await userlogin(this.user);
          console.log(res);
          // 根据返回数据判断  如果是200说明账号密码正确  进行登录
          if (res.data.statusCode == 200) {
            this.$toast(res.data.message);
            // 验证成功将返回的token存储到缓存中;
            localStorage.setItem("token", res.data.data.token);
          }
        } catch (err) {
          // 捕获错误
          this.$toast("用户名或者密码错误"); //这个错误是正则验证通过后发生的错误
        }
      } else {
        // 如果拿到的收据不能通过正则表示格式错误  这个提示是正则验证不过时发出的
        this.$toast("用户名密码错误");
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