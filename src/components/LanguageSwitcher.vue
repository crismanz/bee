<template>
  <div class="languageSwitcher">
    <div>
      <button v-for="lang in languages" :key="lang" value="lang" @click="changeLang(lang)">
      {{ lang }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data: () => ({ languages: ['en', 'de', 'it'] }),
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
