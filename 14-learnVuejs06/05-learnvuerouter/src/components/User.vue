<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的信息,嘿嘿嘿嘿</p>
    <p>王锡瑞</p>
    <!--在此处获取params形式传递的参数-->
    <!--通过计算属性获取-->
    <p>{{userId}}</p>
    <!--直接获取-->
    <p>{{$route.params.userId}}</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        return this.$route.params.userId
      }
    }
  }
</script>

<style scoped>

</style>
