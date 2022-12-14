
const About = () => import(/* webpackChunkName: "product" */ '../../views/article/About.vue')
const Terms = () => import(/* webpackChunkName: "product" */ '../../views/article/Terms.vue')

export default [
  {
    path: '/i18n/lang',
    name: 'about',
    component: About
  },
  {
    path: '/terms',
    name: 'terms',
    component: Terms
  }
]
