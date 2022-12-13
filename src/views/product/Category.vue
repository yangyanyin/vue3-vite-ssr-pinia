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
})
</script>