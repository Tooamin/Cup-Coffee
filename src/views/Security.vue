<template>
  <div class="security">
    <Bgbox :title="toptitle">
      <Contentbox>
        <div class="item-box">
          <van-cell title="修改密码" is-link @click="openPasswordBox" />
          <van-cell title="注销账号" is-link @click="theCancellationOfAccount" />
        </div>
        <div class="outlogin">
          <van-button color="#4a6fe7" @click="outLogin">退出登录</van-button>
        </div>
      </Contentbox>
    </Bgbox>
    <van-popup is-link position="bottom" closeable v-model="isOpen">
      <div class="form-box">
        <div class="form-title">修改密码</div>
        <van-form>
          <van-field
            v-model="Userpassword.oldPassword"
            :type="isPassword ? 'password' : 'text'"
            name="旧密码"
            label="旧密码"
            placeholder="旧密码(首字符必须为字母)"
            :right-icon="isPassword ? 'closed-eye' : 'eye-o'"
            autocomplete="off"
            @click-right-icon="toggleType"
          />

          <van-field
            v-model="Userpassword.newPassword"
            :type="isPassword ? 'password' : 'text'"
            name="新密码"
            label="新密码"
            placeholder="新密码(首字符必须为字母)"
            :right-icon="isPassword ? 'closed-eye' : 'eye-o'"
            autocomplete="off"
            @click-right-icon="toggleType"
          />

          <div class="commit-btn">
            <van-button round block color="#0C34BA" @click="changeThePassword"
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
import { validForm } from "../assets/js/validForm";
export default {
  name: "Security",
  data() {
    return {
      toptitle: "安全中心",
      isOpen: false,
      isPassword: false,
      Userpassword: {
        oldPassword: "",
        newPassword: "",
      },
    };
  },
  created() {},
  methods: {
    //查看密码
    toggleType() {
      this.isPassword = !this.isPassword;
    },
    // 修改密码
    openPasswordBox() {
      this.isOpen = true;
    },
    // 注销账号
    theCancellationOfAccount() {
      this.$dialog
        .confirm({
          title: "注销账号",
          message: "是否确定注销账号，一旦注销无法恢复！",
          confirmButtonColor: "#0C34BA",
        })
        .then(() => {
          let tokenString = localStorage.getItem("__tk");
          if (!tokenString) {
            this.$toast("请先登录");
            return this.$router.push({ name: "Login" });
          }

          this.$toast.loading({
            message: "加载中...",
            forbidClick: true,
            duration: 0,
          });

          this.axios({
            method: "POST",
            url: "/destroyAccount",
            data: {
              appkey: this.appKey,
              tokenString,
            },
          })
            .then((result) => {
              this.$toast.clear();
              if (result.data.code == 700) {
                this.$toast("请重新登录");
                this.$router.push({ name: "Login" });
              } else if (result.data.code == "G001") {
                setTimeout(() => {
                  //清除本地缓存
                  localStorage.removeItem("__tk");
                  this.$router.push({ name: "Login" });
                }, 800);
              }

              this.$toast(result.data.msg);
            })
            .catch((err) => {
              this.$toast.clear();
               ;
            });
        })
        .catch((err) => {
           ;
        });
    },
    // 退出账号
    outLogin() {
      this.$dialog
        .confirm({
          title: "退出登录",
          message: "是否确定退出登录！",
          confirmButtonColor: "#0C34BA",
        })
        .then(() => {
          this.$toast.loading({
            message: "加载中...",
            forbidClick: true,
            duration: 0,
          });

          setTimeout(() => {
            this.$toast.clear();
            //清除本地缓存
            localStorage.removeItem("__tk");
            this.$router.push({ name: "Login" });
          }, 800);
        })
        .catch((err) => {});
    },
    // 修改密码
    changeThePassword() {
      // 密码验证信息
      let o = {
        oldPassword: {
          value: this.Userpassword.oldPassword,
          errorMsg: "旧密码由数字字母下划线组合(6-16字符)",
          reg: /^[A-Za-z]\w{5,15}$/,
        },
        newPassword: {
          value: this.Userpassword.newPassword,
          errorMsg: "新密码由数字字母下划线组合(6-16字符)",
          reg: /^[A-Za-z]\w{5,15}$/,
        },
      };

      let isPass = validForm.valid(o);

      if (isPass) {
        if (this.Userpassword.newPassword == this.Userpassword.oldPassword) {
          this.$toast("新密码和旧密码不能相同");
          return;
        }
      }

      let tokenString = localStorage.getItem("__tk");

      if (!tokenString) {
        this.$toast("请先登录");
        return this.$router.push({ name: "Login" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      this.axios({
        method: "POST",
        url: "/updatePassword",
        data: {
          appkey: this.appKey,
          tokenString,
          password: this.Userpassword.newPassword,
          oldPassword: this.Userpassword.oldPassword,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            this.$toast("请重新登录");
            this.$router.push({ name: "Login" });
          } else if (result.data.code == "E001") {
            setTimeout(() => {
              //   清除登录缓存
              localStorage.removeItem("__tk");
              this.$router.push({ name: "Login" });
            }, 800);
          }

          this.$toast(result.data.msg);
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
  },
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
  /deep/ .van-popup {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .form-title {
    font-size: 16px;
    padding: 30px 20px;
  }
  .form-box {
    /deep/ .van-cell:nth-of-type(2) {
      margin: 30px 0px;
    }
    /deep/ .commit-btn {
      margin: 20px 0px;
      padding: 0px 30px;
    }
  }
}
</style>