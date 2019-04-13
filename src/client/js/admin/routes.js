import Sample from '@Admin/containers/Sample';
import Home from '@Admin/containers/Home';
import SignIn from '@Admin/containers/SignIn';
import SignOut from '@Admin/containers/SignOut';
import SignUp from '@Admin/containers/SignUp';

const routes = [
  {
    name: 'home',
    path: '/admin',
    component: Home,
  },
  {
    name: 'sample',
    path: '/admin/sample',
    component: Sample,
  },
  {
    name: 'signin',
    path: '/admin/signin',
    component: SignIn,
  },
  {
    name: 'logout',
    path: '/admin/signout',
    component: SignOut,
  },
  {
    name: 'signup',
    path: '/admin/signup',
    component: SignUp,
  },
];

export default routes;
