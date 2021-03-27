<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage"  @load="goodsImgLoad" alt=""/>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img;
      }
    },
    methods: {
      goodsImgLoad() {
        // console.log('图片加载');
        this.$bus.$emit('goodsImgLoad');

        // if(this.$route.path.indexOf('/home') !== -1) {
        //   this.$bus.$emit('homeGoodsImgLoad');
        // }else if(this.$route.path.indexOf('/path') !== -1) {
        //   this.$bus.$emit('pathGoodsImgLoad');
        // }
      },
      itemClick() {
        // console.log('详情页点击');
        this.$router.push('/detail/' + this.goodsItem.iid);
        // console.log(this.goodsItem);
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    position: relative;
    padding-bottom: 40px;
    width: 48%;

  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    overflow: hidden;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 5px;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;

    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -18px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
  }
</style>