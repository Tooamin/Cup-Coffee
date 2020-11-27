<template>
    <div class="wallet">
        <Bgbox >
            <Contentbox>

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
                toptitle:"咖啡钱包"
            }
        },
        created(){

        }
    }
</script>

<style lang="less" scoped>

</style>