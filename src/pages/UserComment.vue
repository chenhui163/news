<template>
  <div>

    <!-- 头部 -->
    <HeaderNormal title="我的跟贴"></HeaderNormal>

    <!-- 评论列表 -->
    <div class="comment-item" v-for="(item,index) in list" :key="index">

        <div class="time">2019-9-25 23:26:34</div>

        <!-- 当前评论回复的评论 -->
        <div class="parent" v-if="item.parent">
            <div class="parent-title">
                @:{{item.parent.user.nickname}}
            </div>
            <div class="parent-content">
                {{item.parent.content}}
            </div>
        </div>

        <!-- 个人评论的内容 -->
        <div class="content">
            {{item.content}}
        </div>

        <router-link to="#" class="article-link">
            <p>{{item.post.title}}</p>
            <span class="iconfont iconjiantou1"></span>
        </router-link>

    </div>

  </div>
</template>

<script>
/* 引入头部组件 */
import HeaderNormal from "@/components/HeaderNormal";

export default {
    components:{
        HeaderNormal
    },

    // 数据
    data(){
        return {
            // 评论列表
            list:[]
        }
    },

    // 页面加载完毕时执行
    mounted(){
        this.$axios({
            url:"/user_comments",
            method:"GET",
            // 发送token到服务器进行验证
            headers:{
                Authorization: localStorage.getItem("token")
            }
        }).then(res=>{
            // 从服务器返回的数据中解购出需要的数据
            const {data} = res.data;
            // 将数据赋给list数组
            this.list = data;
        })

    }
}
</script>

<style scoped lang="less">

    .comment-item{
        padding: 20/360*100vw;
        .time{
            margin-bottom: 15/360*100vw;
            font-size: 13/360*100vw;
            color: #b7b7b7;
        }

        .parent{
            padding: 20/360*100vw 10/360*100vw;
            margin-bottom: 15/360*100vw;
            background: #e4e4e4;
            color: #a9a9a9;
            line-height: 25/360*100vw;
            .parent-title{
                font-size: 13/360*100vw;
            }
        }

        .content{
            margin: 20/360*100vw 0;
        }

        .article-link{
            display: flex;
            justify-content: space-between;
            font-size: 13/360*100vw;
            color: #a9a9a9;

            p{
                overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
           
        }
    }

</style>