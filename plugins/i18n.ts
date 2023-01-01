import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import fr from '../locales/fr.json'
import ja from '../locales/ja.json'

// TODO: Come back to optimzing this
// https://vue-i18n.intlify.dev/guide/integrations/nuxt3.html#optimize-with-intlify-unplugin-vue-i18n
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      fr,
      ja,
    }
  })

  vueApp.use(i18n)
})