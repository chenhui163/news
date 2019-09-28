<template>
  <div class="wrap">
    <!-- 头部 -->
    <div class="header">
        <div class="header-left">
            <span class="iconfont iconjiantou2" @click="$router.back()"></span>
            <i class="iconfont iconnew"></i>
        </div>
        <div class="header-right">
            <span class="focus" v-if="!detail.has_follow" @click="handleFollow">关注</span>
            <span class="focus ofcus_active" v-else>已关注</span>
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
            
            isFocus:false
        }
    },

    // 方法
    methods:{
        // 关注用户
        handleFollow(){
            // 发送请求关注用户
            this.$axios({
                url:"/user_follows/"+this.detail.user.id,
                method:"GET",
                // 发送token到服务器进行验证
                headers:{
                    Authorization: localStorage.getItem("token")
                }
            }).then(res=>{
                const {message} = res.data;
                console.log(message)
                if(message==="关注成功"){
                    this.detail.has_follow = true;
                }
            })
        }
    },

    // 页面加载完毕时执行
    mounted(){
        const id = this.$route.params.id;
        // 请求的配置
        const config = {
            url:"/post/"+id,
            method:"GET",
        }
        // 尝试获取本地存储的token
        const token = localStorage.getItem("token");
        // 判断是否有token
        if(token){
            config.headers = {
                Authorization: localStorage.getItem("token")
            }
        }

        // 根据文章的id请求文章数据
        this.$axios(config).then(res=>{
            console.log(res);
            // 将需要的数据解购出来
            const {data} = res.data;
            // 将数据赋值给 detail
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
                .focus{
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
                .ofcus_active{
                    color: red;
                    border-color: red;
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