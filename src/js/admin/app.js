import Vue from 'vue';
import ja from 'vee-validate/dist/locale/ja';
import VeeValidate, { Validator } from 'vee-validate';
import Vuetify from 'vuetify';

import '../../css/global';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

import MyApp from '@Admin/Pages';
import router from '@Admin/_router';
import store from '@Admin/_store';

Vue.use(VeeValidate);
Validator.localize('ja', ja);
Vue.use(Vuetify, {
  iconfont: 'mdi',
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(route => route.meta.isPublic);

  if (!isPublic && !store.state.auth.token) {
    return store.dispatch('auth/checkToken')
      .then(() => next())
      .catch(() => next({
        path: '/admin/signin',
        query: { redirect: to.fullPath },
      }));
  }
  return next();
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(MyApp),
});
