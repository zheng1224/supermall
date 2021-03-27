<template>
  <swiper class="swiper">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="ImageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper';

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ImageLoad() {

        // console.log('------');
        this.$emit('swiperImgLoad');

        // this.isLoad = true;
    }
  },
  watch: {
    banners() {
      this.imgLength = this.banners.length;
    }
  }
}
</script>

<style scoped>
  
</style>