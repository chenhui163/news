<template>
    <div class="box">
        <!-- 头部 -->
        <HeaderNormal
            title="精彩跟贴"
        ></HeaderNormal>

        <!-- 评论详情 -->
        <div class="wrap"
            v-for="(item, index) in comments"
            :key="index"
        >
            <!-- 用户信息部分 -->
            <div class="user-about">
                <img :src="$axios.defaults.baseURL + item.user.head_img" v-if="item.user.head_img">
                <img src="../../static/yellow-red.jpg" v-else>
                <div>
                    <p>{{item.user.nickname}}</p>
                    <i>2小时前</i>
                </div>
                <span>回复</span>
            </div>

                <!-- 评论楼层组件 -->
                <CommentFloor
                    v-if="item.parent"
                    :data="item.parent"
                ></CommentFloor>

            <!-- 当前用户的评论 -->
            <p>{{item.content}}</p>
        </div>

        <!-- 回复的评论页脚组件 -->
        <PostFooter
            :post="detail"
            @getComments="getComments"
        ></PostFooter>

    </div>
</template>

<script>
import HeaderNormal from "@/components/HeaderNormal";

import CommentFloor from "@/components/CommentFloor";

import PostFooter from "@/components/PostFooter";


export default {
    
    // 注册
    components:{
        HeaderNormal,
        CommentFloor,
        PostFooter
    },

    // 数据
    data(){
        return {
            comments:[],
            detail:{}
        }
    },

    // 方法
    methods:{
        // 获取文章的评论列表
        getComments(id){
            this.$axios({
                url: "/post_comment/" + id,
                method:"GET"
            }).then(res=>{
                const {data} = res.data;
                this.comments = data;
            })
        }
    },

    // 页面加载完毕时执行
    mounted(){
        // 获取文章id
        const {id} = this.$route.params;
        this.getComments(id)

        // 获取文章详情
        const config = {
            url:"/post/"+id,
        }

        const token = localStorage.getItem("token");

        if(token){
            config.headers={
                Authorization: token
            }
        }

        this.$axios(config).then(res=>{
            const {data} = res.data;
            // 保存到详情
            this.detail = data;
        })
    }

}
</script>

<style scoped lang="less">

    .box{
        padding-bottom: 80px;
    }

    .wrap{
        padding: 0 20px;
        border-bottom: 1px solid #ccc;

        .user-about{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-top: 10/360*100vw;

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


        >p{
            margin: 15/360*100vw 0;
            font-size: 14/360*100vw;
        }
    }

</style>