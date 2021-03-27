import {ADD_COUNTER ,ADD_PRODUCT} from './mutations-types';


export default {
  [ADD_COUNTER](state, payload) {
    payload.count += 1;
  },
  [ADD_PRODUCT](state, payload) {
    payload.checked = true;
    state.cartList.push(payload)
  }
}