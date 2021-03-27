<template>
  <div class="detail-params" v-if="Object.keys(itemParams).length !== 0">
    <table v-for="(item, index) in itemParams.tables" :key="index" class="detail-tables">
      <tr v-for="(tr, indey) in item" :key="indey">
        <td v-for="(td, indez) in tr"  :key="indez">{{td}}</td>
      </tr>
    </table>

    <table class="info-params">
      <tr v-for="(item, index) in itemParams.set" :key="index">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>

    <div class="info-image" v-if="itemParams.image">
      <img :src="itemParams.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailPramasInfo",
    props: {
      itemParams: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-params {
    padding: 20px 10px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .detail-params table {
    width: 100%;
    border-collapse: collapse;
  }
  .detail-params table tr {
    height: 42px;
  }
  .detail-params table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-params tr td:nth-child(1) {
    width: 95px;
  }
  .info-params tr td:nth-child(2) {
    color: #eb4868;
  }
  .info-image img{
    padding: 0;
    width: 100%;
  }
  </style>