import Sample from 'AdminContainers/Sample';
import Home from 'AdminContainers/Home';
import SignIn from 'AdminContainers/SignIn';
import SignOut from 'AdminContainers/SignOut';
import SignUp from 'AdminContainers/SignUp';

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
