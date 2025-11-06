
/*
--使用方法--
已在main.js全局挂载，在页面调用
import { getCurrentInstance} from 'vue'
const { proxy: { $headSeo } } = getCurrentInstance()
$headSeo(option = {})
--参数--
option 对象
tdkSite 字符串，patpat + 站点
*/
const tdkSite = () => {
  const site = 'us'
  return `PatPat ${site}`
}

// import { useNewProduct } from '@/stores/modules/product'
import { useSSRContext } from 'vue'
export default (option = {}) => {
  const ctx = useSSRContext()
  // const counterStore = useNewProduct()
  // 默认 TKD
  const t = option.title || `嬰童服飾，嬰幼兒用品和親子裝在線購物 | ${tdkSite()}`
  const k = option.keywords || `${tdkSite()}, PatPat Hong Kong, 嬰兒服飾，小童服飾，中大童服飾，親子服飾，嬰兒用品，兒童服飾，童裝，patpat在線商店，童鞋`
  const d = option.description || `在${tdkSite()}選購嬰兒和兒童的優質童裝和鞋襪配飾，親子裝，孕哺裝和家居用品等。每週超值折扣等你享！可愛設計，每日上新，質量保證，低門檻包郵，快速運達。`
  // console.log(counterStore.hotWordsList, 'counterStore')
  ctx.meta  = `
    <title>${t}</title>
    <meta name="keywords" content="${k}" />
    <meta name="description" content="${d}" />
    <link rel="alternate" href="https://us.patpat.com" hreflang="en-us" />
    <link rel="alternate" href="https://uk.patpat.com" hreflang="en-gb" />
    <link rel="alternate" href="https://au.patpat.com" hreflang="en-au" />
    <link rel="alternate" href="https://mx.patpat.com/es" hreflang="es-mx" />
    <link rel="alternate" href="https://fr.patpat.com/fr" hreflang="fr" />
    <link rel="alternate" href="https://br.patpat.com/pt" hreflang="pt-br" />
    <link rel="alternate" href="https://ar.patpat.com/ar" hreflang="ar" />
    <link rel="alternate" href="https://de.patpat.com/de" hreflang="de" />
    <link rel="alternate" href="https://hk.patpat.com/zh" hreflang="zh-Hant-hk" />
    <link rel="alternate" href="https://it.patpat.com/it" hreflang="it" />
    <link rel="alternate" href="https://eur.patpat.com" hreflang="en-al" />
    <link rel="alternate" href="https://asia.patpat.com/id" hreflang="id-la" />
    <link rel="alternate" href="https://ca.patpat.com" hreflang="en-ca" />
    <link rel="alternate" href="https://il.patpat.com/he" hreflang="he-il" />
    <link rel="alternate" href="https://in.patpat.com" hreflang="en-bd" />
    <link rel="alternate" href="https://la.patpat.com/es" hreflang="es-ar" />
  `
}