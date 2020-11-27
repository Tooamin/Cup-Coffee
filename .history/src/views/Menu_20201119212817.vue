<template>
  <div class="menu">
    <Bgbox :title="toptitle">
        <div class="content">
            
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