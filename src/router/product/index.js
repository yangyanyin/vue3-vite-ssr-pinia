
const Category = () => import(/* webpackChunkName: "product" */ '../../views/product/Category.vue')
const ProductDetail = () => import(/* webpackChunkName: "product" */ '../../views/product/ProductDetail.vue')

export default [
  {
    path: '/server/data',
    name: 'category',
    component: Category
  },
  {
    path: '/i18n/currency',
    name: 'product-detail',
    component: ProductDetail
  }
]
