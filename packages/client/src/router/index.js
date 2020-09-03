import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

import { isLoggedIn } from '../vue-apollo';

Vue.use(VueRouter);

const loginGuard = async (to, from, next) => {
  const isUserLoggedIn = await isLoggedIn();

  if (to.name !== 'Login' && !isUserLoggedIn) {
    return next({ name: 'Login' });
  }

  next();
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { path: '/login', name: 'Login', component: Login },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(loginGuard);

export default router;
