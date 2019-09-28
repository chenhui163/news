<template>
  <div class="wrap">
    <!-- 头部 -->
    <div class="header">
        <div class="header-left">
            <span class="iconfont iconjiantou2" @click="$router.back()"></span>
            <i class="iconfont iconnew"></i>
        </div>
        <div class="header-right">
            <span class="focus">关注</span>
            <!-- <span class="focus">已关注</span> -->
        </div>
    </div>

    <!-- 文章部分 -->
    <div class="article">
        <h3 class="article-title">{{detail.title}}</h3>
        <div class="article-info">
            <span>{{detail.user.nickname}}</span>
            <i>2019-9-28</i>
        </div>
        <p class="article-content" v-html="detail.content"></p>

        <div class="article-btn">
            <div class="btn-box">
                <span class="iconfont icondianzan"></span>
                996
            </div>
            <div class="btn-box">
                <span class="iconfont iconweixin weixin"></span>
                微信
            </div>
        </div>
    </div>

    <!-- 文章底部 -->
    <PostFooter></PostFooter>

  </div>
</template>

<script>
import PostFooter from "@/components/PostFooter"

export default {

    // 注册
    components:{
        PostFooter
    },

    // 数据
    data(){
        return {
            detail:{
                user:{
                    nickname:""
                }
            },
            
        }
    },

    // 页面加载完毕时执行
    mounted(){
        const id = this.$route.params.id;

        // 根据文章的id请求文章数据
        this.$axios({
            url:"/post/"+id,
            method:"GET"
        }).then(res=>{
            console.log(res);
            // 将需要的数据解购出来
            const {data} = res.data;
            // 将数据赋值给 post
            this.detail = data;
        })
    }

};
</script>

<style scoped lang="less">

    .wrap{
        padding: 0 20/360*100vw;

        .header{
            position: fixed;
            left: 0;
            top: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 0 10/360*100vw;
            box-sizing: border-box;
            background: #fff;
            .header-left{
                display: flex;
                align-items: center;
                span{
                    font-size: 20/360*100vw;
                    margin-right: 5px;
                }
                i{
                    font-size: 60/360*100vw;
                }
            }
            .header-right{
                span{
                    display: block;
                    width: 55/360*100vw;
                    height: 25/360*100vw;
                    text-align: center;
                    line-height: 25/360*100vw;
                    box-sizing: border-box;
                    font-size: 13/360*100vw;
                    border-radius: 50px;
                    border: 1px solid #ccc;
                }
            }
        }

        .article{
            margin-top: 60/360*100vw;
            margin-bottom: 100/360*100vw;
            .article-info{
                margin-top: 5px;
                margin-bottom: 30/360*100vw;
                font-size: 14/360*100vw;
                color: #8b8b8b;
            }
            .article-content{
                font-size: 15/360*100vw;

                /deep/ img{
                    width: 100%;
                }
            }
            .article-btn{
                display: flex;
                justify-content: space-around;
                margin-top: 40/360*100vw;
                .btn-box{
                    padding: 3px 15/360*100vw;
                    border: 1px solid #a7a7a7;
                    font-size: 14/360*100vw;
                    border-radius: 50px;
                    span{
                        font-size: 18/360*100vw;
                    }
                    .weixin{
                        color: #02c602;
                    }
                }
            }
        }

        
    }

</style>