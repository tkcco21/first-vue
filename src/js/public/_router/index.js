import Vue from 'vue';
import VueRouter from 'vue-router';

// import Home from '@Public/Pages/Home';
import Books from '@Public/Pages/Books';
import BookDetail from '@Public/Pages/BookDetail';
import NotFound from '@Public/Pages/NotFound';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    // {
    //   name: 'home',
    //   path: '',
    //   component: Home,
    // },
    {
      name: 'books',
      // path: '/books',
      path: '',
      component: Books,
    },
    {
      name: 'bookDetail',
      path: '/books/:id',
      component: BookDetail,
    },
    {
      name: 'notfound',
      path: '/*',
      component: NotFound,
    },
  ],
});
