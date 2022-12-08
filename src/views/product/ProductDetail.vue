<template>
  商品详情
  <br />
  <button @click="changeCount(1)">+</button>
  <input type="text" v-model="count" />
  <button @click="changeCount(2)">-</button>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const changeCount = (n) => {
  if (n === 1) {
    count.value++
  } else {
    count.value--
  }
}
</script>

<style scoped lang="less">
button {
  display: inline-block;
  width: 30px;
  height: 20px;
  background: #ff6487;
  border-radius: 3px;
  color: #fff;
  font-size: 16px;
}
input {
  display: inline-block;
  height: 20px;
  margin: 3px 5px 0;
  padding: 0 5px;
}
</style>
