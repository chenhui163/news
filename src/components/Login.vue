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
            <input type="text" placeholder="用户名">
        </div>

        <!-- 密码 -->
        <div class="userInput">
            <input type="password" placeholder="密码">
        </div>

        <!-- 登录按钮 -->
        <button class="loginBtn">
            <span>登录</span>
        </button>

    </div>

</template>

<script>
export default {

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
  input{
    box-sizing: border-box;
    padding: 10px 0;
    width: 100%;
    border-bottom: 1.5px solid #757575;
    font-size: 18/320*100vw;
  }
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
  span {
    display: block;
    padding: 10px 0;
    width: 100%;
    background: #cc3300;
    border-radius: 19/320*100vw;
  }
}

</style>