import Vue from "vue";
import App from "./App.vue";
import emitter from "./mixins/emitter";
import Bus from './utils/bus';
import create from './utils/create';
import router from './router'
import store from './store'
import './icons/index'
import './permission'
import vp from './directive/permission'
import './plugins/element.js'

Vue.config.productionTip = false;
Vue.mixin(emitter);
Vue.prototype.$bus = new Bus();
Vue.prototype.$create = create;
Vue.directive('permission', vp);

new Vue({
  data: {
    bar: 'bar'
  },

  router, // 配置router实例
  store,
  render: h => h(App)
}).$mount("#app");
