<template>
  <div class="edit_profile">

      <!-- 头部部分 -->
      <div class="head">
          <span class="iconfont iconjiantou"></span>
          <i>编辑资料</i>
          <span></span>
      </div>

      <!-- 图片部分 -->
      <div class="head_image">
          <img src="../../static/yellow-red.jpg" alt="">
      </div>

      <!-- 昵称 -->
      <CellBar
        first_text="昵称"
        second_text="火星网友"
      ></CellBar>

      <!-- 密码 -->
      <CellBar
        first_text="密码"
        second_text="******"
      ></CellBar>

      <!-- 性别 -->
      <CellBar
        first_text="性别"
        second_text="男"
      ></CellBar>

  </div>
</template>

<script>
/* 引入条形组件 */
import CellBar from "@/components/CellBar";

export default {
// 注册条形组件，components属性的值是一个对象
    components:{
        CellBar
    },
}
</script>

<style scope lang="less">
    .edit_profile{
        .head{
            display: flex;
            justify-content: space-between;
            padding: 15/360*100vw 20/360*100vw;
            font-size: 16/360*100vw;
        }

        .head_image{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15/360*100vw 20/360*100vw;
            img{
                width: 70/360*100vw;
                height: 70/360*100vw;
                border-radius: 50%;
            }
        }



    }
</style>