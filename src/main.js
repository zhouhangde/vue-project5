import Vue from 'vue';
import App from './App.vue';

import './style/common.scss';

import { Button } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);


import 'element-ui/lib/theme-chalk/index.css';

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})