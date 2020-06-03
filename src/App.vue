<template>
  <div id="app">
    <navigation />
    <switchLang class="lang"/>
    <router-view/>
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
</style>
