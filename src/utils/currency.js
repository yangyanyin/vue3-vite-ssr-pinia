import { useI18n } from 'vue-i18n'
const exchangeRate = [
  {
    iso_code: 'USD',
    self_to_usd_exchange_rate: 1,
    usd_to_self_exchange_rate: 1,
  },
  {
    iso_code: 'JPY',
    self_to_usd_exchange_rate: 0.00625,
    usd_to_self_exchange_rate: 160,
  },
  {
    iso_code: 'HKD',
    self_to_usd_exchange_rate: 0.12195122,
    usd_to_self_exchange_rate: 8.2,
  },
  {
    iso_code: 'CAD',
    self_to_usd_exchange_rate: 0.694444444,
    usd_to_self_exchange_rate: 1.44,
  }
]
export default {
  // 美元转当地货币金额
  uts: (price, option = {}) => {
    return priceCalculation(price, option, 'uts')
  },
  // 当地货币转美元金额
  stu: (price, option = {}) => {
    return priceCalculation(price, option, 'stu')
  },
  // 美元字符串转当地货币字符串
  textUts: (price, option = {}) => {
    return priceCalculation(price, option, 'textUts')
  }
}

const priceCalculation = (price, option = {}, type) => {
  const { n } = useI18n() 
  const locales = option.locales || 'en-US'
  const code = exchangeRate.find(item => item.iso_code === option.iso_code)
  let num = null
  
  if (type === 'uts') {
    price = price * code.usd_to_self_exchange_rate
    num = n(price, 'currency', locales)
  }

  if (type === 'stu') {
    price = price * code.self_to_usd_exchange_rate
    num = n(price, 'currency', locales)
  }

  if (type === 'textUts') {
    if (price !== '' && price.includes('$')) {
      var reg = /(\$\d*(\.\d*|\d*))/g;
      var replaceTxt = price.replace(reg, function (value) {
        var usdAmount = value.slice(1);
        var selfAmount = usdAmount * code.usd_to_self_exchange_rate;
        return n(selfAmount, 'currency', locales)
      })
      num = replaceTxt;
    }
  } 
  return num
}

