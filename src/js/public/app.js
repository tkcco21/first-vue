import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

import '../../css/global';

import MyPages from '@Public';
import router from '@Public/routes';
import store from '@Public/store';

Vue.use(VueLazyload);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(MyPages),
});
