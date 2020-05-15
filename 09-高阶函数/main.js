//filter中的回调函数有一个要求：必须返回一个boolean值
//true:返回true时，函数内部会自动将这次回调的n加入到新的数组中
//false:返回false时，函数内部会过滤掉这次的n。


const nums = [10, 20, 111, 222, 444, 40, 50]
let newNums = []
nums.filter(function (n) {
    return n<100;
})
//map函数
//reduce函数