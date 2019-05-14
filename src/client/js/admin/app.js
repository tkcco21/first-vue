import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Vuetify from 'vuetify';

import '../../scss/global';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

import MyApp from '@Admin/Pages';
import router from '@Admin/_router';
import store from '@Admin/_store';

Vue.use(VeeValidate);
Vue.use(Vuetify, {
  iconfont: 'mdi',
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(route => route.meta.isPublic);

  if (!isPublic) { //  && !store.state.signedin
    // return next({ path: '/admin/signin', query: { redirect: to.fullPath } });
    return next();
  }
  return next();
});

new Vue({
  el: '#app',
  $_veeValidate: {
    validator: 'new',
  },
  router,
  store,
  render: h => h(MyApp),
});
