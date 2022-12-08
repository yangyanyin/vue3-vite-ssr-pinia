

<template>
  {{counterStore.name}}
  <Layout>
    <router-view ref="pageComponent"></router-view>
  </Layout>
</template>
<script setup>
import { onServerPrefetch, onMounted } from 'vue';
import Layout from './components/layout/Layout.vue'
import product from './stores/modules/product'

const counterStore = product()

onMounted(() => {
  // counterStore.name = 'YYYYY'
})

onServerPrefetch(async () => {
  counterStore.name = 'YYYYY'
  // 组件作为初始请求的一部分被渲染
  // 在服务器上预抓取数据，因为它比在客户端上更快。
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
