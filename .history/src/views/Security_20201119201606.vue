<template>
    <div class="security">
        <Bgbox :title="toptitle">
            <Contentbox>
                <div class="item-box">
                    <van-cell title="修改密码" is-link />
                    <van-cell title="注销账号" is-link />
                </div>
                <div class="outlogin">
                    1
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