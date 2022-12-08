<!-- <template>
  隐私政策
  {{store.name}}
</template>
<script setup>
import { ref, onServerPrefetch, onMounted } from 'vue'
// import { product } from '../../stores/modules/product'
// const store = product()

onMounted(() => {
  store.name = 'yyy'
})



const fetchOnServer = async () => {
  await setTimeout(() => {
    store.name = 'yyy'
  })
  // store.name = 'yyy'
  Promise.all([])
}

onServerPrefetch(async () => {
  
  await fetchOnServer()
})
</script> -->
<template>
  sssd
</template>