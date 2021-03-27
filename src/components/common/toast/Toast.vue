<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        isShow: false,
        message: ''
      }
    },
    methods: {
      show(message="默认的信息", duration=1500) {
        this.message = message;
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false;
          this.message = '';
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 140px;
    height: 40px;
    line-height: 40px;
    background-color: rgba(100, 100, 100, .75);
    color: #fff;
    font-size: 14px;
    z-index: 10;
  }
</style>