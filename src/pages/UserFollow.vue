<template>
  <div>

      <!-- 头部 -->
      <HeaderNormal title="我的关注"></HeaderNormal>

      <!-- 关注的用户列表 -->
      <div class="follow-item" v-for="(item,index) in list" :key='index'>
          <img src="../../static/yellow-red.jpg">

          <div class="item-center">
            <p>{{item.nickname}}</p>
            <span>2019-9-25</span>
          </div>

          <span class="cancel" @click="handleCancel(index)">取消关注</span>

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
            // 关注列表
            list:[]
        }
    },

    // 方法
    methods:{
        // 取消关注
        handleCancel(index){
            // 获取要取消关注的用户的id
            const id = this.list[index].id;
            this.$axios({
                url:"/user_unfollow/"+id,
                method:"GET",
                // 发送token到服务器进行验证
                headers:{
                    Authorization: localStorage.getItem("token")
                }
            }).then(res=>{
                // 从服务器返回的数据中解购出需要的数据
                const {message} = res.data;
                // 判断是否取消关注成功
                if(message === "取消关注成功"){
                    // 从列表中删除
                    this.list.splice(index, 1);
                    this.$toast.success(message);
                }
            })
        }
    },

    // 页面刷新执行
    mounted(){
        this.$axios({
            url:"/user_follows",
            method:"GET",
            // 发送token到服务器进行验证
            headers:{
                Authorization: localStorage.getItem("token")
            }
        }).then(res=>{
            // 从服务器返回的数据中解购出需要的数据
            const {data} = res.data;
            // 将数据赋值给关注列表
            this.list = data;
        })
    }

}
</script>

<style scoped lang="less">
    .follow-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20/360*100vw;
        padding-bottom: 20/360*100vw;
        margin-top: 20/360*100vw;
        border-bottom: 1px solid #d7d7d7;

        img{
            width: 40/360*100vw;
            height: 40/360*100vw;
            border-radius: 50%;
        }

        .item-center{
            flex: 1;
            margin-left: 20/360*100vw;
            font-size: 16/360*100vw;
            span{
                font-size: 12/360*100vw;
                color: #707070;
            }
        }

        .cancel{
            padding: 5px 10px;
            font-size: 12/360*100vw;
            background: #e1e1e1;
            color: #707070;
            border-radius: 15px;
        }

    }
</style>