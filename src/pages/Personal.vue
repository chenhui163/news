<template>
  <div>
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

  
  </div>
</template>

<script>
export default {};
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