<template>
    <div class="pay">
        <van-nav-bar left-arrow :border="false" @click-left="goBack" />
    </div>
</template>

<script>
    export default {
        name:'Pay',
        methods:{
            goBack() {
      this.$router.go(-1);
    },
        }
    }
</script>

<style lang="less" scoped>

</style>