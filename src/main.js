/* 
    插件：1.任何插件要使用，都要导入
*/

// 引入vue
import Vue from "vue";

// 路由：1.导入路由构造函数
import VueRouter from 'vue-router';

// 导入vant-ui组件
import Vant from "vant";

// 导入axios
import axios from "axios";

// 导入组件
import App from "@/App";
import Login from "@/pages/Login"; // 导入登录页面组件


/* 
    插件：2.任何插件要是用都必须先注册
*/
// 注册路由插件,在.vue文件中使用router-link和router-view，要先注册路由插件
Vue.use(VueRouter);
// 注册Vant插件
Vue.use(Vant);

// 把axios挂载到Vue的原型对象上，可以通过this.$axios来使用
Vue.prototype.$axios = axios;

// 路由：2.创建路由配置
/* 
    负责对各种请求进行路由匹配
*/
const routes = [
    { path:'/',redirect:"/login" },
    { path:'/login', component: Login }
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
    // 这里指定的组件App就相当于根实例的一部分
    render(createElement) {
        // render函数使用固定的写法，只有App是可变的
        return createElement(App);
    }

})