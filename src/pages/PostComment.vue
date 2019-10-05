<template>
    <div class="box">
        <!-- 头部 -->
        <HeaderNormal
            title="精彩跟贴"
        ></HeaderNormal>

        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            :immediate-check="false"
            @load="onLoad"
        >

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
                    <span @click="handleReply(item)">回复</span>
                </div>



                <!-- 当前用户的评论 -->
                <p>{{item.content}}</p>

                <div >
                    <!-- 评论楼层组件 -->
                    <CommentFloor
                        v-if="item.parent"
                        :data="item.parent"
                    ></CommentFloor>
                </div>
            </div>
        </van-list>

        <!-- 回复的评论页脚组件
            replyComment:要回复的评论
         -->
        <PostFooter
            :post="detail"
            @getComments="getComments"
            :replyComment="replyComment"
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
            detail:{},
            // 保存点击回复后输入的评论
            replyComment:null,

            // 分页的参数
            loading: false,
            finished: false,
            pageIndex: 1,
            pageSize: 10
        }
    },

    // 方法
    methods:{
        // 获取文章的评论列表
        getComments(id,isReply){

            // 如果评论发布成功，初始化分页的数据和列表数据
            if(isReply==="isReply"){
                this.pageIndex = 1;
                this.comments = []
            }

            this.$axios({
                url: `/post_comment/${id}?pageIndex=${this.pageIndex}`,
                method:"GET"
            }).then(res=>{
                const {data} = res.data;
                // 覆盖评论的列表
                this.comments = [...this.comments,...data];
                // 请求完毕需要手动变为false
                this.loading = false;

                if(data.length < this.pageSize){
                    this.finished = true;
                    return;
                }

                 // 页数加1
                this.pageIndex++;
            });
        },

        // 点击楼层的回复按钮时候触发的方法
        handleReply(item){
            // 获取到当前要回复的评论
            this.replyComment = item;
        },

        // 评论加载更多
        onLoad(){
            setTimeout(() => {
                // 文章的id
                const {id} = this.$route.params;
                // 请求下一页的数据
                this.getComments(id);
            }, 2000)
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
        margin-bottom: 20/360*100vw;

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