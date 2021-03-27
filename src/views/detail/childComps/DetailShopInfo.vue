<template>
  <div class="detail-shop-info">
    <div class="shop-info">
      <a href="">
        <img :src="shopinfo.logo" alt="">
      </a>
      <span>{{shopinfo.name}}</span>
    </div>
    <div class="shop-other">
      <div class="shop-other-left">
        <div class="other-sell">
          <div>{{shopinfo.sells | sellFilter}}</div>
          <p>总销量</p>
        </div>
        <div class="other-good">
          <div>{{shopinfo.goods}}</div>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-other-right">
        <div v-for="(item, index) in shopinfo.score" :key="index">
          <span class="left">{{item.name}}</span>
          <span :class="{'better-score': item.isBetter}" class="center">{{item.score}}</span>
          <span :class="{'high-score': item.isBetter}" class="right">{{item.isBetter? '高': '低'}}</span>
        </div>
      </div>
    </div>
    <div class="shop-button">
      <div>进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopinfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      sellFilter: function(value) {
        if(value < 10000) return value;
        return (value/10000).toFixed(1) + '万';
      }
    }
  }
</script>

<style scoped>
  .detail-shop-info {
    padding: 25px 10px;
    border-top: 4px solid #eee;
    border-bottom: 4px solid #eee;

  }
  .shop-info {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  .shop-info img{
    width: 45px;
    height: 45px;
    border-radius: 28px;
  }
  .shop-info span {
    font-size: 18px;
    margin-left: 10px;
  }
  .shop-other {
    display: flex;
    padding: 10px 0;
    /*justify-content: space-around;*/
    align-items: center;
  }
  .shop-other-left,
  .shop-other-left,
  .shop-other-left .other-sell,
  .shop-other-left .other-good{
    flex: 1;
  }
  .shop-other-left,
  .shop-other-right{
     line-height: 25px;
     align-items: center;
     text-align: center;
   }
  .shop-other-left {
    display: flex;
    border-right: 1px solid #ccc;
    font-size: 16px;
  }
  .shop-other-right {
    padding: 0 30px;
    font-size: 14px;
  }
  .shop-other-right span {
    padding: 0 4px;
  }
  .shop-other-right .right {
    position: relative;
    top: 5px;
    width: 14px;
    height: 14px;
    font-size: 12px;
    line-height: 14px;
    color: #fff;
    padding: 0;
    background-color: greenyellow;
  }
  .shop-other-right .center {
    color: greenyellow;
  }
  .shop-other-right .better-score{
    color: orangered;
  }
  .shop-other-right .high-score {
    background-color: orangered;
  }
  .shop-button {
    margin-top: 10px;
    text-align: center;
  }
  .shop-button div {
    display: inline-block;
    width: 150px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    background-color: #f2f5f8;
    border-radius: 10px;
  }
</style>