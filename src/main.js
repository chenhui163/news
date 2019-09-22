// 引入vue
import Vue from "vue";

// 路由：1.导入路由构造函数
import VueRouter from 'vue-router';

// 导入组件
import App from "@/App.vue";
import Login from "@/pages/Login";

// 在.vue文件中使用router-link和router-view，要先注册路由插件
// 注册路由插件
Vue.use(VueRouter);

// 路由：2.创建路由配置
const routes = [
    { path: '/login',component: Login }
]

// 路由：3.创建路由实例，引入路由配置
const router = new VueRouter({
    routes
})


// 根实例
new Vue({
    // 容器
    el: "#app",

    // 路由：4.挂载到根实例
    router,

    // 指定一个组件渲染根实例，这个组件可以成为最低层的组件
    render(createElement) {
        // render函数使用固定的写法，只有App是可变的，App是一个变量
        return createElement(App);
    }

})