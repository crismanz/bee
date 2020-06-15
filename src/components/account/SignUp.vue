<template>
  <div class="sign-up">
    <p>{{ $t('account.createNew') }}</p>
    <input type="text" v-model="email" :placeholder="$t('account.email')"><br>
    <input type="password" v-model="password" :placeholder="$t('account.password')"><br>
    <button @click="signUp">{{ $t('account.signup') }}</button>
    <span>{{ $t('account.back') }}<router-link :to="$i18nRoute({ name: 'login'})">{{ $t('account.login') }}</router-link>.</span>
  </div>
</template>

 <script>
  import firebase from 'firebase';
  
  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('settings')
            console.log('successful signup')
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
  .sign-up {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>