import { createI18n } from 'vue-i18n'
import numberFormats from './numberFormats'
import lang from './lang'
const i18n = createI18n({
  locale: 'en',
  numberFormats,
  legacy: false,
  messages: lang
})
export default i18n