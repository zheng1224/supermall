<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :title="['流行', '精选', '新款']"
                 @tabClick="tabClick"
                 class="topTabControl"
                 v-show="isTabFixed"
                 ref="topTabControl"/>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            @pullingUp="loadMore"
            :pull-up-load="true">
        <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
        <recommend-view :recommends="recommends" @recommendImgLoad="recommendImgLoad"></recommend-view>
        <feature-view @featureImgLoad="featureImgLoad"/>
        <tab-control :title="['流行', '精选', '新款']"
                     @tabClick="tabClick"
                     class="tabControl"
                      ref="tabControl"/>
        <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isActive"/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
import TabControl from '@/components/content/tabControl/TabControl.vue';
import GoodsList from '@/components/content/goods/GoodsList.vue';
import Scroll from '@/components/common/scroll/Scroll.vue';


import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FeatureView from './childComps/FeatureView';

import {getHomeMultidata, getHomeData} from '@/network/home';
import {mixin, backTopMixin} from "@/common/mixin";
import {debounce} from "../../common/util";

export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    Scroll
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  created() {
    this.getHomeMultidata(),
    this.getHomeData('pop'),
    this.getHomeData('new'),
    this.getHomeData('sell')
  },
  mounted() {
    this.tabClick(0)
  },
  mixins: [mixin, backTopMixin],
  destroyed() {
    // console.log('home destroyed');
  },
  activated() {
    // console.log('home activated');
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);

  },
  deactivated() {
    // console.log('home deactivated');
    this.saveY = this.$refs.scroll.getScrollY();

    // 离开时取消图片监听
    this.$bus.$off('goodsImgLoad', this.goodsImgListener)
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {

    // 监听事件的方法
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      if(this.$refs.topTabControl.currentIndex !== undefined) {
        this.$refs.topTabControl.currentIndex = index;
        this.$refs.tabControl.currentIndex = index;
      }

    },

    contentScroll(position) {
      // console.log(position);
      this.isActive = (-position.y) > 1000;
      this.isTabFixed = (-position.y) > this.tabOffsetTop;
    },
    loadMore() {
      // console.log('上拉加载更多');
      this.getHomeData(this.currentType);
      // this.$refs.scroll.scroll.finishPullUp()
    },
    swiperImgLoad() {
      // console.log('+++');
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      // console.log(tabOffsetTop);

    },
    recommendImgLoad() {
      // console.log('====');
      // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop ;
      // console.log(this.tabOffsetTop);
    },
    featureImgLoad() {
      // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop + this.tabOffsetTop;
      // console.log(this.tabOffsetTop);
    },
    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.banners);
        // console.log(this.recommends);
      })
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then(res => {
        // console.log(res);
        // for(item of res.data.list) {
        //   this.goods.push(item);
        //   this.goods[type].page += 1
        // }
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPull()

      })
    }
  }
}
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
  }
  .home-nav {
    background: var(--color-tint);
    color: #fff;

    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }
  .topTabControl {
    position: relative;
    z-index: 9;
    background: #fff;
  }

  /*.tabFixed {*/
  /*  position: fixed;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  top: 44px;*/
  /*}*/
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

    overflow: hidden;
  }
  /*.content {*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*}*/
</style>