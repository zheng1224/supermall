<template>
  <div class="detail-base-info" v-if="Object.keys(goodsinfo).length !== 0">
    <div class="base-title">{{goodsinfo.title}}</div>
    <div class="base-price">
      <span class="base-price-1">{{goodsinfo.price}}</span>
      <span class="base-price-2">{{goodsinfo.oldPrice}}</span>
      <span v-if="goodsinfo.discountDesc" class="discountDesc">{{goodsinfo.discountDesc}}</span>
    </div>
    <div class="base-other">
      <span>{{goodsinfo.columns[0]}}</span>
      <span>{{goodsinfo.columns[1]}}</span>
      <span>{{goodsinfo.services[goodsinfo.services.length - 1].name}}</span>
    </div>
    <div class="base-service">
      <span class="base-service-item" v-for="index in goodsinfo.services.length - 1">
        <img :src="goodsinfo.services[index - 1].icon" alt="">
        <span>{{goodsinfo.services[index - 1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goodsinfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-base-info {
    margin-top: 15px;
    padding: 0 8px;
  }
  .base-title {
    font-weight: 700;
  }
  .base-price {
    margin: 10px 0;
  }
  .base-price .base-price-1 {
    font-size: 18px;
    color: var(--color-high-text);
  }
  .base-price .base-price-2 {
    font-size: 14px;
    color: #ccc;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .base-price .discountDesc {
    font-size: 12px;
    color: #fff;
    padding: 2px 5px;
    border-radius: 8px;
    background-color: var(--color-high-text);
    margin-left: 5px;
  }
  .base-other {
    display: flex;
    color: #bbb;
    font-size: 13px;
    margin-top: 15px;
    line-height: 30px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }
  .base-service {
    display: flex;

    line-height: 60px;
  }
  .base-service-item {
    flex: 1;
  }
  .base-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
  .base-service-item span {

    font-size: 14px;
    color: #333;

  }
</style>