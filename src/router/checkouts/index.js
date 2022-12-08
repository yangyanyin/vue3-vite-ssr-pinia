
const Cart = () => import(/* webpackChunkName: "product" */ '../../views/checkouts/Cart.vue')
const Checkouts = () => import(/* webpackChunkName: "product" */ '../../views/checkouts/Checkouts.vue')

export default [
  {
    path: '/order/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order/checkouts',
    name: 'checkouts',
    component: Checkouts
  }
]
