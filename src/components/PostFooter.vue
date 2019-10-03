<template>
    <div class="footer-wrap">
        <div class="footer" v-show="!isFocus">
            <div class="footer-left ">
                <input placeholder="写跟贴" @focus="handleFocus">
            </div>
            <div class="footer-right">
                <span class="iconfont iconpinglun-" @click="$router.push(`/post-comment/${post.id}`)">
                    <i class="pinglun">{{post.comment_length}}</i>
                </span>
                <i class="iconfont iconshoucang"
                    @click="$emit('handleStar')"
                    :class="{ star_active: post.has_star }"
                ></i>
                <em class="iconfont iconfenxiang"></em>
            </div>
        </div>

        <div class="footer-focus" v-show="isFocus">
            <textarea ref="textarea"
                :placeholder="placeholder"
                @blur="handleUnFocus"
                rows="3"
                v-model="value"
            ></textarea>
            <span @click="handleSubmit">发送</span>
        </div>
    </div>
</template>

<script>
export default {

    props:[
        "post",
        // 要回复的评论
        "replyComment",
    ],

    // 数据
    data(){
        return {
            isFocus: false,
            // 评论的内容
            value:"",
            // 输入框的提示文字
            placeholder:"写跟贴",
        }
    },

    // watch监听
    watch:{
        replyComment(){
            this.isFocus = true;
            this.placeholder = "@"+this.replyComment.user.nickname;
        }
    },

    // 方法
    methods:{
        // 单行文板框获得焦点时
        handleFocus(){
            this.isFocus = true;
        },
        handleUnFocus(){
            // 输入框有值的时候不隐藏
            if(!this.value){
                this.isFocus = false;
            }
        },

        // 发布评论
        handleSubmit(){
            // 如果评论内容为空的话，就不发布
            if(!this.value){
                return ;
            }

            const data = {
                content:this.value,
            }
            // 如果有回复的评论，就加上parent_id
            if(this.replyComment){
                data.parent_id = this.replyComment.id;
            }

            this.$axios({
                url:"/post_comment/"+this.post.id,  
                method:"POST",
                headers: {
                    Authorization: localStorage.getItem("token")
                },
                data,
            }).then(res=>{
                const {message} = res.data;

                // 如果评论发布成功
                if(message==="评论发布成功"){
                    // 触发父组件的方法刷新评论列表
                    this.$emit("getComments",this.post.id);
                    // 隐藏输入框
                    this.isFocus = false;
                    // 清空输入框的值
                    this.value = "";
                    // 页面滚动到顶部
                    window.scrollTo(0,0);
                }
            })
        }

    }

}
</script>

<style scoped lang="less">

    .footer-wrap{
            position: fixed;
            left: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            width: 100%;
            padding: 5/360*100vw 10/360*100vw;
            box-sizing: border-box;
            background: #fff;
            
            .footer{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 10/360*100vw;
                
                box-sizing: border-box;
                .footer-left{
                    padding: 5px 20/360*100vw;
                    width: 55%;
                    background: #d7d7d7;
                    border-radius: 50px;
                    box-sizing: border-box;
                    font-size: 14/360*100vw;
                    input{
                        width: 100%;
                        background: none;
                    }
                }
                .footer-right{
                    display: flex;
                    justify-content: space-around;
                    width: 40%;
                    span,i,em{
                        font-size: 23/360*100vw;
                    }
                    >span{
                        position: relative;
                        .pinglun{
                            position: absolute;
                            left: 7px;
                            top: -3px;
                            padding: 2px 5px;
                            font-size: 10px;
                            border-radius: 50px;
                            background: red;
                            color: #fff;
                        }
                    }
                    .star_active{
                        color: red;
                    }
                }
            }

            .footer-focus{
                display: flex;
                align-items: flex-end;
                width: 100%;
                padding: 10/360*100vw 0;
                textarea{
                    margin-right: 13px;
                    padding: 10px;
                    width: 78%;
                    height: 70/360*100vw;
                    font-size: 14/360*100vw;
                    box-sizing: border-box;
                    background: #d7d7d7;
                    border-radius: 10px;
                    border: none;
                    resize: none;
                }
                span{
                    font-size: 12/360*100vw;
                    padding: 5px 17/360*100vw;
                    background: red;
                    color: #fff;
                    border-radius: 50px;
                }
            }
            
        }

</style>