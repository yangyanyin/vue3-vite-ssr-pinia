
const Category = () => import(/* webpackChunkName: "product" */ '../../views/product/Category.vue')
const ProductDetail = () => import(/* webpackChunkName: "product" */ '../../views/product/ProductDetail.vue')

export default [
  {
    path: '/category/:c1/:c2?/:c3?/:c4?',
    name: 'category',
    component: Category
  },
  {
    path: '/product/:name',
    name: 'product-detail',
    component: ProductDetail
  }
]
