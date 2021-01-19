<template>
  <!-- 文本框输入时其实是在子组件中输入 父组件并不知道 因此子组件告诉父组件输入了 父组件在做处理 -->
  <!-- 父组件:value="user.username  子组件中只有带有value的标签才可以省略不写   -->
  <!-- @blur="handlerblur"输入框失去焦点后再进行验证 -->
  <input
    :class="{ success: flag, error: !flag }"
    @input="handlerinput"
    class="myinput"
    @blur="handlerblur"
  />
</template>

<script>
export default {
  data() {
    return {
      flag: true,
    };
  },
  props: {
    // 接收父组件传递的正则验证
    rules: {
      type: RegExp,
    },
    msg: {
      type: String,
      default: "用户输入数据不合法",
    },
  },
  // 如果不使用props接收父元素的值会直接传给组件的根元素input
  methods: {
    handlerinput(e) {
      // console.log("你改变了吗");
      // console.log(e.target.value);
      // 根据用户输入的进行正则验证   如果根据动态改变下边框颜色
      if (this.rules) {
        //真 说明传递了规则
        // 将改变后的值进行验证  test(是正则验证方法)
        if (this.rules.test(e.target.value)) {
          // console.log("ok");
          this.flag = true;
        } else {
          console.log("no");
          this.flag = false;
          // this.$toast.fail({
          //   position: "top",
          //   duration: 3000,
          //   message: "输入错误",
          // });
        }
      }
      // 没有传递正则
      else {
        this.$toast("没有正则输入错误");
      }
      this.$emit("input", e.target.value);
    },
    // 处理输入框失去焦点的方法
    handlerblur(v) {
      if (this.rules) {
        //  失去焦点后再次进行验证 如果不通过 给出提示

        if (!this.rules.test(v.target.value)) {
          this.$toast.fail({
            position: "top",
            duration: 3000,
            message: this.msg,
          });
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.myinput {
  width: 310 * 100vw/360;
  height: 40px;
  outline: none;
  line-height: 40px;
  border: none;
  border-bottom: 3px solid #000;
}
.success {
  border-bottom-color: green;
}
.error {
  border-bottom-color: red;
}
</style>