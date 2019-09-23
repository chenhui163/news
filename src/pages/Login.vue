<template>
  
    <div class="container">
        
        <!-- 关闭按钮 -->      
        <div class="closeBtn">
            <span class="iconfont iconicon-test"></span>
        </div>

        <!-- 登录页面logo -->
        <div class="logo">
            <span class="iconfont iconnew"></span>
        </div>

        <!-- 用户名 -->
        <div class="userInput">
            <!-- <input type="text" placeholder="用户名"> -->
            <AuthInput
              placeholder="用户名"
              type="text"
              :value="form.username"

              :rule="/^1[0-9]{4,10}$/"
              error_message="手机号码格式有误"

              @user-Input="handleUserName"
            ></AuthInput>

        </div>

        <!-- 密码 -->
        <div class="userInput">
            <!-- <input type="text" placeholder="密码"> -->
            <AuthInput
              placeholder="密码"
              type="password"
              :value="form.password"

              :rule="/^[0-9a-zA-Z]{3,12}$/"
              error_message="密码格式有误"

              @user-Input="handleUserPassword"
            ></AuthInput>

        </div>

        <!-- 登录按钮 -->
        <button class="loginBtn">
            <!-- <span @click="userLogin">登录</span> -->
            <AuthButton
              text="登录"
              @user-click="handleLogin"
            ></AuthButton>
        </button>

    </div>

</template>

<script>

// 导入input输入框组件
import AuthInput from "@/components/AuthInput";
import AuthButton from "@/components/AuthButton";

export default {
  // 导入组件必须进行注册才能使用
  // 注册AuthInput组件
  components:{
    AuthInput,
    AuthButton
  },

  // 数据
  data(){
    return {
      // form对象保存的是用户名和密码两个输入框的值
      form:{
        username:"",
        password:""
      }
    }
  },

  // 方法
  methods:{
    // 将用户名输入框的值同步到form对象中
    handleUserName(value){
      this.form.username = value;
    },

    // 将密码输入框的值同步到form对象中
    handleUserPassword(value){
      this.form.password = value;
    },

    // 用户登录
    handleLogin(event){
      console.log(event);
    }

  }

}
</script>

<style lang="less">

/* 此处为登录页面css样式 */

 //关闭按钮样式
.closeBtn {
  padding: 20px;
  color: #000;
  span{
    font-size: 27/320*100vw;
  }
}
 // logo样式
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    font-size: 126/320*100vw;
    color: #cc3300;
  }
}
 // 用户名、密码输入框样式
.userInput{
  padding: 0 20px;
  margin-top: 10px;

}
 // 按钮样式
.loginBtn{
  margin-top: 50px;
  padding: 0 20px;
  width: 100%;
  text-align: center;
  font-size: 18/320*100vw;
  color: #fff;
  background: none;

}

</style>