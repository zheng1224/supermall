<template>
  <div class="detail-bottom">
    <div class="bottom-left">
      <div>
        <span class="icon left"></span>
        <span>客服</span>
      </div>
      <div>
        <span class="icon center"></span>
        <span>店铺</span>
      </div>
      <div>
        <span class="icon right"></span>
        <span>收藏</span>
      </div>
    </div>

    <div class="bottom-right">
      <div class="left" @click="addCart">加入购物车</div>
      <div class="right">购买</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "DetailBottomBar",
    methods: {
      addCart() {
        // console.log('加入购物车');
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .detail-bottom {
    display: flex;
    height: 49px;
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    position: relative;
    /*bottom: 49px;*/
    z-index: 10;
    background: #fff;
  }
  .detail-bottom>div {
     flex: 1;
     text-align: center;
   }
  .bottom-left {
     display: flex;
    justify-content: space-around;
   }

  .bottom-left span {
    display: block;
  }


  .bottom-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    background: url("../../../assets/img/detail/detail_bottom.png") no-repeat 22px 22px;
    background-size: 22px auto;
    margin: 6px auto 3px;
  }
  .bottom-left .left {
    background-position: 0 -53px;
    margin-left: 5px;
  }
  .bottom-left .center {
    background-position: 0 -98px;
  }
  .bottom-left .right {
    background-position: 0 0;
  }
  .bottom-right {
    display: flex;
    line-height: 49px;
    text-align: center;
  }

  .bottom-right .left {
    flex: 1.4;
    color: #333;
    background-color: #ffe817;
  }
  .bottom-right .right {
    flex: 1;
    background-color: #f69;
    color: #fff;
  }
</style>