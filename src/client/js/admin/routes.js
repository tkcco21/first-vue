import Home from '@Admin/containers/Home';
// -- Auth ---
import SignIn from '@Admin/containers/Auth/SignIn';
// import SignUp from '@Admin/containers/Auth/SignUp';
// -- Books ---
import Books from '@Admin/containers/Books';
import BooksForm from '@Admin/containers/Books/Form';
import BooksList from '@Admin/containers/Books/List';

const routes = [
  {
    name: 'home',
    path: '/admin',
    component: Home,
  },
  {
    name: 'signin',
    path: '/admin/signin',
    component: SignIn,
    meta: { isPublic: true },
  },
  // {
  //   name: 'signup',
  //   path: '/admin/signup',
  //   component: SignUp,
  //   meta: { isPublic: true },
  // },
  {
    // name: 'books',
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

export default routes;
