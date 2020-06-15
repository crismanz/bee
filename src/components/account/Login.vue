<template>
  <div class="login">
    <h3>{{ $t('account.signup') }}</h3>
    <input type="text" v-model="email" :placeholder="$t('account.email')"><br>
    <input type="password" v-model="password" :placeholder="$t('account.password')"><br>
    <button @click="login">{{ $t('account.login') }}</button>
    <p>{{ $t('account.new') }}
      <router-link :to="$i18nRoute({ name: 'signUp'})">{{ $t('account.create') }}</router-link></p>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import currentUser from '../firebase/firebase.js'

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('about')
            console.log('successful login', this.email)
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>