<template>
  <div>
    <h1>我是首页——HOME</h1>
    <p class="content">
      5月11日，我校联合沈阳药科大学研究生院举行研究生案例教学培训会。</p>
    <br>
    <hr>
    <!--子路由的位置-->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>


    <!--占位子路由的位置-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return {
        message: '你好啊',
        path:'/home/news'
      }
    },
    created(){
      //创建完组件的时候会回调的
      console.log("create");
    },
    destroyed() {
      //销毁组件的时候回调
      console.log("destoryed");
    },
    mounted() {
      //创建完挂载到dom上会回调的
      console.log('mounted');
    },
    updated() {
      //界面发生刷新的时候会回调的
      console.log('updated');
    },
    //这两个函数，只有该组件被保持了状态使用了keep-alive时，才是有效的
    activated() {
      //界面进入活跃状态的时候，会回调这个函数
      console.log('actived');
      this.$router.push(this.path)
    },
    deactivated() {
      //界面不活跃的时候，会回调这个函数
      console.log('deactived');
    },
    beforeRouteLeave(to,from,next){
      console.log(this.$route.path);
      this.path=this.$route.path;
      next();
    }
  }
</script>

<style scoped>
  .content {
    color: green;
  }
</style>
