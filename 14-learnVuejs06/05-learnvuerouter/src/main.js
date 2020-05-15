import Vue from 'vue'
import App from './App'
//router目录中有index.js会被主动的发现，所以此处的index.js可以跟也可以不跟
//此处要记得修改不要用原始的router路径
// import router from "../../03-testvuecli3/src/router";
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //8.将router对象挂载到Vue对象中，此处也可简写为router
  router,
  render: h => h(App)
})
// 1.安装vue-router
// 2.在src下创建router目录，在router目录中创建index.js
//3.在index.js中配置路由相关信息
