import Vue from 'vue';
import App from './App.vue';

import './style/common.scss';

import { Button } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);


import 'element-ui/lib/theme-chalk/index.css';

import vueRouter from 'vue-router';

import vueRouterConfig from './router/vueRouterConfig.js'

import axios from 'axios'

Vue.use(vueRouter);
Vue.prototype.$http=axios;
const router = new vueRouter({  //实例化router
  routes:vueRouterConfig
});

 const app = new Vue({
  template: '<App/>',
  components: { App },
  // 设置默认的值lang为空，否则报错
  data: {
    lang : {}
  },
  router
}).$mount('#app');