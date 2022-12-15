
import { createSSRApp } from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import apiIndex from '../src/api/index'
import { createPinia } from 'pinia'
import i18n from './i18n/index'
import Currency from './utils/currency'




// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const pinia = createPinia();
  const app = createSSRApp(App)
  const router = createRouter()
  app.provide('$httpApi', apiIndex);
  app.use(pinia)
  app.use(router)
  app.use(i18n)
  app.config.globalProperties.$currency = Currency
  return { app, router, pinia }
}
