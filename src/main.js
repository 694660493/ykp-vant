import Vue from 'vue'
import 'es6-promise/auto';
import "babel-polyfill";
import 'lib-flexible/flexible';
import './assets/css/main.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App'
import router from './router'
import axios from './api/ajax.js';
import url from './api/url';
import invoiceTop from './components/invoiceTop/invoiceTop'
import invoiceDetailItems from "./components/invoiceDetailItems/invoiceDetailItems"
import invoiceDetailArr from "./components/invoiceDetailArr/invoiceDetailArr"
import {
  removeItem
} from './utils/utils';
Vue.use(require('vue-wechat-title'));
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$ajax = axios;
Vue.prototype.$url = url;
Vue.prototype.toast = toast;
Vue.component("invoiceTop",invoiceTop) //定义全局组件 invoiceTop
Vue.component("invoiceDetailItems",invoiceDetailItems) //定义全局组件 invoiceDetailItems
Vue.component("invoiceDetailArr",invoiceDetailArr) //定义全局组件 invoiceDetailArr
router.beforeEach((to, from, next) => {
  if (to.name === null) {
    from.name ? next({
      name: from.name
    }) : next('/');
  } else if (to.name == 'login') {
    removeItem('userInfo')
    next();
  } else {
    next(); //如果匹配到正确跳转
  }
});

//提示框组件扩展
function toast(opt) {
  if (opt && typeof opt === 'string') {
    this.$toast({
      message: opt,
      mask: true
    });
    return;
  }
  let option = Object.assign({
    message: 'toast',
    duration: 2000,
    degradeTime: 1000,
    mask: true,
    callback: function () {}
  }, opt);
  this.$toast(option);
  let clock = setTimeout(function () {
    option.callback.call(this, option);
    clearTimeout(clock);
  }, option.duration + option.degradeTime);

};
window.onresize = setHtmlFontSize();

function setHtmlFontSize() {
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  const htmlDom = document.getElementsByTagName('html')[0];
  htmlDom.style.fontSize = htmlWidth / 10 + 'px';
};
setHtmlFontSize();
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
