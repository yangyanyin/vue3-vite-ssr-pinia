<template>
  <button @click="changeLangs('zh')">切换语言: zh</button>
  <button @click="changeLangs('en')">切换语言: en</button>
  <p></p>
  <p>{{$t('hello')}}</p>
  <p>{{$t('Become_a_member_to_enjoy_a_special_discount')}}</p>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const changeLangs = (lang) => {
  locale.value = lang
}

</script>
<style lang="less">
button {
  margin-right: 10px;
  padding: 5px 10px;
  background: #3598dc;
  border-radius: 5px;
  color: #fff;
  transition: .4s;
  &:hover {
    background: #1c74b1;
  }
}
</style>