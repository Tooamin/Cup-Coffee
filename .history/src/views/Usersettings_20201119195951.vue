<template>
  <div class="usersettings">
    <Bgbox :title="toptitle">
      <Contentbox>
        <div class="funitem">
          <div class="title-head">
            头像
            <span>点击头像更改</span>
          </div>
          <div class="headPortrait" @click="modifyThePicture">
            <img
              :src="accountInfo.userImg"
              alt=""
            />
          </div>
        </div>
        <div class="funitem">
          <van-cell :value="accountInfo.userId">
            <template #title>
              <span class="title-item">用户ID</span>
            </template>
          </van-cell>
          <van-cell :value="accountInfo.phone">
            <template #title>
              <span class="title-item">手机号</span>
            </template>
          </van-cell>
          <van-cell :value="accountInfo.nickName">
            <template #title>
              <span class="title-item">昵称</span>
            </template>
          </van-cell>
          <van-cell>
            <template #title>
              <span class="title-item">简介</span>
              <div class="desc-box">

              </div>
            </template>
          </van-cell>
        </div>
      </Contentbox>
    </Bgbox>
    <van-popup v-model="isOpenDesc">
      <div class="uphead"><van-uploader :after-read="uploadUserHeadImg" /></div>
      <div class="uphead-text">点击上传头像 ↑</div>
    </van-popup>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" >
        
    </van-popup>
  </div>
</template>

<script>
import Contentbox from "../components/Contentbox.vue";
import Bgbox from "../components/Bgbox.vue";
import "../assets/less/usersettings.less";
export default {
  namr: "Usersettings",
  data() {
    return {
      isOpenDesc: false,
      isOpenName:false,
      toptitle: "个人资料",
      accountInfo: {
        nickName: "",
        desc: "",
        phone: "",
        userId: "",
        desc: "",
      },
    };
  },
  created() {
    //获取用户信息
    this.getUserAccountInfo();
  },
  methods: {
    modifyThePicture() {
      this.isOpen = !this.isOpen;
    },
    getUserAccountInfo() {
      let tokenString = localStorage.getItem("__tk");
      if (!tokenString) {
        //跳回登录页面
        this.$toast("请先登录");
        return this.$router.push({ name: "Login" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0,
      });

      this.axios({
        method: "GET",
        url: "/findAccountInfo",
        params: {
          appkey: this.appKey,
          tokenString,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            //token检验无效,则跳到登录页面
            this.$router.push({ name: "Login" });
          } else if (result.data.code == "B001") {
            let data = result.data.result[0];
            if (data.desc == "") {
              data.desc = "这家伙很懒，什么都没有留下！";
            }
            this.accountInfo = data;
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },

    uploadUserHeadImg(file) {
      let type = ["gif", "png", "jpg", "jpeg"];

      let size = 1;

      let fileType = file.file.type.split("/")[1];
      if (type.indexOf(fileType) === -1) {
        this.$toast(`文件类型只支持${type.join(",")}`);
        return;
      }

      let fileSize = file.file.size / 1024 / 1024;

      if (fileSize > size) {
        this.$toast(`文件允许最大不能超过${size}MB`);
        return;
      }

      let base64 = file.content.replace(/^data:image\/[A-za-z]+;base64,/, "");

      let tokenString = localStorage.getItem("__tk");
      if (!tokenString) {
        //跳回登录页面
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
        url: "/updateAvatar",
        data: {
          appkey: this.appKey,
          tokenString,
          imgType: fileType,
          serverBase64Img: base64,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            this.$toast("请重新登录");
            this.$router.push({ name: "Login" });
          } else if (result.data.code == "H001") {
            this.accountInfo.userImg = result.data.userImg;
          }

          this.$toast(result.data.msg);
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    // 修改昵称
    updataName() {
      if (!this.accountInfo.nickName) {
        this.$toast("昵称不能为空");
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
        url: "/updateNickName",
        data: {
          appkey: this.appKey,
          tokenString,
          nickName: this.accountInfo.nickName,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            this.$toast("请重新登录");
            this.$router.push({ name: "Login" });
          } else {
            this.$toast(result.data.msg);
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    updataDesc() {
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
        url: "/updateDesc",
        data: {
          appkey: this.appkey,
          tokenString,
          desc: this.accountInfo.desc,
        },
      })
        .then((result) => {
          this.$toast.clear();

          if (result.data.code == 700) {
            this.$toast("请重新登录");
            this.$router.push({ name: "Login" });
          } else {
            this.$toast(result.data.msg);
          }
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
</style>