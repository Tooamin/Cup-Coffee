<template>
    <div class="security">
        <Bgbox>
            <Contentbox>

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
        }
        components:{
            Bgbox,
            Contentbox
        }
    }
</script>

<style lang="less" scoped>

</style>