import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //渲染的话，一开始是渲染app.vue
  render: h => h(App)
})
// require('./assets/css/base.css')
