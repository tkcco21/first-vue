import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@Admin/Pages/Home';
// -- Auth ---
import Signin from '@Admin/Pages/Signin';
// -- Books ---
import { BooksForm, BooksList } from '@Admin/Pages/Books';


Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/admin',
      component: Home,
    },
    {
      name: 'signin',
      path: '/admin/signin',
      component: Signin,
      meta: { isPublic: true },
    },
    {
      name: 'booksList',
      path: '/admin/books',
      component: BooksList,
    },
    {
      name: 'booksForm',
      path: '/admin/books/post',
      component: BooksForm,
    },
  ],
});
