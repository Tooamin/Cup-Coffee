<template>
    <div class="Productitem">
        <van-swipe-cell>
            <div class="checkbox">
              <van-checkbox
                v-model="item.isChecked"
                @change="simpleSelect"
                checked-color="#7186c7"
              ></van-checkbox>
            </div>
            <div class="pro-img" @click="goDetail(item.pid)">
              <img :src="item.small_img" alt="" />
            </div>
            <div class="pro-info">
              <div class="pro-title">名字</div>
              <div class="pro-detail">规格</div>
              <div class="pro-price">￥ 28.00</div>
            </div>
            <div class="shopbag-count">
              <van-stepper
                v-model="item.count"
                theme="round"
                button-size="20"
                disable-input
                @change="modifyCount(item)"
              />
            </div>
            <template #right>
              <van-button
                square
                text="删除"
                type="danger"
                @click="removeProOne(index, item.sid)"
              />
            </template>
          </van-swipe-cell>
    </div>
</template>

<script>
    export default {
        name:'Productitem'
    }
</script>

<style lang="less" scoped>

</style>