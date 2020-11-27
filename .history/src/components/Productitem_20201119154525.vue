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
              <img src="http://www.kangliuyong.com:10002/images/product_small/IMG_0381_02p.jpg" alt="" />
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
.Productitem{
    .shopbag-item {
        padding: 10px 0px;
        overflow: hidden;
        border-bottom: 1px solid #e9e9e9;
        box-sizing: border-box;

        .checkbox {
            float: left;
            margin: 26px 10px 0px 10px;
        }

        .pro-img {
            float: left;
            width: 70px;
            border-radius: 10px;
            overflow: hidden;
        }

        .pro-info {
            float: left;
            box-sizing: border-box;
            padding: 5px;

            .pro-title {
                color: #2b2b2b;
                font-size: 16px;
                font-weight: 700;
            }

            .pro-detail {
                font-size: 12px;
                color: #414141;
                margin: 4px 0px;
            }

            .pro-price {
                color: #e55442;
                font-size: 15px;
                font-weight: 700;
            }
        }
}

</style>