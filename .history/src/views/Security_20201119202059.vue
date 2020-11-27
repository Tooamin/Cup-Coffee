<template>
  <div class="security">
    <Bgbox :title="toptitle">
      <Contentbox>
        <div class="item-box">
          <van-cell title="修改密码" is-link />
          <van-cell title="注销账号" is-link />
        </div>
        <div class="outlogin">
          <van-button color="#4a6fe7">退出登录</van-button>
        </div>
      </Contentbox>
    </Bgbox>
    <van-popup is-link position="bottom" closeable v-model="isOpen">
      <div class="form-box">
        <div class="form-title">修改密码</div>
        <van-form>
          <van-field
            v-model="password.oldPassword"
            :type="isPassword ? 'password' : 'text'"
            name="旧密码"
            label="旧密码"
            placeholder="旧密码(首字符必须为字母)"
            :right-icon="isPassword ? 'closed-eye' : 'eye-o'"
            autocomplete="off"
            @click-right-icon="toggleType"
          />

          <van-field
            v-model="password.newPassword"
            :type="isPassword ? 'password' : 'text'"
            name="新密码"
            label="新密码"
            placeholder="新密码(首字符必须为字母)"
            :right-icon="isPassword ? 'closed-eye' : 'eye-o'"
            autocomplete="off"
            @click-right-icon="toggleType"
          />

          <div class="commit-btn">
            <van-button round block color="#0C34BA" @click="commit"
              >提交</van-button
            >
          </div>
        </van-form>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Contentbox from "../components/Contentbox.vue";
import Bgbox from "../components/Bgbox.vue";
export default {
  name: "Security",
  data() {
    return {
      toptitle: "安全中心",
      isOpen:false,
      isPassword:false,
      password: {
        oldPassword: "",
        newPassword: "",
      },
    };
  },
  created() {},
  methods: {},
  components: {
    Bgbox,
    Contentbox,
  },
};
</script>

<style lang="less" scoped>
.security {
  .outlogin {
    margin-top: 300px;
    /deep/ .van-button {
      width: 260px;
      margin-left: 50%;
      transform: translate(-50%);
      border-radius: 10px;
    }
  }
}
</style>