<template>
  <div class="languageSwitcher">
    <select @change="changeLang($event)">
      <option 
        v-for="lang in supportedLanguages" 
        :key="lang" 
        :selected="isCurrentLanguage(lang)" 
        :class="{ 'is-selected': isCurrentLanguage(lang) }"
         :value="lang">
      {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
import { Trans } from '../plugins/Translation'

export default {
  name: 'LanguageSwitcher',
  computed: {
    supportedLanguages () {
      return Trans.supportedLanguages
    },
    currentLanguage () {
      return Trans.currentLanguage
    }
  },
  methods: {
    changeLang(event) {
      const lang = event.target.value
      const to = this.$router.resolve({ params: { lang } })
      return Trans.changeLang(lang).then(() => {
        this.$router.push(to.location)
      })
    },
    isCurrentLanguage (lang) {
      return lang === this.currentLanguage
    }
  }
}
</script>
