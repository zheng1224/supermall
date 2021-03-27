<template>
  <div class="cart-bottom">
    <div class="check-botton">
      <check-button :is-checked="allChecked" @click.native="allSelect"/>
      <div class="choice">多选</div>
      <div>
        合计: {{totalPrice}}
      </div>
    </div>
    <div class="toCount" @click="countClick">去计算({{cartLength}})</div>

  </div>
</template>

<script>
  import CheckButton from '@/components/content/checkButton/CheckButton';
  import {mapGetters} from 'vuex';
  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return '￥' + this.cartList.filter(item => {
          return item.checked;
        }).reduce((preValue, item) => {
          return preValue + item.realPrice * item.count;
        }, 0).toFixed(2)
      },
      cartLength() {
        return this.cartList.filter(item => item.checked).length;
      },
      allChecked() {
        if (this.cartList.length === 0) return false;

        // return !this.cartList.filter(item => !item.checked).length;

        // return !this.cartList.find(item => !item.checked).length;

          for(let item of this.cartList) {
            if (!item.checked) {
              return false;
            }
          }
          return true;
      }
    },
    methods: {
      allSelect() {
        if (this.allChecked) {
          this.cartList.forEach(item => item.checked = false)
        } else {
          this.cartList.forEach(item => item.checked = true)
        }
      },
      countClick() {
        if (!this.allChecked)
          this.$toast.show('请选择你的商品', 1500)
      }
    }
  }

</script>

<style scoped>
  .cart-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    /*background-color: pink;*/
  }
  .check-botton {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .check-botton .choice {
    margin:0 20px 0 10px;
  }
  .toCount {

    width: 100px;
    line-height: 40px;
    text-align: center;
    background-color: orangered;
    color: #fff;
    font-size: 14px;
  }
</style>