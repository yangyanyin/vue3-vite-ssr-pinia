<template>
  <div>
    <h2>网址首页</h2>
    
    <!-- 加载状态 -->
    <div v-if="store.loading">加载中...</div>
    
    <!-- 错误提示 -->
    <div v-if="store.error" style="color: red;">{{ store.error }}</div>
    
    <!-- 数据展示 -->
    <div v-for="brand in store.brands" :key="brand.id">
      <p>{{ brand.name }}</p>
    </div>
  </div>
</template>
<script setup>
import { onServerPrefetch, onMounted } from 'vue'
import { homeStore } from '../../stores/modules/home'

const store = homeStore()

// 服务端预取数据
onServerPrefetch(async () => {
  // 在服务端预先获取数据
  await store.fetchHomeData()
})

// 客户端挂载时检查数据（如果服务端没有数据，客户端请求）
onMounted(async () => {
  // 如果服务端预取失败或者是纯客户端渲染，则在客户端获取数据
  if (store.brands.length === 0 && !store.loading) {
    await store.fetchHomeData()
  }
})
</script>
<style scoped lang="less">
  img {
    display: block;
    width: 100%;
  }
</style>