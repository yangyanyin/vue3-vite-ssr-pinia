

<template>
  <Layout>
    <router-view ref="pageComponent"></router-view>
  </Layout>

</template>
<script setup>
import { onServerPrefetch } from 'vue';
import Layout from './components/layout/Layout.vue'



const fetchOnServer = async () => {
  // console.log(2222)
}
onServerPrefetch(async () => {
  // 组件作为初始请求的一部分被渲染
  // 在服务器上预抓取数据，因为它比在客户端上更快。
  // await fetchOnServer()
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
