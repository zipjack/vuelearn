const {add,mul}=require('./js/mathUtils')
console.log(add(29,11))
console.log(mul(4,2))

import {name,age,height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

//3.依赖css文件
require('./css/normal.css')

//4.依赖less文件
require('./css/special.less')

document.writeln('<h1>你好啊，南京栖霞课！</h1>')