<template>
  <header>
    <RouterLink class="logo" to="/">
      <img src="../../assets/images/header_logo.png" alt="">
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
    name: 'Category', 
    url: '/category/baby'
  },
  {
    name: 'Product Detail',
    url: '/product/baby-sgs'
  },
  {
    name: 'About Us',
    url: '/about'
  },
  {
    name: 'Terms',
    url: '/terms'
  },
  {
    name: 'Cart',
    url: '/order/cart'
  },
  {
    name: 'Checkouts',
    url: '/order/checkouts'
  }
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