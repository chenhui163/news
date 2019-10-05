<template>
    <div class="reply">

        <div style="backgroundColor:#ccc;padding:15px;border-bottom:1px solid #999">
            <div class="other-user">
                <div>
                    <span>1</span>
                    <em>{{data.user.nickname}}</em>
                    <i>2小时前</i>
                </div>
                <span @click="handleReply">回复</span>
            </div>
            <p>{{data.content}}</p>
        </div>

        <!-- 自己再次在这个位置调用了自己 -->
        <CommentFloor
            v-if="data.parent"
            :data="data.parent"
            @handleReply="handleReply"
        ></CommentFloor>
    </div>
</template>

<script>
export default {

    // 组件的名字，单纯的针对当前的组件命名，当前的组件可以通过该名字自己调用自己
    name:"CommentFloor",

    props:[
        "data"
    ],

    // 方法
    methods:{
        handleReply(){
            this.$emit("handleReply",this.data);
        }

    }

}
</script>

<style scoped lang="less">

    .reply{
    
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
        
    }

</style>