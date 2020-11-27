<template>
  <div class="menu">
    <Bgbox :title="toptitle">
        <div class="conten">
            
        </div>
    </Bgbox>
  </div>
</template>

<script>
import Bgbox from "../components/Bgbox.vue";
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

<style lang="less" scoped>
</style>