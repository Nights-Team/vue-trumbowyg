'use strict';

import Vue from 'vue';

Vue.config.productionTip = false;

// vee-validate is just for demo
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

//  jQuery is required by bootstrap to work
window.$ = window.jQuery = require('jquery');
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App),
  created() {
    console.log('Main app created');
  },
  mounted() {
    console.log('Main app mounted');
  },
});
