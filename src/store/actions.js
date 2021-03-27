import {ADD_COUNTER ,ADD_PRODUCT} from './mutations-types';


export default {
  addCart(context, payload) {
    // state.cartList.push(payload);

    // for (let item of state.cartList) {
    //   if (item.iid === payload.iid) {
    //     oldProduct = item;
    //   }
    // }
    // const num = state.cartList.indexOf(payload);

    return new Promise((response, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);

      if(oldProduct) {
        // oldProduct.counter += 1;
        context.commit(ADD_COUNTER, oldProduct);
        response('原来的商品数量+1');
      }else {
        payload.count = 1;
        // state.cartList.push(payload);
        context.commit(ADD_PRODUCT, payload);
        response('商品数量+1');
      }
    })
  }
}