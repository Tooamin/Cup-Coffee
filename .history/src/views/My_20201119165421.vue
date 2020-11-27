<template>
    <div class="my">
        <Bgbox :is-show="false">
            <div class="userhead">
                
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