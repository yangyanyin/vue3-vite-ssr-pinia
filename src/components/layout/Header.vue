<template>
  <header>
    <RouterLink class="logo" to="/">
      <!-- <img src="../../assets/images/header
       _logo.png" alt=""> -->
    </RouterLink>
  </header>
  <nav>
    <RouterLink :to="item.url" v-for="(item, k) in items" :key="k">
      {{item.name}}
    </RouterLink>
  </nav>
</template>
<script setup>
import { ref } from 'vue'
const nav = [
  {
    name: '首页',
    url: '/'
  },
  {
    name: 'I18n 国际化货币',
    url: '/i18n/currency'
  },
  {
    name: 'I18n 多语言',
    url: '/i18n/lang'
  },
  {
    name: 'Terms',
    url: '/terms'
  },
]
const items = ref(nav)

</script>
<style scoped lang="less">
header {
  padding: 10px 0;
  background: #f7f7f7;
  border-bottom: 1px solid #ddd;
}
.logo {
  display: block;
  width: 200px;
  margin: auto;
  img {
    display: block;
    width: 100%;
  }
}
nav {
  text-align: center;
  padding: 10px 0;
  background: #f7f7f7;
  a {
    margin: 0 20px;
    display: inline-block;
    &.router-link-active {
      color: #ff2556;
    }
  }
}
</style>