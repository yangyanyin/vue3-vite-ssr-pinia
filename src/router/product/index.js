
const ProductDetail = () => import(/* webpackChunkName: "product" */ '../../views/product/ProductDetail.vue')

export default [
  {
    path: '/i18n/currency',
    name: 'product-detail',
    component: ProductDetail
  }
]
