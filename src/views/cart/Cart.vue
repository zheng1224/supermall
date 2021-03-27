<template>
  <div class="cart">
    <nav-bar class="cart-title">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar';
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar';
  import {mapGetters} from 'vuex';

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    // cartLength() {
    //   return  this.$store.state.cartList.length;
    // }
    ...mapGetters([
        'cartLength',
        'cartList'
    ]),
    // ...mapGetters({
    //   length: 'cartLength',
    //   list: 'cartList'
    // })
  }

}
</script>

<style scoped>
  .cart {
    height: 100vh;
    width: 100vw;
  }
  .cart-title {
    background-color: var(--color-high-text);
    color: #fff;
  }
</style>