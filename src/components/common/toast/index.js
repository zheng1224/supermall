const obj = {};

import Toast from '@/components/common/toast/Toast';
// obj就是toast  在main.js中

obj.install = function (Vue) {

  // 1.创建Toast的组件构造器
  const toastConstructor = Vue.extend(Toast);
  // 2.创建构造器对象
  const toast = new toastConstructor();

  // 为了能够显示在页面上我需要将它添加到body上进行展示
  // 3.将构造器对象挂载到一个div上
  toast.$mount(document.createElement("div"));

  document.body.appendChild(toast.$el);

  Vue.prototype.$toast =  toast;

};

export default obj