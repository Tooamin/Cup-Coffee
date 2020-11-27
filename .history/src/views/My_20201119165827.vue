<template>
    <div class="my">
        <Bgbox :is-show="false">
            <div class="userhead">
                <div class="user-img">
                    <img src="" alt="">
                </div>
                <div class="userInfo">
                    <div class="username">用户名</div>
                    <div class="userphone">188188188188</div>
                </div>
            </div>
        </Bgbox>
    </div>
</template>

<script>
import Bgbox from '../components/Bgbox.vue';
import '../assets/less/my.less';
    export default {
        name:'My',
        data(){
            return {

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