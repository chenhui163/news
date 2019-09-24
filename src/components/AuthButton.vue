<template>
<!-- 使用插值表达式渲染按钮文本 -->
  <div
    class="button"

    @click="handleClick"
    >{{text}}
    </div>

</template>

<script>
export default {
    /* 定义可接受的变量
        text    按钮的文本
    */
    props:[
        "text"
    ],

    // 方法
    methods:{
        // 点击按钮触发此方法，传回事件对象
        handleClick(event){
            this.$emit("click",event);
        }
    }
}
</script>

<style scoped lang="less">
    .button {
      display: block;
      padding: 10px 0;
      width: 100%;
      background: #cc3300;
      border-radius: 19/320*100vw;
  }
</style>