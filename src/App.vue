

<template>
  <Layout>
    <router-view ref="pageComponent"></router-view>
  </Layout>

</template>
<script setup>
import { onServerPrefetch, getCurrentInstance } from 'vue';
import Layout from './components/layout/Layout.vue'
import { useNewProduct } from './stores/modules/product'
import axios from 'axios'
const { proxy: { $headSeo } } = getCurrentInstance()
const counterStore = useNewProduct()



const fetchOnServer = async () => {
  await axios.get('https://api.patpat.com/v2/searches/hot_words').then(res => {
    counterStore.hotWordsList = res.data.data.new_hot_words
  })
  // counterStore.name = 'YYYYY'
  // Promise.all([])
}
onServerPrefetch(async () => {
  // 组件作为初始请求的一部分被渲染
  // 在服务器上预抓取数据，因为它比在客户端上更快。
  $headSeo()
  await fetchOnServer()
})
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  font-style: normal;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  a {
    color: #444;
    &:focus{
      outline: none;
    }
    &:hover {
      color: #ff2556;
    }
  }
  a,
  input,
  button,
  textarea,
  [class*='pui-'] {
    &:focus {
      outline: none;
    }
  }
  button {
    background: none;
    border: none;
    outline: none;
  }
}
</style>
