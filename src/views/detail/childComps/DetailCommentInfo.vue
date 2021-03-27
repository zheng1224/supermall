<template>
  <div class="detail-comment">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多
        <img class="header-img" src="@/assets/img/common/arrow.svg" alt="">
      </div>
    </div>

    <div class="user-info">
      <img :src="commentInfo.avatar" alt="">
      <span>{{commentInfo.uname}}</span>
    </div>

    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>

    <div class="info-img" v-if="commentInfo.images !== 0">
      <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" alt="">
    </div>
  </div>
</template>

<script>
  import {formatDate} from '@/common/util';

  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        const date = new Date(value * 1000);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
      }
    }
  }
</script>

<style scoped>
  .detail-comment {
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f5f2f8;
  }
  .info-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
  }
  .header-title {
    float: left;
    font-size: 15px;
  }
  .header-more {
    float: right;
    margin-right: 10px;
    font-size: 13px;
  }
  .header-more .header-img {
    position: relative;
    top: 4px;
    width: 18px;
    height: 18px;
    background-color: #bbb;
  }
  .user-info {
    display: flex;
    align-items: center;
    padding: 10px 0 5px;
  }
  .user-info img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .user-info span {
    font-size: 15px;
    margin-left: 10px;
  }
  .info-detail {
    padding: 0 5px 15px;
  }
  .info-detail p {
    font-size: 16px;
    line-height: 1.5;
    color: #777;
  }
  .info-other {
    padding: 10px 0;
    font-size: 14px;
    color: #aaa;
  }
  .info-other .date {
    margin-right: 10px;
  }

  .info-img img {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }
</style>