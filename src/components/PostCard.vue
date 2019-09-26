<template>
  <div>

        <!-- 第一种，单图片加文字 -->
        <div class="post" v-for="(item,index) in post" :key="index">
            <!-- 左侧文字部分 -->
            <div  class="post-text">
                <p class="post-title">{{item.title}}</p>
                <p class="post-info">
                    <span>{{item.user.nickname}}</span>
                    <i>{{item.comment_length}}跟贴</i>
                </p>
            </div>

            <!-- 右侧图片部分 -->
            <img class="post-img" :src="item.cover[0].url">
        </div>

        <!-- 第二种，多张图片加文字 -->


        <!-- 第三种，视频加文字 -->
        

  </div>
</template>

<script>
export default {
    // 定义可以接受的属性
    props:[
        "post"
    ]
}
</script>

<style scoped lang="less">

    .post{
        display: flex;
        padding: 10px;
        
        .post-text{
            flex: 1;
            position: relative;
            height: 75/360*100vw;

            .post-title{
                position: absolute;
                top: 0;
                left: 0;
                font-size: 16/360*100vw;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
            .post-info{
                position: absolute;
                bottom: 0;
                left: 0;
                font-size: 12/360*100vw;
                color: #868686;
                span{
                    margin-right: 10px;
                }
            }
        }

        .post-img{
            width: 120/360*100vw;
            height: 75/360*100vw;
            object-fit: cover;
        }
    }

</style>