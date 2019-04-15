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

router.beforeEach((to, from, next) => {
  const publicPageArray = routes.filter(route => route.meta && route.meta.isPublic);
  const authRequired = !publicPageArray.some(page => page.name === to.name);

  if (authRequired && !store.state.loggedIn) {
    next({ path: '/admin/signin', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(MyApp),
});
