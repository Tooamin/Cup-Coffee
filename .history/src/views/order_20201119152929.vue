<template>
    <div class="order">
        <Bgbox :class="toptitle">
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