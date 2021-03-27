<template>
  <div id="detail">
    <detail-nav-bar class="detailNav" @detailThemeClick="detailThemeClick" ref="nav"/>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goodsinfo="goodsinfo"/>
      <detail-shop-info :shopinfo="shopinfo"/>
      <detail-goods-info :detail-info="detailInfo" @DetailImgLoad="DetailImgLoad"/>
      <detail-pramas-info :item-params="itemParams" ref="pramas"/>
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <goods-list :goods="recommends" ref="recommend"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top v-show="isShow" @click.native="backClick"/>

  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar';
  import DetailSwiper from './childComps/DetailSwiper';
  import DetailBaseInfo from './childComps/DetailBaseInfo';
  import DetailShopInfo from './childComps/DetailShopInfo';
  import DetailGoodsInfo from './childComps/DetailGoodsInfo';
  import DetailPramasInfo from './childComps/DetailPramasInfo';
  import DetailCommentInfo from './childComps/DetailCommentInfo';
  import DetailBottomBar from './childComps/DetailBottomBar';

  import Scroll from '@/components/common/scroll/Scroll';
  import GoodsList from '@/components/content/goods/GoodsList';


  import {getDetailData, GoodsInfo, ShopInfo, ItemParams, getRecommendData, CommentInfo} from "@/network/detail";
  import {mixin, backTopMixin} from "@/common/mixin";
  import {debounce} from "@/common/util";


  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goodsinfo: {},
        shopinfo: {},
        detailInfo: {},
        itemParams: {},
        commentInfo: {},
        recommends: [],
        themeTopY: [],
        getThemeTopY: null,
        currentIndex: 0,

      }
    },

    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailPramasInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList
    },
    created() {
      this.iid = this.$route.params.iid;

      getDetailData(this.iid).then(res => {
        // console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        // console.log(this.topImages);

        this.goodsinfo = new GoodsInfo(data.columns, data.itemInfo, data.shopInfo);
        // console.log(this.goodsinfo);

        this.shopinfo = new ShopInfo(data.shopInfo);
        // console.log(this.shopinfo);

        this.detailInfo = data.detailInfo;

        this.itemParams = new ItemParams(data.itemParams.info, data.itemParams.rule);
        // console.log(this.itemParams);

        if(data.rate.cRate !== 0) {
          this.commentInfo = new CommentInfo(data.rate.list[0]);
          // console.log(this.commentInfo);
        }
      });

      getRecommendData().then(res => {
        // console.log(res);
        this.recommends = res.data.list;
      });

      // this.$nextTick(() => {
      //   this.themeTopY.push(0);
      //   this.themeTopY.push(this.$refs.pramas.$el.offsetTop);
      //   this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
      //   console.log(this.themeTopY);
      // });
      this.getThemeTopY = debounce(() => {
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.pramas.$el.offsetTop);
        this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopY.push(Number.MAX_VALUE);
        // console.log(this.themeTopY);
      }, 100);

    },
    methods: {
      DetailImgLoad() {
        // console.log('-----');
        // this.$refs.scroll.refresh()
        this.refresh();

        // this.themeTopY.push(0);
        // this.themeTopY.push(this.$refs.pramas.$el.offsetTop);
        // this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        // this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        // console.log(this.themeTopY);

        this.getThemeTopY()
      },
      detailThemeClick(index) {
        // console.log(index);
        this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 100)
      },
      scroll(position) {
        // 0, 15952, 17224, 17445
        // 0, 15952  0
        // 15952, 17224,  1
        //   17224, 17445  2
        const positionY = -position.y;

        // 17445  3
        // console.log(position);
        const length = this.themeTopY.length;
        for (let i = 0; i<length - 1; i++) {
          // console.log(i);
          // if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopY[i]
          //   && positionY < this.themeTopY[i+1]) ||
          //   (i === length -1 && positionY >= this.themeTopY[i]))) {
          //   this.currentIndex = i;
          //   // console.log(i);
          //   this.$refs.nav.currentIndex = this.currentIndex;
          // }
          if(this.currentIndex !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }

        this.isShow = positionY > 1000;
      },
      addToCart() {
        let product = {};
        product.image = this.topImages[0];
        product.title = this.goodsinfo.title;
        product.desc = this.detailInfo.desc;
        product.realPrice = this.goodsinfo.realPrice;
        product.iid = this.iid;
        // console.log(product);

        // this.$store.cartList.push(product);
        // this.$store.commit('addCart', product);
        this.$store.dispatch('addCart', product).then(res => {
          console.log(res);
          // console.log(this.$toast);
          this.$toast.show(res, 1500);

        });
      }
    },
    mounted() {


    },

    mixins: [mixin, backTopMixin],

    destroyed() {
      this.$bus.$off('goodsImgLoad', this.goodsImgListener)
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background: #fff;
    height: 100vh;
  }
  .detailNav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  /*.content {*/
  /*  position: absolute;*/
  /*  top: 44px;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  overflow: hidden;*/
  /*}*/
  .content {
    height: calc(100% - 44px - 49px);
  }
</style>