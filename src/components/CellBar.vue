<template>
<!-- $event是模板事件对象 -->
  <div class="cell_wrap" @click="$emit('click',$event)">
      <div class="cell">
          <span class="first_title">{{first_text}}</span>
          <i class="second_title">{{second_text}}</i>
          <em class="iconfont iconjiantou1"></em>
      </div>
  </div>
</template>

<script>
export default {
    props:[
        "first_text",
        "second_text"
    ]
}
</script>

<style scoped lang="less">

    .cell_wrap{
        padding: 0 20px;

        .cell{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
            height: 50 / 320 *100vw;
            color: black;

            .second_title{
                flex: 1;
                text-align: right;
                padding-right: 10px;
                font-size: 13px;
                color: #999;
            }
            .iconjiantou1{
                color: #999;
            }
        }
    }

</style>