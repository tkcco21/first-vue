import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import MyApp from '@Admin/containers';
import routes from '@Admin/routes';
import storeObj from '@Admin/store';

import '../../scss/global';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes,
  mode: 'history',
});
const store = new Vuex.Store(storeObj);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(MyApp),
});
