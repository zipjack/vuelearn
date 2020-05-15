<template>
    <div>
        <h2>我是cpn组件的标题</h2>
        <p>我是cpn组件的内容</p>
        <h2 class="title">{{name}}</h2>
    </div>

</template>

<script>

    export default {
        name: "Cpn",
        data(){
            return {
                name:'组件的name是CPN'
            }
        }
    }
</script>

<style scoped>
.title{
    color:red;
}
</style>