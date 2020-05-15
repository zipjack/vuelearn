<template>
    <div>
      <h2>我是profile</h2>
      <p>演示query方式传递参数</p>
      <h1 class="title">{{$route.query}}</h1>
      <h2>{{$route.query.name}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>
.title{
  size:25px;
  color:red;
}
</style>
