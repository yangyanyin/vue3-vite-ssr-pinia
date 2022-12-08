<!-- <template>
  购物车
  {{store.count}}<br />
  {{store.name}}<br />
  {{store.age}}
  <br />
  <button @click="changeCount">变更 count</button>
  <button @click="resetCount">重置 count</button>
</template>
<script setup>
import { useCounterStore } from '../../stores/modules/product'
// import { storeToRefs } from 'pinia';
const store = useCounterStore()
// const { count, name, age } = storeToRefs(store)
const changeCount = () => {
  // store.count++
  store.$patch({
    count: store.count + 1,
    age: 120,
    name: 'DIO',
  })
  store.increment()

}
const resetCount = () => {
  store.$reset()
}
</script>
<style scoped lang="less">
button {
  display: block;
  width: 100px;
  height: 30px;
  margin-top: 20px;
  border-radius: 5px;
  color: #fff;
  background: #707070;
}
</style> -->
<template>
  购物车
</template>