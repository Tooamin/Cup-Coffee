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

      <van-form v-show="!isNext">
        <van-field
          v-model="userInfo.email"
          name="邮箱"
          label="邮箱"
          placeholder="邮箱"
          autocomplete="off"
        />

        <van-field
          v-model="userInfo.code"
          name="验证码"
          label="验证码"
          placeholder="验证码(6个字符)"
          autocomplete="off"
          maxlength="6"
        >
          <template #button>
            <van-button
              size="small"
              color="#0C34BA"
              :disabled="isSend"
              @click="getValidCode"
              >{{ text }}</van-button
            >
          </template>
        </van-field>
        <div class="forgot">
          <span @click="goState('Login')">已有账号，立即登录</span>
        </div>
        <div class="commit-btn">
          <van-button round block color="#0C34BA" @click="next">
            下一步
          </van-button>
        </div>
      </van-form>

      <van-form v-show="isNext">
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
          @click-right-icon="toggleRegsiterPasswordType"
        />
        <div class="forgot">
          <span @click="goState('Login')">已有账号，立即登录</span>
        </div>

        <div class="commit-btn">
          <van-button round block color="#0C34BA" @click="commit">
            提交
          </van-button>
        </div>
        <div class="commit-btn">
          <van-button round block type="default" @click="back()">
            返回
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import "../assets/less/forgotpassword.less";
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
      isNext: false,
      text: "发送验证码",
      isRegPassword: true,
      isShow: false,
      isSend: false,
    };
  },
  methods: {
    goState(name) {
      this.$router.push({ name });
    },
    toggleRegPasswordType() {
      this.isRegPassword = !this.isRegPassword;
    },
    back() {
      this.isNext = false;
    },
    // 下一步
    next() {
      let o = {
        email: {
          value: this.userInfo.email,
          errorMsg: "邮箱格式不正确",
          reg: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        },
        code: {
          value: this.userInfo.code,
          errorMsg: "验证码格式不正确",
          reg: /^[A-Za-z\d]{6}$/,
        },
      };

      let isPass = validForm.valid(o);
      if (isPass) {
        //发起获取验证码请求
        this.$toast.loading({
          message: "加载中...",
          forbidClick: true,
          duration: 0,
        });

        this.axios({
            method: 'POST',
            url: '/checkValidCode',
            data: {
              appkey: this.appKey,
              validCode: this.userInfo.code
            }

          }).then(result => {
            this.$toast.clear();
            this.$toast(result.data.msg);
            if (result.data.code == 'K001') {
              this.isNext = true;
            }
          }).catch(err => {
            this.$toast.clear();
          })  

      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>