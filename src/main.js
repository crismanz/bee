import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import { i18n } from './plugins/i18n'
import { Trans } from './plugins/Translation'
import { currentUser } from './components/firebase/firebase'
const fb = require('./components/firebase/firebase.js')

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

Vue.config.productionTip = false

let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      i18n,
      render: h => h(App)
    })
  }
})

