<template>
  商品分类
  <br />
  <p v-for="(item, k) in counterStore.hotWordsList" :key="k">
    {{item.word}}
  </p>
</template>
<script setup>
import { ref, inject, onServerPrefetch, onMounted, watchEffect} from 'vue'
import { useNewProduct } from '../../stores/modules/product'
import axios from 'axios'
import headSeo from '@/utils/headSeo'
const counterStore = useNewProduct()


onMounted (async () => {
})

watchEffect (() => {
})


const fetchOnServer = async () => {
  await axios.get('https://api.patpat.com/v2/searches/hot_words').then(res => {
    counterStore.hotWords = res.data.data.new_hot_words
  })
  // counterStore.name = 'YYYYY'
  // Promise.all([])
}
onServerPrefetch(async () => {
  // counterStore.name = 'YYYYY'
  // 组件作为初始请求的一部分被渲染
  // 在服务器上预抓取数据，因为它比在客户端上更快。
  // await fetchOnServer()
  const option = {
    title: '服务端渲染 (SSR) SEO',
    keywords: 'SSR VUE VITE Pinia',
    description: 'Vue.js 是一个用于构建客户端应用的框架。默认情况下，Vue 组件的职责是在浏览器中生成和操作 DOM。然而，Vue 也支持将组件在服务端直接渲染成 HTML 字符串，作为服务端响应返回给浏览器，最后在浏览器端将静态的 HTML“激活”(hydrate) 为能够交互的客户端应用。'
  }
  headSeo(option)
})
</script>