<template>
    <div class="addressList">
        <Bgbox :title="地址管理">
            
        </Bgbox>
    </div>
</template>

<script>
import Bgbox from '../components/Bgbox.vue'
    export default {
        name:'AddressList',
        data(){
            return {
                toptitle:'地址管理'
            }
        }
        components:{
            Bgbox
        }
        
    }
</script>

<style lang="less" scoped>

</style>