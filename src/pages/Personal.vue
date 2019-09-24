<template>
  <div>
    <!-- 用户信息头部部分 -->
    <div class="userInfo">
      <img src="../../static/yellow-red.jpg"/>
      <div class="infoCenter">
        <div class="name">
          <span class="iconfont iconxingbienan"></span>火星网友
        </div>
        <div class="time">2019-9-24</div>
      </div>
      <span class="iconfont iconjiantou1"></span>
    </div>

    <!-- 我的关注 -->
    <CellBar
        first_text="我的关注"
        second_text="关注的用户"
    ></CellBar>

    <!-- 我的跟贴 -->
    <CellBar
        first_text="我的跟贴"
        second_text="跟贴/回复"
    ></CellBar>

    <!-- 我的收藏 -->
    <CellBar
        first_text="我的收藏"
        second_text="文章/视频"
    ></CellBar>



  </div>
</template>

<script>
// 导入条形组件
import CellBar from "@/components/CellBar";

export default {
    // 注册条形组件，components属性的值是一个对象
    components:{
        CellBar
    }

};
</script>

<style scoped lang="less">

    .userInfo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 20px;
        border-bottom: 5px solid #ccc;

        img{
            width: 70 / 320 *100vw;
            border-radius: 50%;
        }
        
        .infoCenter{
            flex: 1;
            padding-left: 20px;

            .name {
                .iconxingbienan{
                    color: #75b9eb;
                }
            }
            .time{
                margin-top: 5px;
                font-size: 14px;
                color: #999;
            }
        }

        .iconjiantou1{
            color: #999;
            font-size: 18px;
        }
    }

</style>