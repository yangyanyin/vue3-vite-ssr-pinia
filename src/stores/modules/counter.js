import { defineStore } from 'pinia'
import { product } from './product'

export default defineStore('counter', {
  state: () => {
    return { 
      count: 1,
      name: 'YJY',
      age: 1,
      product: product()
    }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => {
      return state.count * 3
    },
    doubleCountPlusOne () {
      return this.doubleCount / 3
    }
  },
  actions: {
    increment() {
      console.log(1)
      this.count++
      this.name = 'YYY'
    },
    async registerUser(login, password) {
      try {
        this.userData = await api.post({ login, password })
        showTooltip(this.userData.name)
      } catch (error) {
        showTooltip(error)
        // 让表单组件显示错误
        return error
      }
    }
  },
})