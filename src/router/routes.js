import { Trans } from '../plugins/Translation'

function loadPage (component) {
  return () => import(`../pages/${component}.vue`)
}

function loadAccount (component) {
  return () => import(`../components/account/${component}.vue`)
}

export default [
  {
    path: '/:lang',
    component: {
      template: '<router-view></router-view>'
    },
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: '',
        name: 'home',
        component: loadPage('Home')
      },
      {
        path: 'about',
        name: 'about',
        component: loadPage('About')
      },
      {
        path: 'settings',
        name: 'settings',
        component: loadPage('Settings'),
        //TODO: only login users should be able to see this page
        // meta: {
        //   requiresAuth: true
        // }
      },
      {
        //TODO: redirect to 404 page or other page
        path: '*',
        component: loadPage('404')
      },
      {
        path: 'login',
        name: 'login',
        component: loadAccount('Login')
      },
      {
        path: 'sign-up',
        name: 'signUp',
        component: loadAccount('SignUp')
      }
    ]
  },
  {
    // Redirect user to supported lang version.
    path: '*',
    redirect (to) {
      return Trans.getUserSupportedLang()
    }
  }
]