// import { createPinia } from 'pinia'
// const modules = import.meta.glob('./modules/*.js')

// export const createStore = () => {
//   const pinia = createPinia()

//   // https://pinia.vuejs.org/ssr/#using-the-store-outside-of-setup
//   Object.keys(modules).forEach((name) => {
//     const useModule = modules[name]
//     useModule(pinia)
//   })
//   return pinia
// }

import { createPinia } from 'pinia'
import product from './modules/product'
export default () => {
    const pinia = createPinia()
    product(pinia)
    return pinia
}