import {debounce} from "@/common/util";
import BackTop from '@/components/content/backTop/BackTop.vue';

export const mixin = {
  data() {
    return {
      goodsImgListener: null,
      refresh: null
    }
  },
  mounted() {
    // 最后面推荐图片的刷新卡顿处理
    this.refresh = debounce(this.$refs.scroll.refresh, 50);

    this.goodsImgListener = () => {
      this.refresh()
    };

    this.$bus.$on('goodsImgLoad', this.goodsImgListener)
    // console.log('我是mixin里面的mounted');
  }
};

export const backTopMixin = {
  data() {
    return {
      isActive: false,
      isShow: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      // console.log('backClick');
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
};