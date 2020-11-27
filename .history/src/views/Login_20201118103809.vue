<template>
  <div class="login">

    <van-nav-bar
      left-text="返回"
      right-text="先逛一逛"
      @click-right="goBack()"
    >
      <template #left>
        <div class="nav-left">
          <div class="logo">
            <img src="../assets/images/home_active.png" alt="">
          </div>
          <div class="logo-title">Luckin Coffee</div>
        </div>
      </template>
    </van-nav-bar>

  </div>
</template>

<script>
  import '../assets/less/login.less'
  import {validForm} from '../assets/js/validForm'

  export default {
    name: 'Login',
    data() {

      return {
        //用户登录信息
        userInfo: {
          phone: '',
          password: ''
        },

        //用户注册信息
        userRegInfo: {
          phone: '',
          password: '',
          nickName: ''
        },

        //是否显示注册框
        isShow: false,

        //切换注册密码框的类型
        isRegPassword: true
      };
    },

    methods: {
      //切换注册框
      toggleRegisterBox() {
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
            value: this.userRegisterInfo.phone,
            errorMsg: '手机号格式不正确',
            reg: /^1[3-9]\d{9}$/
          },
          password: {
            value: this.userRegisterInfo.password,
            errorMsg: '密码由数字字母下划线组合(6-16字符)',
            reg: /^[A-Za-z]\w{5,15}$/
          },
          nickName: {
            value: this.userRegisterInfo.nickName,
            errorMsg: '昵称由字母数字下划线汉字组合(1-10字符)',
            reg: /^[\w\u4e00-\u9fa5]{1,10}$/
          },
        };

        let isPass = validForm.valid(o);

        if (isPass) {

          // 

          //复制用户注册信息
          let userInfo = Object.assign({}, this.userRegisterInfo);
          userInfo.appkey = this.appkey;
          
          
          this.$toast.loading({
            message: '加载中...',
            forbidClick: true,
            duration: 0
          });

          //发起注册请求
          this.axios({
            //请求类型
            method: 'POST',
            //请求路径
            url: '/register',

            //POST请求参数, object
            data: userInfo

          }).then(result => {
            //关闭加载提示
            this.$toast.clear();

            if (result.data.code == 100) {
              this.isShow = false;
            } else {
              this.$toast(result.data.msg);
            }

            // 
          }).catch(err => {
               ;
          })

        }
      },

      //登录
      login() {
        //构造表单验证信息
        let o = {
          phone: {
            value: this.userInfo.phone,
            errorMsg: '手机号格式不正确',
            reg: /^1[3-9]\d{9}$/
          },
          password: {
            value: this.userInfo.password,
            errorMsg: '密码由数字字母下划线组合(6-16字符)',
            reg: /^[A-Za-z]\w{5,15}$/
          }
        };

        let isPass = validForm.valid(o);
        if (isPass) {
          //发起登录请求
          //复制用户注册信息
          let userInfo = Object.assign({}, this.userInfo);
          userInfo.appkey = this.appkey;

          this.$toast.loading({
            message: '加载中...',
            forbidClick: true,
            duration: 0
          });

          this.axios({
            method: 'POST',
            url: '/login',
            data: userInfo

          }).then(result => {
            this.$toast.clear();
            if (result.data.code == 200) {
              localStorage.setItem('__tk', result.data.token);
              this.$router.push({name: 'Home'});

            } else {
              this.$toast(result.data.msg);
            }
          }).catch(err => {
               ;
          })        


        }
      },
      goBack() {
        this.$router.push({name:'Home'});
      }
    }
  }
</script>