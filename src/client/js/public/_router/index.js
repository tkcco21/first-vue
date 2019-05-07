import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@Public/Pages/Home';
import Books from '@Public/Pages/Books';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '',
      component: Home,
    },
    {
      name: 'books',
      path: '',
      component: Books,
    },
  ],
});
