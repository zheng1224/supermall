<template>
  <div class="check-button">
    <img src="@/assets/img/cart/tick.svg" :class="{active: isChecked}" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
        isChecked: {
          type: Boolean,
          default: false
        }
      }

  }
</script>

<style scoped>
  .check-button {
    width: 20px;
    height: 20px;

    border-radius: 50%;

  }
  .check-button img {
    width: 100%;
    height: 100%;
    border: 2px solid #aaa;
    border-radius: 50%;
  }
  .check-button .active {
    border-color: red;
    background-color: red;
  }
</style>