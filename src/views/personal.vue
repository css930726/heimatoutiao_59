<template>
  <div class="personal">
    <router-link to="/edit_profile">
      <div class="profile">
        <!-- 图片数据需要改造 返回来的只是后面的路径 需要加上本地服务器地址  一般是改造后再赋值给data里面的元素接收 -->
        <!-- 改造的图片地址需要根据是否有图片动态绑定 -->
        <img :src="current.head_img" alt />
        <div class="profile-center">
          <div class="name">
            <!-- 获取的个人数据解析后插入对应的位置 -->
            <span
              :class="{
                iconfont: true,
                iconxingbienan: current.gender == 1,
                iconxingbienv: current.gender == 0,
              }"
            ></span
            >{{ current.nickname }}
          </div>
          <!-- 获取的个人数据解析后插入对应的位置 -->
          <div class="time">{{ current.create_date }}</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
    </router-link>
    <hmcell title="我的关注" desc="关注的用户"></hmcell>
    <hmcell title="我的跟帖" desc="跟帖/回复"></hmcell>
    <hmcell title="我的收藏" desc="文章/视频"></hmcell>
    <hmcell title="设置"></hmcell>
    <hmbutton></hmbutton>
  </div>
</template>

<script>
// 1.引入封装按钮
import hmbutton from "../components/mybutton.vue";
// 2.引入封装单元格
import hmcell from "../components/mycell.vue";
// 引入封装的个人中心请求
import { userinfo } from "../apis/user.js";
// 引入封装的axios拿到里面的服务器地址 后期返回图片没有服务器地址 需要拼接后再赋值接收
import axios from "../utils/axios.js";
export default {
  data() {
    return {
      current: {},
    };
  },
  components: {
    // 注册组件
    hmbutton,
    hmcell,
  },
  // 标记异步函数
  async mounted() {
    // 拿到登录后对应登录账户的ID
    console.log(this.$route.params.id);
    // 传入ID发送请求
    let res = await userinfo(this.$route.params.id);
    console.log(res);
    if (res.data.message == "获取成功") {
      // 改造图片数据  返回来的只有后面的路径 需要加上服务器地址   服务器地址在封装的axios中 因此需要引入封装的axios   拿到地址
      // 还需要改造时间数据  时间数需要使用过滤器来使用
      // res.data.data.head_img =
      console.dir(axios.defaults.baseURL); //服务器地址
      // 判断如果原本有图片就使用自己的图片
      if (res.data.data.head_img) {
        res.data.data.head_img =
          axios.defaults.baseURL + res.data.data.head_img;
      }
      // 如果没有要给一个默认图片地址
      else {
        res.data.data.head_img =
          "http://127.0.0.1:3000/uploads/images/default.png";
      }
      // 将得到的数据赋值给data里面用一个对象来接收
      this.current = res.data.data;
    }
  },
};
</script>
<style lang="less" scoped>
.personal {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
}
a {
  color: #666;
}
.profile {
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px #ddd solid;

  img {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 50%;
  }

  .profile-center {
    flex: 1;
    padding: 0 10px;
  }

  .name {
    span {
      color: #75b9eb;
    }
  }

  .time {
    color: #666;
    font-size: 14px;
    margin-top: 5px;
  }
}

.btn {
  margin: 20px auto;
  background-color: #f00;
}
</style>