import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@Public/components/Home';
import Books from '@Public/components/Books';

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
      path: '/books',
      component: Books,
    },
  ],
});
