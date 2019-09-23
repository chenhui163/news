<template>
  <!-- 使用v-bind绑定属性，将props接受到的值动态赋给对应的属性
        @input是指每当输入框的值发生改变时，调用handleInput事件方法
   -->
    <input
        class="input"
        :placeholder="placeholder"
        :value="value"
        :type="type"

        @input="handleInput"
    />

</template>

<script>
export default {
    // 定义可以接受的属性
    props:[
        "placeholder",
        "value",
        "type"
    ],

    // 方法
    methods:{
        // 将输入框的值通过触发事件返回给父组件
        handleInput(event){
            this.$emit("user-Input",event.target.value);
        }

    }

}
</script>

<style scoped lang="less">
    .input{
        box-sizing: border-box;
        padding: 10px 0;
        width: 100%;
        border-bottom: 1.5px solid #757575;
        font-size: 18/320*100vw;
    }
</style>