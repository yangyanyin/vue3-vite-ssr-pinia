import { defineStore } from 'pinia'
import ssddd from '../api/index'

export const product = defineStore('product', {
  state: () => {
    return {
      sss: 1,
      count: 3,
      age: 0.4,
      name: 'yjy',
      hotWords: []
    }
  },
  getters: {

  },
  actions: {
    async sdssdasda () {
      this.sss = '111asdas'
      await ssddd.searchesHotWords().then(res => {
        console.log(res.data, 'product.js')
        this.sss = res.data
      }).catch(e => {})
    }
  }
})