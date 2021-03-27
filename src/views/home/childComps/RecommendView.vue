<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link" >
        <img :src="item.image" alt="" @load="imgLoad">
        <span>{{item.title}}</span>
      </a>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'recommendView',
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        // console.log('----');
        this.$emit('recommendImgLoad');
        this.isLoad = true;
      }

    }
  }
}
</script>

<style scoped>
  .recommend {
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item a,
  .recommend-item span{
    display: block;
  }
  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>