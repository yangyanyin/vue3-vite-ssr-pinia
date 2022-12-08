
import { createSSRApp } from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import apiIndex from '../src/api/index'
// import createStore from './stores/store'
import { createPinia } from 'pinia'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {

  const app = createSSRApp(App)
  // const pinia = createStore()
  const pinia = createPinia()
  const router = createRouter()
  app.provide('$httpApi', apiIndex);
  app.use(pinia)
  app.use(router)
  
  // const initialState = {}
  // if (import.meta.env.SSR) {
  //   initialState.pinia = pinia.state.value
  // } else {
  //   pinia.state.value = window.__INITIAL_STATE__
  // }

  return { app, router, pinia }
}
