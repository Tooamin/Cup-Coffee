<template>
    <div class="security">
        <Bgbox :title="toptitle">
            <Contentbox>
                <div class="item-box">
                    <van-cell title="单元格" is-link />
                    <van-cell title="单元格" is-link />
                </div>
            </Contentbox>
        </Bgbox>
    </div>
</template>

<script>
import Contentbox from "../components/Contentbox.vue";
import Bgbox from "../components/Bgbox.vue";
    export default {
        name:'Security',
        data(){
            return {
                toptitle:'安全中心'
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