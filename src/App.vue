<template>
  
	<!-- keep-alive动态组件，用于保留组件状态，避免重新被渲染 -->
    <keep-alive include="index,search">
		<!-- 占位符，用来渲染其他页面内容 -->
    	<router-view></router-view>
    </keep-alive>

</template>

<script>
export default {

}
</script>

<style>
/* 全局样式 */

/*清除内外边距  */
html,
div,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
dl,
dt,
dd,
a,
img {
    margin: 0;
    padding: 0
}
/*让所有斜体 不倾斜*/
em,
i {
    font-style: normal
}
/*去掉列表前面的小点*/
li {
    list-style: none
}
/*图片没有边框   去掉图片底侧的空白缝隙*/
img {
    border: 0;  /*ie6*/
    vertical-align: middle
}
/*让button 按钮 变成小手*/
button {
    cursor: pointer
}
/*取消链接的下划线*/
a {
    color: #666;
    text-decoration: none
}

a:hover {
    color: #e33333;
}

button,
input {
  font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    \\5b8b\4f53, sans-serif;
  border: none;
  outline: none;
}

.hide,
.none {
    display: none
}
/*清除浮动*/
.clearfix::after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}

.fl {
    float: left
}

.fr {
    float: right
}

/* 引入字体图标 */
@import url("http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css");

/* 引入vant-ui插件的功能 */
@import url("../node_modules/vant/lib/index.css");

</style>