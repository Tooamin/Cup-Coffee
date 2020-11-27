<template>
  <div class="menu">
    <Bgbox :title="toptitle">
        <div class="content">
            <div class="search">
                <van-search v-model="name" placeholder="请输入你想搜索的商品" />
            </div>
            <div class="pro-content">
                
            </div>
        </div>
    </Bgbox>
  </div>
</template>

<script>
import Bgbox from "../components/Bgbox.vue";
import '../assets/less/menu.less';  
export default {
  name: "Menu",
  data(){
      return{
          toptitle:' ',
          name:'',
          productData:[]
      }
  },
  components:{
      Bgbox
  }
};
</script>