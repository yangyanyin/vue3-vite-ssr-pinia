<template>
  <Header></Header>
  <main class="container-main" id="container-main">
    <slot></slot>
  </main>
</template>
<script setup>
import Header from './Header.vue'
</script>
<style scoped lang="less">
.container-main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 10px;
  display: block;
  width: 100%;
  outline: none;
}
</style>