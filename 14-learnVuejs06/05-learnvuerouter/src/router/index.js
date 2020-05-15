// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
//

//$router可以看成是vue-router创建的实例对象，$route获取的是当前活跃的组件
//#router可以理解成整个路由器，$route可以理解成当前路由

//配置路由相关的信息
import Vue from 'vue';
import VueRouter from 'vue-router';
// 路由的懒加载,就不用引用这些东西了
// import About from "../components/About";
// import Home from "../components/Home";
// import User from "../components/User";
const Home=()=>import('../components/Home')
const About=()=>import('../components/About')
const User=()=>import('../components/User')
const HomeNews=()=>import('../components/HomeNews')
const HomeMessage=()=>import('../components/HomeMessage')
const Profile=()=>import('../components/Profile')

//4.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)
//5.创建VueRouter对象
const routes=[
  //设置默认的情况
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title: '首页'
    },
    children:[
      {
        //嵌套默认路径
        path:'',
        redirect:'message',
        meta:{
          title:"消息"
        }
      }
      ,{
        //子路由的时候，此处不加/
        path:'news',
        component:HomeNews,
        meta: {
          title:'首页新闻'
        }

      },
      {
        path:'message',
        component:HomeMessage,
        meta:{
          title:'首页消息'
        }
      }
    ]
  },
  {
    path:'/about',
    component: About,
    meta:{
      title:'关于'
    }
  },
  {
    //params形式传递参数
    //1.配置路由方式，下一步在user.vue
    path:'/user/:userId',
    component: User,
    meta:{
      title:'用户user'
    }
  },
  {
    //query方式传递参数
    //1.配置普通形式的路由
    path:'/profile',
    component:Profile,
    meta:{
      title:'用户'
    }
  }
]

const router=new VueRouter({
  //6.配置路由和组件之间的应用关系
  routes,
  mode:'history'
})
//下面二者都是导航守卫，而且是全局守卫
//前置守卫（guard),跳转前回调
router.beforeEach((to,from,next)=>{
  //从from跳转到to
  document.title=to.matched[0].meta.title
  console.log(to);
  next()
})
//后置钩子（hook)，跳转后回调
router.afterEach((to,from)=>{
  console.log("-----");
})

//7.将router对象传入到Vue实例中
export default router
