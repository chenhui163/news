<template>
  <div class="edit_profile">

      <!-- 头部部分 -->
      <div class="head">
          <span class="iconfont iconjiantou" @click="$router.back()"></span>
          <i>编辑资料</i>
          <span></span>
      </div>

      <!-- 图片部分 -->
      <div class="head_image">
          <img :src="profile.head_img" alt="">

          <!-- 图片上传 -->
          <van-uploader :after-read="afterRead" class="upload_img"/>
      </div>

      <!-- 昵称 -->
      <CellBar
        first_text="昵称"
        :second_text="profile.nickname"
      ></CellBar>

      <!-- 密码 -->
      <CellBar
        first_text="密码"
        :second_text="profile.password"
        type="password"
      ></CellBar>

      <!-- 性别 -->
      <CellBar
        first_text="性别"
        :second_text="profile.gender=== 1 ? '男':'女' "
      ></CellBar>

  </div>
</template>

<script>
/* 引入条形组件 */
import CellBar from "@/components/CellBar";

export default {
// 注册条形组件，components属性的值是一个对象
    components:{
        CellBar
    },

    // 数据
    data(){
        return {
            profile:{}
        };
    },

    methods:{
        // 上传文件的方法
        afterRead(file) {
            // file 为返回的选中的图片

            //构造表单数据
            const formData = new FormData();
            // 通过表单使用append方法追加数据
            formData.append('file', file.file);

            // 发送文件上传请求
            this.$axios({
                url:"/upload",
                method:"POST",
                // 发送token到服务器进行验证
                headers:{
                    Authorization: localStorage.getItem("token")
                },
                data:formData,
            }).then(res=>{
                // 从服务器中响应返回的数据中解购出需要的数据
                const {data} = res.data;
                // 替换用户当前头像
                this.profile.head_img = this.$axios.defaults.baseURL + data.url;

                // 再次发送axios请求，把头像的url上传到用户资料
                this.$axios({
                    url:"/user_update/"+localStorage.getItem("user_id"),
                    method:"POST",
                    // 发送token到服务器进行验证
                    headers:{
                        Authorization: localStorage.getItem("token")
                    },
                    data:{
                        head_img:data.url
                    }
                }).then(res=>{
                    // 从服务器返回的数据中解购出需要的数据
                    const {message} = res.data;
                    // 如果修改成功，则弹出提示
                    if(message==="修改成功") this.$toast.success(message);
                })
            })

        }
    },

    // 页面加载完毕时调用
    mounted(){
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
            // 当成功请求到数据时执行
            if(data){
                this.profile = data;
                // 判断是否有头像
                if(data.head_img){
                    this.profile.head_img = this.$axios.defaults.baseURL + this.profile.head_img;
                    
                }else{
                    this.profile.head_img = "./static/yellow-red.jpg";
                }
                
            }
        })
    },

}
</script>

<style scope lang="less">
    .edit_profile{
        .head{
            display: flex;
            justify-content: space-between;
            padding: 15/360*100vw 20/360*100vw;
            font-size: 16/360*100vw;
        }

        .head_image{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15/360*100vw 20/360*100vw;
            img{
                width: 70/360*100vw;
                height: 70/360*100vw;
                border-radius: 50%;
            }
            .upload_img{
                position: absolute;
                width: 70/360*100vw;
                height: 70/360*100vw;
                opacity: 0;
                /deep/ .van-uploader__upload{
                    margin: 0;
                    padding: 0;
                }
            }
        }
    }
</style>