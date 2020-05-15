import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Home=()=>import('../views/home/Home')
const Cart=()=>import('../views/shoppingcart/Cart')
const Category=()=>import('../views/category/Category')
const Profile=()=>import('../views/profile/Profile')

Vue.use(VueRouter)

//2.创建路由对象
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/profile',
    component:Profile
  }
]
const router = new VueRouter({
  routes,
  mode:'history'
})
//3.导出路由
export default router
