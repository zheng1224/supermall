<template>
  <div>
    <nav-bar>
      <div slot="left" class="navBarBack" @click="backClick">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="detailTitle">
        <div v-for="(item, index) in titles"
             @click="itemClick(index)"
             :class="{active: index === currentIndex}">
          {{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue';
  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('detailThemeClick', index);
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .detailTitle {
    display: flex;
    justify-content: space-around;
  }
  .active {
    color: var(--color-high-text)
  }
  .navBarBack img {
    margin-top: 12px;
  }
</style>