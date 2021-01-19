<template>
  <!-- 点击事件  在父组件中点击的时候是点击子组件 需要告诉父组件被点击了 然后父组件做对应的操作 -->
  <div
    :class="{ primary: type == 'primary', success: type == 'success' }"
    class="btn"
    @click="handlerclick"
  >
    <!-- 匿名插槽  在父组件中使用子组件时便签之间的内容会被传到子组件里面 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
  },
  methods: {
    handlerclick(e) {
      // 如果不发出事件 点击的只是子组件  所有子组件要发出事件告诉父组件自己被点击了 父组件去做点击的处理
      console.log(2);
      // 由于父组件是点击事件  子组件发出的事件也要是点击事件  发出事件后父组件中的cilck不再是内置的click  而是子组件发出的点击事件
      this.$emit('click',e)
    },
  },
};
</script>

<style lang="less" scoped>
.btn {
  width: 316 * 100vw/360;
  height: 40px;
  border-radius: 20px;
  line-height: 40px;
  background-color: #ccc;
  color: #333;
  text-align: center;
  margin: 0 auto;
}
.success {
  background-color: green;
  color: #fff;
}
.primary {
  background-color: red;
  color: #fff;
}
</style>