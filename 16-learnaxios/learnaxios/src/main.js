import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

axios({
  url:'http://123.207.32.32:8000/home/multidata',
  method:'get'
}).then(res=>{
  console.log(res)
})

axios({
  url:'http://123.207.32.32:8000/home/multidata',
  //专门针对get请求的参数拼接
  params:{
    type:'pop',
    page:1
  }
}).then(res=>{
  console.log(res);
})

axios.post('http://123.0.0.1',{params:{type:sell,timeout:100}})


//2.axios发送并发请求
axios.all([
  axios({
    url:'http://123.207.32.32:8000/home/multidata'
  }),axios({
    url:'http://123.207.32.32:8001/home/multidata',
    params:{
      type:'sell',
      page:5
    }
  })
]).then(results=>{
    console.log(results);
  }
)

axios.all([
  axios({
    url:'http://123.207.32.32:8000/home/multidata'
  }),axios({
    url:'http://123.207.32.32:8001/home/multidata',
    params:{
      type:'sell',
      page:5
    }
  })
]).then(axios.spread(res1,res2=>{
    console.log(res2);
    console.log(res1);
  })
)
