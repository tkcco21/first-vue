import Vue from 'vue';
import ja from 'vee-validate/dist/locale/ja';
import VeeValidate, { Validator } from 'vee-validate';
import Vuetify from 'vuetify';

import '../../css/global';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons';

import MyApp from '@Admin';
import router from '@Admin/routes';
import store from '@Admin/store';

Vue.use(VeeValidate);
Validator.localize('ja', ja);
Vue.use(Vuetify, {
  iconfont: 'mdi',
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(route => route.meta.isPublic);

  if (!isPublic && !store.state.auth.token) {
    return next({
      path: '/admin/signin',
      query: { redirect: to.fullPath },
    });
    // NOTE: クロスドメインだとcookieの登録ができなかったので、この部分は意味ないのでコメントアウト。
    // TODO: 要修正。ただクライアントのJSではcookieは触りたくない。
    // return store.dispatch('auth/checkToken')
    //   .then(() => next())
    //   .catch(() => next({
    //     path: '/admin/signin',
    //     query: { redirect: to.fullPath },
    //   }));
  }
  return next();
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(MyApp),
});
