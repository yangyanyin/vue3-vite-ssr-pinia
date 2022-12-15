<script>

const currencyMap = {
  currency: {},
  countryCurrency: {},
  countryLangs: {}
}

const currencyMantissa = {}

const localChangeCurrency = {}

// locales 映射类型，支持自定义传参
import { h } from 'vue'
import { useI18n } from 'vue-i18n'
export default {
  props: {
    price: Number,
    locales: String
  },
  setup(props) {
    const { n } = useI18n() 
    const price = props.price
    const locales = props.locales || 'en-US'
    const num = n(price, 'currency', locales)
    console.log(num, 'num')
    return () => h('i', {
      style: {
        color: 'red'
      }
    }, num)
  }
}
</script>