<template>
  <div class="menu">
    <Bgbox :title=" ">
        
    </Bgbox>
  </div>
</template>

<script>
import Bgbox from "../components/Bgbox.vue";
export default {
  name: "Menu",
  data(){
      return{
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