<template>
  <div class="login">
    <van-nav-bar left-text="返回" right-text="先逛一逛" @click-right="goBack('Home')">
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
        <div class="welcome-title">欢迎回来!</div>
        <div class="sub-title">Please login to your accounts</div>
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
        <div class="forgot" @click="goBack('ForgotPassword')">
          <span>忘记密码?</span>
        </div>

        <div class="commit-btn">
          <van-button round block color="#0C34BA" @click="login">
            登录
          </van-button>
        </div>
        <div class="commit-btn">
          <van-button round block type="default" @click="toggleRegBox">
            注册
          </van-button>
        </div>
      </van-form>
    </div>

    <van-popup
      class="register-box"
      v-model="isShow"
      position="bottom"
      closeable
    >
      <div class="reg-title">注册</div>
      <van-form>
        <van-field
          v-model="userRegInfo.phone"
          name="手机号"
          label="手机号"
          placeholder="11位手机号"
          autocomplete="off"
        />

        <van-field
          v-model="userRegInfo.password"
          :type="isRegPassword ? 'password' : 'text'"
          name="密码"
          label="密码"
          placeholder="密码必须为字母开头"
          :right-icon="isRegPassword ? 'closed-eye' : 'eye-o'"
          autocomplete="off"
          @click-right-icon="toggleRegPasswordType"
        />

        <van-field
          v-model="userRegInfo.nickName"
          name="昵称"
          label="昵称"
          placeholder="昵称"
          autocomplete="off"
        />

        <div class="commit-btn reg-btn">
          <van-button round block color="#0C34BA" @click="register">
            注册
          </van-button>
        </div>
      </van-form>
    </van-popup>

  </div>
</template>

<script>
import "../assets/less/login.less";
import { validForm } from "../assets/js/validForm";

export default {
  name: "Login",
  data() {
    return {
      //登录信息
      userInfo: {
        phone: "",
        password: "",
      },

      //注册信息
      userRegInfo: {
        phone: "",
        password: "",
        nickName: "",
      },

      //是否显示注册框
      isShow: false,

      //切换注册密码框的类型
      isRegPassword: true,
    };
  },

  methods: {
    //切换注册框
    toggleRegBox() {
      this.isShow = true;
    },

    //切换注册密码框的类型
    toggleRegPasswordType() {
      this.isRegPassword = !this.isRegPassword;
    },

    //注册
    register() {
      //构造表单验证信息
      let o = {
        phone: {
          value: this.userRegInfo.phone,
          errorMsg: "手机号格式不正确",
          reg: /^1[3-9]\d{9}$/,
        },
        password: {
          value: this.userRegInfo.password,
          errorMsg: "密码由数字字母下划线组合(6-16字符)",
          reg: /^[A-Za-z]\w{5,15}$/,
        },
        nickName: {
          value: this.userRegInfo.nickName,
          errorMsg: "昵称由字母数字下划线汉字组合(1-10字符)",
          reg: /^[\w\u4e00-\u9fa5]{1,10}$/,
        },
      };

      let isPass = validForm.valid(o);

      if (isPass) {
        let userInfo = Object.assign({}, this.userRegInfo);
        userInfo.appkey = this.appKey;

        this.$toast.loading({
          message: "加载中...",
          forbidClick: true,
          duration: 0,
        });

        this.axios({
          method: "POST",
          url: "/register",
          data: userInfo,
        })
          .then((result) => {
            //关闭加载提示
            this.$toast.clear();

            if (result.data.code == 100) {
              this.isShow = false;
              this.$toast(result.data.msg);
            } else {
              this.$toast(result.data.msg);
            }

          })
          .catch((err) => {
             ;
          });
      }
    },

    //登录
    login() {
      //构造表单验证信息
      let o = {
        phone: {
          value: this.userInfo.phone,
          errorMsg: "手机号格式不正确",
          reg: /^1[3-9]\d{9}$/,
        },
        password: {
          value: this.userInfo.password,
          errorMsg: "密码由数字字母下划线组合(6-16字符)",
          reg: /^[A-Za-z]\w{5,15}$/,
        },
      };

      let isPass = validForm.valid(o);
      if (isPass) {
        //复制用户注册信息
        let userInfo = Object.assign({}, this.userInfo);
        userInfo.appkey = this.appKey;

        this.$toast.loading({
          message: "加载中...",
          forbidClick: true,
          duration: 0,
        });

        this.axios({
          method: "POST",
          url: "/login",
          data: userInfo,
        })
          .then((result) => {
            this.$toast.clear();
            if (result.data.code == 200) {
              localStorage.setItem("__tk", result.data.token);
              this.$router.push({ name: "Home" });
            } else {
              this.$toast(result.data.msg);
            }
          })
          .catch((err) => {
             ;
          });
      }
    },
    //进主页
    goBack(data) {
      this.$router.push({ name:data });
    },
  },
};
</script>