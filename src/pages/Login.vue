<template>
  <div class="pageLogin">
    <!-- 关闭按钮 -->
    <div class="close">
      <span class="iconfont iconicon-test"></span>
    </div>

    <!-- logo -->
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>

    <!-- 用户名 -->
    <div class="userInfo">
      <input type="text" placeholder="用户名"/>
    </div>

    <!-- 密码 -->
    <div class="userInfo">
      <input type="password" placeholder="密码"/>
    </div>

    <!-- 登录按钮 -->
    <div class="loginBtn">
      <div>登录</div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less">
/* 此处为登录页面css样式 */

// 页面基本样式
.pageLogin{
  // background: #f2f2f2;
}

//关闭按钮样式
.close {
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
.userInfo{
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
  text-align: center;
  font-size: 18/320*100vw;
  color: #fff;
  div {
    padding: 10px 0;
    width: 100%;
    background: #cc3300;
    border-radius: 19/320*100vw;
  }
}


</style>