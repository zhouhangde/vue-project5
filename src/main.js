import say from './util';

say();

import Vue from 'vue';
import './style/common.scss';

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

