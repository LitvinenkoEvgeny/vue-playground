import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import UserInfo from '../views/UserInfo';
import EditUser from '../views/Edit';
import Login from '../views/Login.vue';

import { isLoggedIn } from '../vue-apollo';

Vue.use(VueRouter);

const loginGuard = async (to, from, next) => {
  const isUserLoggedIn = await isLoggedIn();

  if (to.name !== 'Login' && !isUserLoggedIn) {
    return next({ name: 'Login' });
  }

  if (to.name === 'Login' && isUserLoggedIn) {
    return next({ name: 'Home' });
  }

  next();
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:id',
    name: 'view',
    props: true,
    component: UserInfo,
  },
  {
    path: '/edit/:id',
    name: 'edit',
    props: true,
    component: EditUser,
  },
  { path: '/login', name: 'Login', component: Login },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(loginGuard);

export default router;
