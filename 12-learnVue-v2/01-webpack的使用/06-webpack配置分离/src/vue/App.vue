<template>
    <div>
        <h2 class="aa">{{message}}</h2>
        <button @click="btnclick"> 按钮</button>
        <h2>{{name}}</h2>
        <Cpn></Cpn>
    </div>
</template>

<script>

    import Cpn from './Cpn';

    export default {
        name: "App",
        data() {
            return {
                message: 'hello webpack1',
                name: 'coderzyd'
            }
        },
        methods:{
            btnclick(){
                console.log("2020妙啊");
            }
        },
        components: {
            Cpn//注册Cpn组件
        }

    }
</script>

<style scoped>
.aa{
 color:green;
}
</style>