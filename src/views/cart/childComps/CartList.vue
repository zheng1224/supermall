<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :product="item"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from '@/components/common/scroll/Scroll';
  import CartListItem from '@/views/cart/childComps/CartListItem';

  import {mapGetters} from 'vuex';
  export default {
    name: "CartList",
    components: {
      CartListItem,
      Scroll
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 49px - 44px - 40px);
    width: 100%;
    /*position: relative;*/

  }
  .content {
    height: 100%;
    /*position: absolute;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*right: 0;*/
    /*left: 0;*/

    overflow: hidden;
  }

</style>