<template>
  <div>

        <!-- 第一种，单图片加文字 -->
        <div class="post"
            v-if="post.type===1 && post.cover.length>0 && post.cover.length<3"
            >
            <!-- 左侧文字部分 -->
            <div  class="post-text">
                <p class="post-title">{{post.title}}</p>
                <p class="post-info">
                    <span>{{post.user.nickname}}</span>
                    <i>{{post.comment_length}}跟贴</i>
                </p>
            </div>
            <!-- 右侧图片部分 -->
            <img class="post-img" :src="post.cover[0].url">
        </div>

        <!-- 第二种，多张图片加文字 -->
        <div class="multiple"
            v-if="post.type===2&&post.cover.length>1"
            >
            <!-- 文字标题部分 -->
            <p class="multiple-title">{{post.title}}</p>
            <!-- 中间图片部分 -->
            <div class="multiple-img">
                <img
                    v-for="(item,index) in post.cover"
                    :src="post.cover[index].url"
                    :key="index"
                >
            </div>

            <!-- 文字评论部分 -->
            <p class="multiple-info">
                <span>{{post.user.nickname}}</span>
                <i>{{post.comment_length}}跟贴</i>
            </p>
        </div>

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
    /* 单张图片样式 */
    .post{
        display: flex;
        padding: 10px;
        border-bottom: 1px solid #aaaaaa;
        
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

    /* 多张图片样式 */
    .multiple{
        padding: 10px;
        border-bottom: 1px solid #aaaaaa;

        .multiple-title{
            font-size: 16/360*100vw;
            line-height: 30/360*100vw;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }

        .multiple-img{
            display: flex;
            justify-content: space-between;
            margin-bottom: 10/360*100vw;

            img{
                width: 33%;
            }
        }

        .multiple-info{
            font-size: 12/360*100vw;
            color: #868686;
            span{
                margin-right: 10px;
            }
        }
    }

    /* 视频样式 */
    

</style>