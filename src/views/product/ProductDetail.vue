<template>
  <p>美元转当地货币: 12.3463213</p>
  <p>{{ $currency.uts(12.3463213, { locales: 'en-US', iso_code: 'USD' }) }}</p>
  <p>{{ $currency.uts(12.3463213, { locales: 'zh-HK', iso_code: 'HKD' }) }}</p>
  <p>{{ $currency.uts(12.3463213, { locales: 'ja-JP', iso_code: 'JPY' }) }}</p>
  <p>{{ $currency.uts(12.3463213, { locales: 'en-CA', iso_code: 'CAD' }) }}</p>
  <br />
  <p>当地货币转美元: 2342435.234</p>
  <p>{{ $currency.stu(2342435.234, { locales: 'en-US', iso_code: 'USD' }) }}</p>
  <p>{{ $currency.stu(2342435.234, { locales: 'zh-HK', iso_code: 'HKD' }) }}</p>
  <p>{{ $currency.stu(2342435.234, { locales: 'ja-JP', iso_code: 'JPY' }) }}</p>
  <p>{{ $currency.stu(2342435.234, { locales: 'en-CA', iso_code: 'CAD' }) }}</p>
  <br />
  <p>美元字符串转当地货币字符串: $12.343</p>
  <p>{{ $currency.textUts('当前商品价格: $12.343', { locales: 'en-US', iso_code: 'USD' }) }}</p>
  <p>{{ $currency.textUts('当前商品价格: $12.343', { locales: 'zh-HK', iso_code: 'HKD' }) }}</p>
  <p>{{ $currency.textUts('当前商品价格: $12.343', { locales: 'ja-JP', iso_code: 'JPY' }) }}</p>
  <p>{{ $currency.textUts('当前商品价格: $12.343', { locales: 'en-CA', iso_code: 'CAD' }) }}</p>
</template>
<script setup>
import { onServerPrefetch, getCurrentInstance} from 'vue'
const { proxy: { $headSeo } } = getCurrentInstance()


onServerPrefetch(() => {
  const option = {
    title: 'Vue I18n',
    keywords: 'SSR VUE VITE Pinia I18n',
    description: 'Vue I18n 是 Vue.js 的国际化插件。它可以轻松地将一些本地化功能集成到你的 Vue.js 应用程序中。'
  }
  $headSeo(option)
})

</script>