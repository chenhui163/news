<template>
  <div>
      
      <!-- 头部 -->
      <div class="header">
          <!-- logo -->
          <span class="iconfont iconnew"></span>
          <!-- 搜索框 -->
          <div class="search">
              <span class="iconfont iconsearch"></span>
              <i>搜索新闻</i>
          </div>
          <!-- 个人中心 -->
          <span class="iconfont iconwode" @click="handlePersonal"></span>
      </div>

  </div>
</template>

<script>
export default {

    // 方法
    methods:{
        // 跳转到个人中心
        handlePersonal(){
            this.$router.push("/personal");
        }

    }

}
</script>

<style scoped lang="less">

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15/360*100vw;
        color: #fff;
        background: #f00;

        >span:first-child{
            font-size: 50/360*100vw;
        }

        .search{
            flex: 1;
            margin: 0 30/360*100vw 0 10/360*100vw;
            padding: 8/360*100vw;
            background: rgba(255, 255,255, .4);
            border-radius: 21/360*100vw;
            text-align: center;
            
            span{
                font-size: 20/360*100vw;
            }
        }

        >span:last-child{
            font-size: 20/360*100vw;
        }
    }

</style>