<template>
    <div class="collection">
        <Bgbox :title="toptitle">

        </Bgbox>
    </div>
</template>

<script>
import Bgbox from "../components/Bgbox.vue";
    export default {
        name:'Collection',
        data(){
            return {
                toptitle:'我的收藏'
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