<template>
  <div class="languageSwitcher">
    <select @change="changeLang($event)">
      <option v-for="lang in languages" :key="lang">
      {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data: () => ({ languages: ['en', 'de', 'it'] }),
  methods: {
    changeLang(event) {
      this.$i18n.locale = event.target.value
    }
  }
}
</script>
