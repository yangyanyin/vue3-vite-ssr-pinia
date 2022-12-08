import {
  createRouter as _createRouter,
  createMemoryHistory,
  createWebHistory
} from 'vue-router'

import HomeView from '../views/home/Index.vue'
import product from './product/index'
import checkouts from './checkouts/index'
import article from './article/index'

const home = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

// Auto generates routes from vue files under ./pages
// // https://vitejs.dev/guide/features.html#glob-import
// const pages = import.meta.glob('./pages/*.vue')
// const routes = Object.keys(pages).map((path) => {
//   const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
//   return {
//     path: name === '/home' ? '/' : name,
//     component: pages[path] // () => import('./pages/*.vue')
//   }
// })
export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory('/') : createWebHistory('/'),
    routes: [...home, ...product, ...checkouts, ...article]
  })
}
