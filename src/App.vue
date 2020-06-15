<template>
  <div id="app">
    <navigation />
    <switchLang class="lang"/>
    <router-view/>
    <footer id="footer">
      <p>&copy; Copyright {{date()}}</p>
    </footer>
  </div>
</template>

<script>
import switchLang from './components/LanguageSwitcher.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    switchLang,
    Navigation
  },
  methods: {
    date() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#footer {
  position: absolute;
  bottom: 0;
  border-top: 1px solid #dee2e6;
  width: 95%;
  text-align: center;
}
</style>
