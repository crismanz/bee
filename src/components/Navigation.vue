<template>
  <div class="nav">
    <router-link :to="$i18nRoute({ name: 'home'})">
      Home
    </router-link>
    <router-link :to="$i18nRoute({ name: 'about'})">
      About
    </router-link>
  </div>
</template>

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