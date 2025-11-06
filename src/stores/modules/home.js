import { defineStore } from 'pinia'
import { homeData } from '../../api/index'

export const homeStore = defineStore('homeStore', {
  state: () => {
    return {
      brands: [],
      loading: false,
      error: null
    }
  },
  actions: {
    // 获取首页数据
    async fetchHomeData(params = {}) {
      this.loading = true
      this.error = null
      try {
        const res = await homeData()
        
        // 调试：查看响应数据类型和内容
        console.log('响应数据:', res)
        
        // 根据实际 API 返回的数据结构调整
        if (res && res.data) {
          // 如果返回的数据有 brands 字段，使用 brands
          // 否则使用整个 data
          this.brands = res.data.brands || res.data
        } else if (Array.isArray(res)) {
          // 如果直接返回数组
          this.brands = res
        }
        
        return res
      } catch (error) {
        console.error('获取首页数据失败:', error)
        this.error = error.message || '获取数据失败'
        // 如果请求失败，使用默认数据（可选）
        this.brands = [{id: 1, name: '品牌1'}, {id: 2, name: '品牌2'}, {id: 3, name: '品牌3'}]
      } finally {
        this.loading = false
      }
    }
  }
})