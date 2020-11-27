<template>
    <div class="collection">
        <Bgbox :title="toptitle">
            <div class="collection">
                <div class="collection-box">

                <div class="collection-item">
                </div>
                </div>

            </div>
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
.collection{
    .collection-box{
        box-sizing: border-box;
        padding: 10px;
    }
}
</style>