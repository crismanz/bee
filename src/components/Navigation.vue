<template>
  <div class="nav">
    <router-link :to="$i18nRoute({ name: 'home'})">
      {{ $t('home.nav') }}
    </router-link>
    <router-link :to="$i18nRoute({ name: 'about'})">
      {{ $t('about.nav') }}
    </router-link>
    <router-link :to="$i18nRoute({ name: 'settings'})">
      {{ $t('settings.nav') }}
    </router-link>
    <router-link :to="$i18nRoute({ name: 'login'})">
      {{ $t('account.login') }}
    </router-link>
    <router-link :to="$i18nRoute({ name: 'signUp'})">
      {{ $t('account.signup') }}
    </router-link>
    <button @click="logout">{{ $t('account.logout') }}</button>
  </div>
</template>

<script>
import firebase, { auth } from 'firebase'

export default {
  name: 'navigation',
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        alert('Successfully logged out')
      })
    }
  }
}
</script>

<style>
.nav {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
.nav a {
  text-decoration: none;
  font-weight: bold;
  color: #535353;
  margin: 0 .5rem;
}
.nav a:hover {
  color: #333;
}
</style>