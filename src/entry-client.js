import { createApp } from './main'

const { app, router, pinia } = createApp()
console.log(pinia.state.value, 'pinia')
if (window.__INITIAL_STATE__) {
  pinia.state.value = window.__INITIAL_STATE__
}
// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#app')
})