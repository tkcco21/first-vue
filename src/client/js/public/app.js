import Vue from 'vue';

import '../../scss/global';

import MyApp from '@Public/Pages';
import router from '@Public/_router';
import store from '@Public/_store';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(MyApp),
});
