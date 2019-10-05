<template>
  <div class="wrap">
      <div class="header">
            <span class="iconfont iconjiantou2"></span>
            <div class="search">
              <span class="iconfont iconsearch"></span>
              <input placeholder="猜你喜欢">
            </div>
            <span>搜索</span>
      </div>

      <div class="history">
          <h3>历史记录</h3>
          <div class="history-box"></div>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">

    .wrap{
        padding: 15/360 * 100vw;
    }

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20/360*100vw;


        .search {
            flex: 1;
            margin: 0 10/360 * 100vw;
            padding: 8/360 * 100vw;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 21/360 * 100vw;
            text-indent: 15px;
            border: 1px solid #aaa
        }
        span {
            font-size: 18/360 * 100vw;
        }
    }

</style>