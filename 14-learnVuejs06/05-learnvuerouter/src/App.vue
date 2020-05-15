<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 class="title">我是app组件</h1>

    <!--router-link标签是一个vue-router中已经内置的组件，它会被渲染成一个a标签-->
    <!--属性：to，用于指定跳转的路径-->
    <!--属性：tag,tag可以指定router-link之后渲染成什么组件，比如上面的代码会被渲染成一个li而不是a-->
    <!--属性replace:replace不会留下history记录，所以指定replace的情况下，后退键返回到上一个页面中-->
    <!--属性：active-class:当router-link对应的路由匹配成功时，会自动给当前元素设置一个router-link-active的class,-->
    <!--设置active-class可以修改默认的名称，-->
    <!--在进行高亮显示的导航菜单或者底部tabbar时，会使用该类，-->
    <!--但是通常不会修改类的属性，会直接使用默认的router-link-active即可-->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <!--以query形式传递路由,传递参数的话，此处不能是字符串，必须是对象-->
    <!--<router-link to="/profile" tag="button">档案-以query形式传递路由</router-link>-->
    <router-link v-bind:to="{path:'/profile',query:{name:'zyd',age:19,height:1.99}}" tag="button">档案-以query形式传递路由
    </router-link>
    <!--    绑定动态userID,使用v-bind-->
    <router-link v-bind:to="/user/+userId" tag="button">用户</router-link>
    <router-link v-bind:to="'/user/'+userId" tag="button">用户</router-link>
    <button @click="homeClick">首页-代码动作</button>
    <button @click="aboutClick">关于-代码动作</button>

    <button @click="userClick">用户-按钮</button>
    <button @click="profileClick">档案-按钮</button>

    <!--    router-view，该标签会根据当前的路劲，动态渲染出不同的组件-->
    <!--    keep-alive这样就不会被销毁，重新创建-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'lisi',
        imgURl: 'http://www.baidu.com/logo.png'
      }
    },
    methods: {
      homeClick() {
        //通过代码的方式修改路由vue-router
        //push => pushState
        // this.$router.push('/home')
        this.$router.replace('/home')
      },
      aboutClick() {
        //同时代码的方式修改路由vue-router
        // this.$router.push("/about")
        this.$router.replace('/about')
      },
      userClick() {
        this.$router.push('/user/' + this.userId)
      },
      profileClick() {
        this.$router.push({
          path: '/profile',
          query: {
            name: 'coderzyd',
            age: 20,
            height: 2.26
          }
        })
      }
    }
  }
</script>

<style>
  .title {
    font-size: 50px;
  }
</style>
