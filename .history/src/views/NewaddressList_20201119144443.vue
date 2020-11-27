<template>
    <div class="newaddresslist">
        <Bgbox :title="toptitle">

        </Bgbox>
    </div>
</template>

<script>
import Bgbox from '../components/Bgbox.vue';
    export default {
        name:'NewaddressList',
        data(){
            return {
                toptitle:"新增地址"
            }
        },
        components:{
            Bgbox
        }

    }
</script>

<style lang="less" scoped>

</style>