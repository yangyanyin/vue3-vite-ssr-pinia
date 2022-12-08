import { defineStore } from 'pinia'
import ssddd from '../../api/index'

// export const useAboutStore = defineStore('product', {
export default defineStore('product', {
  state: () => {
    return {
      sss: 1,
      count: 3,
      age: 0.4,
      name: '',
      hotWordsList: []
    }
  },
  actions: {
    async getHotWords () {
      await ssddd.searchesHotWords().then(res => {
        console.log(res.data, 'product.js')
        this.hotWordsList = res.data
        
      }).catch(e => {})
    }
  }
})


export const useNewProduct = defineStore('newProduct', {
  state: () => {
    return {
      sss: 1,
      count: 3,
      age: 0.4,
      name: '',
      hotWordsList: []
    }
  },
})