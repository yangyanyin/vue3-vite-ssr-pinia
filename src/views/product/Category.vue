<template>
  商品分类
  <br />
  <p>{{counterStore.name}}</p>
  <p v-for="(item, k) in counterStore.hotWords" :key="k">
    {{item.word}}
  </p>
</template>
<script setup>
import { ref, inject, onServerPrefetch, onMounted, watchEffect} from 'vue'
import product from '../../stores/modules/product'
import axios from 'axios'
const counterStore = product()
console.log(112323)

const getSearchesHotWords = () => {
  inject('$httpApi').searchesHotWords().then(res => {
    if (res.code === 200) {
      counterStore.hotWords = res.data.new_hot_words
    }
  }).catch(e => {})
} 


onMounted (async () => {
  // if (!HotWords.value) {
  //   getSearchesHotWords()
  //   // 如果数据在挂载时为空值，这意味着该组件
  //   // 是在客户端动态渲染的。将转而执行
  //   // 另一个客户端侧的抓取请求
  // }
})

watchEffect (() => {
  if (!import.meta.env.SSR) {
    getSearchesHotWords()
  }
  // getSearchesHotWords()
})


const fetchOnServer = async () => {
  await axios.get('https://api.patpat.com/v2/searches/hot_words').then(res => {
    counterStore.hotWords = res.data.data.new_hot_words
  })
  // counterStore.name = 'YYYYY'
  Promise.all([])
}
onServerPrefetch(async () => {
  counterStore.name = 'YYYYY'
  // 组件作为初始请求的一部分被渲染
  // 在服务器上预抓取数据，因为它比在客户端上更快。
  await fetchOnServer()
})
</script>