import Home from '@Admin/Pages/Home';
// -- Auth ---
import Signin from '@Admin/Pages/Signin';
// -- Books ---
import Books from '@Admin/Pages/Books';
import BooksForm from '@Admin/Pages/Books/Form';
import BooksList from '@Admin/Pages/Books/List';

export default [
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
    path: '/admin/books',
    component: Books,
    children: [
      {
        name: 'booksList',
        path: '',
        component: BooksList,
      },
      {
        name: 'booksDetail',
        path: ':id',
        component: BooksForm,
      },
      {
        name: 'booksCreate',
        path: 'create',
        component: BooksForm,
      },
    ],
  },
];
