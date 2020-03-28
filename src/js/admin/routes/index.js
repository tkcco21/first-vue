import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '@Admin/pages/App';
// -- Home ---
import Home from '@Admin/pages/Home';
// -- Auth ---
import Signin from '@Admin/pages/Signin';
// -- Books ---
import Books from '@Admin/pages/Books';
import BooksList from '@Admin/pages/Books/List';
import BookForm from '@Admin/pages/Books/Form';
import BookDetails from '@Admin/pages/Books/Details';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'signin',
      path: '/admin/signin',
      component: Signin,
      meta: { isPublic: true },
    },
    {
      path: '/admin',
      component: App,
      children: [
        {
          name: 'home',
          path: '',
          component: Home,
        },
        {
          path: 'books',
          component: Books,
          children: [
            {
              name: 'booksList',
              path: '',
              component: BooksList,
            },
            {
              name: 'bookForm',
              path: 'post',
              component: BookForm,
            },
            {
              name: 'bookDetail',
              path: ':id',
              component: BookDetails,
            },
          ],
        },
      ],
    },
  ],
});
