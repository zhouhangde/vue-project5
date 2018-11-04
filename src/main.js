import getData from './util';
import Vue from 'vue';

import './style/common.scss';

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    async fetchData() {
      const data = await getData();
      this.message = data;
    }
  },
  created() {
    this.fetchData();
  }
});