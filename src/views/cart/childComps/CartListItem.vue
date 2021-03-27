<template>
  <div class="cart-item">
    <check-button :is-checked="product.checked" @click.native="checkClick"/>
    <div class="cart-img">
      <img :src="product.image" alt="">
    </div>
    <div class="cart-info">
      <div class="cart-title">{{product.title}}</div>
      <div class="cart-desc">{{product.desc}}</div>
      <div class="cart-base">
        <span class="price">￥{{product.realPrice}}</span>
        <span>x{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from '@/components/content/checkButton/CheckButton';
  export default {
    name: "CartListItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    methods: {
      checkClick() {
        this.product.checked = !this.product.checked;
      }
    }
  }
</script>

<style scoped>
  .cart-item {
    display: flex;
    width: 100%;
    height: 120px;
    border-radius: 10px;
    /*background-color: #ddd;*/
    margin: 10px 0;
    padding: 10px 0;
    align-items: center;
  }
  .cart-img {
    flex: 0.22;
  }
  .cart-img img {
    width: 100%;
    height: 100px;
    border-radius: 10px;
  }
  .cart-info {
    padding: 0 10px;
    flex: 0.72;
  }
  .cart-info .cart-title,
  .cart-info .cart-desc {
    font-size: 18px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    margin-bottom: 20px;
  }
  .cart-info .cart-desc {
    font-size: 14px;
  }
  .cart-info .cart-base {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
  }
  .cart-base .price {
    font-size: 18px;
    color: darkorange;
  }
</style>