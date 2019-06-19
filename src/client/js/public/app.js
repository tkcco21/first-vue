import Vue from 'vue';

import '../../css/global';

import MyPages from '@Public';
import router from '@Public/_router';
import store from '@Public/_store';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(MyPages),
});
