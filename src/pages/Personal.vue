<template>
  <div>
    <!-- 用户信息头部部分 -->
    <router-link to="/edit-profile">
        <div class="userInfo">
          <img :src="userData.head_img"/>
          <div class="infoCenter">
            <div class="name">
              <span class="iconfont iconxingbienan"></span>{{userData.nickname}}
            </div>
            <div class="time">2019-9-24</div>
          </div>
          <span class="iconfont iconjiantou1"></span>
        </div>    
    </router-link>

    <!-- 我的关注 -->
    <CellBar
        first_text="我的关注"
        second_text="关注的用户"
    ></CellBar>

    <!-- 我的跟贴 -->
    <CellBar
        first_text="我的跟贴"
        second_text="跟贴/回复"
    ></CellBar>

    <!-- 我的收藏 -->
    <CellBar
        first_text="我的收藏"
        second_text="文章/视频"
    ></CellBar>

    <!-- 退出登录 -->
    <div class="logout">
        <div class="logoutBtn" @click="handleLogout">退出</div>
    </div>

  </div>
</template>

<script>
// 导入条形组件
import CellBar from "@/components/CellBar";

export default {
    // 注册条形组件，components属性的值是一个对象
    components:{
        CellBar
    },

    // 数据
    data(){
        return {
            userData: {}
        }
    },

    // 页面加载完毕时调用
    mounted(){
        // 如果没有token或者用户id，将登录页面覆盖本页面
        if(!localStorage.getItem("user_id") || !localStorage.getItem("token")){
            this.$router.replace("/login");
        }

        // 请求用户信息
        this.$axios({
            url:"/user/"+localStorage.getItem("user_id"),
            method:"GET",
            // 发送token到服务器进行验证
            headers:{
                Authorization: localStorage.getItem("token")
            }
        }).then(res=>{
            // 从服务器返回的数据中解购出data对象
            let {data} = res.data;

            // 当登录成功请求到数据时执行
            if(data){
                this.userData = data;

                // 判断是否有头像
                if(data.head_img){
                    this.userData.head_img = this.$axios.defaults.baseURL + userData.head_img;
                }else{
                    this.userData.head_img = "./static/yellow-red.jpg";
                }
            }
        })
    },

    // 方法
    methods:{
        // 退出登录
        handleLogout(){
            // 清空token和user_id
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
            // 将登录页面覆盖本页面
            this.$router.replace("/login");
        }
    }
};
</script>

<style scoped lang="less">

    .userInfo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 20px;
        border-bottom: 5px solid #ccc;

        img{
            width: 70 / 320 *100vw;
            border-radius: 50%;
        }
        
        .infoCenter{
            flex: 1;
            padding-left: 20px;

            .name {
                .iconxingbienan{
                    color: #75b9eb;
                }
            }
            .time{
                margin-top: 5px;
                font-size: 14px;
                color: #999;
            }
        }

        .iconjiantou1{
            color: #999;
            font-size: 18px;
        }
    }

    .logout{
        display: flex;
        justify-content: center;
        margin-top: 50px;
        padding: 20px;
        text-align: center;

        .logoutBtn{
            padding: 10px 0;
            width: 50%;
            background: #0152d9;
            border-radius: 40 / 320 *100vw;
            color: #fff;
        }
    }

</style>