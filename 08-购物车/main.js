const app = new Vue({
    el: "#app",
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2005-9',
                price: '78.20',
                count: 1
            },
            {
                id: 2,
                name: '《unix编程艺术》',
                date: '2015-9',
                price: '178.00',
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-9',
                price: '40.00',
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2018-4',
                price: '194.00',
                count: 1
            },
            {
                id: 5,
                name: '《西游记》',
                date: '1985-12',
                price: '49.00',
                count: 1
            },
        ]
    },
    methods: {
        /*getFinalPrice(price) {
            return "$" + parseFloat(price).toFixed(2)
            // return "$"+price.toFixed(2)
        }*/
        increament(index) {
            console.log("increment", index);
            this.books[index].count++;
        },
        decreament(index) {
            console.log("decrement", index);
            this.books[index].count--;
        },
        removeBtnClick(index) {
            this.books.splice(index, 1)
        }
    },
    computed:{
        totalPrice(){
            let totalPrice=0
            for(let i=0;i<this.books.length;i++){
                totalPrice+=this.books[i].price*this.books[i].count
            }
            return totalPrice
        }
    }
    ,
    filters: {
        /*过滤器*/
        showPrice(price) {
            return "$" + parseFloat(price).toFixed(2)
        }
    }
})