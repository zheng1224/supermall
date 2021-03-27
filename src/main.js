import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';
import toast from '@/components/common/toast';


Vue.use(toast);
FastClick.attach(document.body);
Vue.use(VueLazyLoad);

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
