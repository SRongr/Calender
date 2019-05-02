
// const Index = () => import(/* webpackChunkName: "demo" */'@/views/Demo.vue')
const HomePage = () => import(/* webpackChunkName: "HomePage" */'@/views/HomePage.vue')
const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: 'VueSSR'
    }
  }
]

export default routes


