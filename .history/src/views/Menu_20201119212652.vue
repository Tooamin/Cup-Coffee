<template>
  <div class="menu">
    <Bgbox :title="toptitle">
        <div class="conten">
            1
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

<style lang="scss" scoped>
</style>