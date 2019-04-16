import Vue from 'vue';

import '../../scss/global';

import MyApp from '@Admin/Pages';
import router from '@Admin/_router';
import store from '@Admin/_store';

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
  router,
  store,
  render: h => h(MyApp),
});
