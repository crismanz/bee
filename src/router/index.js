import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history',
  base: __dirname,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { x: 0, y: 0 }
  }
})

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) next('login');
//   else if (!requiresAuth && currentUser) next('settings');
//   else next();
// })

export default router;