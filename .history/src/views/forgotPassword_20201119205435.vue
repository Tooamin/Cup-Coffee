<template>
  <div class="forgotpassword">
    <van-nav-bar left-text="返回" right-text="先逛一逛" @click-right="goBack()">
      <template #left>
        <div class="nav-left">
          <div class="logo">
            <img src="../assets/images/home_active.png" alt="" />
          </div>
          <div class="logo-title">Luckin Coffee</div>
        </div>
      </template>
    </van-nav-bar>

    <div class="userlogin-box">
      <div class="userlogin-title">
        <div class="welcome-title">忘记密码!</div>
        <div class="sub-title">Forgot password!</div>
      </div>

      <van-form>
        <van-field
          v-model="userInfo.phone"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          autocomplete="off"
        />

        <van-field
          v-model="userInfo.password"
          :type="isRegPassword ? 'password' : 'text'"
          name="密码"
          label="密码"
          placeholder="密码必须为字母开头"
          :right-icon="isRegPassword ? 'closed-eye' : 'eye-o'"
          autocomplete="off"
          @click-right-icon="toggleRegPasswordType"
        />
        <van-field
          v-model="userInfo.email"
          name="邮箱"
          label="邮箱"
          placeholder="密码必须为字母开头"
          autocomplete="off"
          @click-right-icon="toggleRegPasswordType"
        />
        <div class="forgot">
          <span @click="goState('Login')">已有账号，立即登录</span>
        </div>
        <div class="commit-btn">
          <van-button round block color="#0C34BA"> 登录 </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import '../assets/less/forgotpassword.less'
export default {
  name: "ForgotPassword",
  data() {
    return {
      userInfo: {
        phone: "",
        password: "",
        email: "",
        code: "",
      },
      isRegPassword: true,
      isShow: false,
    };
  },
  methods: {
      goState(name) {
        this.$router.push({name});
      },
    toggleRegPasswordType() {
      this.isRegisterPassword = !this.isRegisterPassword;
    },
    toggleRegBox() {
      this.isShow = true;
    },
  },
};
</script>

<style lang="less" scoped>
</style>