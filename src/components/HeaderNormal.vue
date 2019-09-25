<template>
  <!-- 头部部分 -->
      <div class="head">
          <span class="iconfont iconjiantou" @click="$router.back()"></span>
          <i>{{title}}</i>
          <span></span>
      </div>
</template>

<script>
export default {
    // 定义可以接受的变量
    props:[
        "title"
    ]
}
</script>

<style scoped lang="less">
    .head{
        display: flex;
        justify-content: space-between;
        padding: 15/360*100vw 20/360*100vw;
        font-size: 16/360*100vw;
    }
</style>