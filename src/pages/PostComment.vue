<template>
    <div>
        <!-- 头部 -->
        <HeaderNormal
            title="精彩跟贴"
        ></HeaderNormal>

        <!-- 评论详情 -->
        <div class="wrap">
            <!-- 用户信息部分 -->
            <div class="user-about">
                <img src="../../static/yellow-red.jpg">
                <div>
                    <p>火星网友</p>
                    <i>2小时前</i>
                </div>
                <span>回复</span>
            </div>

            <!-- 当前用户回复其他用户的评论 -->
            <div class="reply">
                <div class="other-user">
                    <div>
                        <span>1</span>
                        <em>火星网友</em>
                        <i>2小时前</i>
                    </div>
                    <span>回复</span>
                </div>

                <p>对对对，说的都对</p>
            </div>

            <!-- 当前用户的评论 -->
            <p>我觉得也是</p>
        </div>

    </div>
</template>

<script>
import HeaderNormal from "@/components/HeaderNormal";

export default {
    
    // 注册
    components:{
        HeaderNormal
    }



    // 页面

}
</script>

<style scoped lang="less">

    .wrap{
        padding: 0 20px;
        border-bottom: 1px solid #ccc;

        .user-about{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            img{
                width: 35/360*100vw;
                height: 35/360*100vw;
                border-radius: 50px;
            }
            >div{
                flex: 1;
                margin-left: 15/360*100vw;
                font-size: 12/360*100vw;
                p{
                    font-size: 14/360*100vw;
                    margin-bottom: 3px;
                }
            }
            span{
                color: #999;
            }
        }

        .reply{
            margin-top: 10/360*100vw;
            border: 1px solid #999;
            padding: 10/360*100vw;
            .other-user{
                display: flex;
                justify-content: space-between;
                margin-bottom: 15/360*100vw;
                em{
                    margin-left: 0 10px;
                   font-size: 14/360*100vw;
                }
                i{
                    color: #999;
                }
                span{
                    color: #999;
                }
            }
            p{
                margin-bottom: 10/360*100vw;
            }
        }
        >p{
            margin: 15/360*100vw 0;
            font-size: 14/360*100vw;
        }
    }

</style>