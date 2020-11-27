<template>
    <div class="wallet">
        <Bgbox :title="toptitle">
            <Contentbox>
                <div class="cardvoucher">
                    <div class="cardvoucher-item">
                        <div class="price-title">
                            <span>￥</span>
                            34
                        </div>
                        <div class="title-name">
                            <div class="name">全国通用券</div>
                            <div class="icon"></div>
                        </div>
                    </div>
                </div>
            </Contentbox>
        </Bgbox>
    </div>
</template>

<script>
import Contentbox from "../components/Contentbox.vue";
import Bgbox from "../components/Bgbox.vue";
    export default {
        name:"Wallet",
        components:{
            Bgbox,
            Contentbox
        },
        data(){
            return {
                toptitle:"咖啡钱包",
                
            }
        },
        created(){

        }
    }
</script>

<style lang="less" scoped>

</style>