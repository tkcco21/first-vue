import Vue from 'vue';
import VueRouter from 'vue-router';

// import Home from '@Public/Pages/Home';
import BookList from '@Public/Pages/BookList';
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
      component: BookList,
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
