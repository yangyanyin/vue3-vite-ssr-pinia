<template>
  <p>
    en-US: <Currency :price="12.3463213" locales="en-US" />
  </p>
  <p>
    zh-HK: <Currency :price="324.43" locales="zh-HK" />
  </p>
  <p>
    ja-JP: <Currency :price="34533.45" locales="ja-JP"/>
  </p>
  <p>
    en-CA: <Currency :price="34533.45" locales="en-CA"/>
  </p>
  <p>
    默认: <Currency :price="2324.55"/>
  </p>
</template>