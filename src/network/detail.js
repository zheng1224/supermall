import {request} from './request';

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommendData() {
  return request({
    url: '/recommend'
  })
}

export class GoodsInfo {
  constructor(columns, itemInfo, shopInfo) {
    this.columns = columns;
    this.oldPrice = itemInfo.oldPrice;
    this.price = itemInfo.price;
    this.title = itemInfo.title;
    this.services = shopInfo.services;
    this.discountBgColor = itemInfo.discountBgColor;
    this.discountDesc = itemInfo.discountDesc;
    this.realPrice = itemInfo.lowNowPrice;
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.name = shopInfo.name;
    this.logo = shopInfo.shopLogo;
    this.id = shopInfo.id;
    this.fans = shopInfo.cFans;
    this.goods = shopInfo.cGoods;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
  }
}

export class ItemParams {
  constructor(info, rule) {
    this.image = info.images? info.images[0]: "";
    this.set = info.set;
    this.key = info.key;
    this.tables = rule.tables;
  }
}

export class CommentInfo  {
  constructor(commentInfo) {
    this.avatar = commentInfo.user.avatar;
    this.uname = commentInfo.user.uname;
    this.content = commentInfo.content;
    this.created = commentInfo.created;
    this.style= commentInfo.style;

  }
}