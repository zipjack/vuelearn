const {add, mul} = require('./js/mathUtils')
console.log(add(29, 11))
console.log(mul(4, 2))

import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

//3.依赖css文件
require('./css/normal.css')

//4.依赖less文件
require('./css/special.less')

// document.writeln('<h1>你好啊，南京栖霞课！</h1>')

//5.使用vue进行开发
import Vue from 'vue'
// 不再用app.js这个文件
// import App from './vue/app'
//这个在main.js的文件引入App的时候，后面需要指定.vue文件
//不然的话就是一直打包的app.js文件的内容会被一直打包进bundle.js
import App from './vue/App.vue'

//在components注册了一个组件，在template中用一下这个组件
//以前都是在app中的comonents中注册一个组件
//然后在id=app的模板中使用这个组件
//只是现在是在vue中用一下这个模板

const app = new Vue({
    el: '#app',
    template:'<App/>',
    components:{
        //注册局部组件
        App
    }
})