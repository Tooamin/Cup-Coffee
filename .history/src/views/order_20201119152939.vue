<template>
    <div class="order">
        11
        <Bgbox :title="toptitle">
            22
        </Bgbox>
    </div>
</template>

<script>
import Bgbox from '../components/Bgbox.vue'
import '../assets/less/order.less';
    export default {
        name:'Order',
        data(){
            return{
                toptitle:'我的订单',

            }
        },
        created(){

        },
        methods:{

        },
        components:{
            Bgbox
        }
    }
</script>

<style lang="less" scoped>

</style>