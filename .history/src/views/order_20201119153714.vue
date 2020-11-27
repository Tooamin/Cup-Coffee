<template>
    <div class="order">
        <Bgbox :title="toptitle">
            <Contentbox>
                
            </Contentbox>
        </Bgbox>
    </div>
</template>

<script>
import Contentbox from '../components/Contentbox.vue'
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
            Bgbox,
            Contentbox
        }
    }
</script>

<style lang="less" scoped>

</style>