<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <!-- logo -->
      <span class="iconfont iconnew"></span>
      <!-- 搜索框 -->
      <div class="search">
        <span class="iconfont iconsearch"></span>
        <i>搜索新闻</i>
      </div>
      <!-- 个人中心 -->
      <span class="iconfont iconwode" @click="handlePersonal"></span>
    </div>

    <!-- 内容 -->
    <div class="tab-column">
      <!-- 栏目列表 -->
      <!-- v-model: 默认选中的标签栏 -->
      <!-- sticky: 配置粘性布局 -->
      <!-- swipeable: 滑动切换 -->
      <van-tabs v-model="active" sticky swipeable>
        <!--  -->
        <van-tab v-for="(item,index) in categories" :title="item.name" :key="index">
          <!-- v-model: 列表是否在加载 -->
          <!-- finished: 是否加载完毕 -->
          <!-- load: 到底部触发的事件 -->
          <!-- immediate-check 禁止list立即出发onload -->
          <van-list
            v-model="item.loading"
            :finished="item.finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check="false"
          >
            <!-- 文章模块组件，post是单篇文章详情 -->
            <PostCard v-for="(v,i) in item.posts" :key="i" :post="v"></PostCard>
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// 引入文章列表模块
import PostCard from "@/components/PostCard";
import { log } from "util";

export default {
  // 注册文章列表模块
  components: {
    PostCard
  },

  // 数据
  data() {
    return {
      // 栏目列表
      categories: [],
      // 栏目id
      cid: 999,

      // 标识当前被选中的栏目标签
      // 判断是否有关注栏目，无论有关注栏目，都默认显示头条栏目
      active: localStorage.getItem("token") ? 1 : 0,

      // 请求到的文章列表
      // posts:[],

      // 是否在加载,加载完毕后需要手动变为false
      // loading:false,
      // 是否有更多数据，如果加载完所有的数据，改为true
      // finished:false,

      // 分页的变量，标识是第几页，初始是第1页
      // pageIndex:1,
      // 每一页加载的数量，一般设置之后不会修改
      pageSize: 5
    };
  },

  // 监听
  watch: {
    // 监听栏目切换
    active() {
      /* 
                active作为tab栏目的索引值，在tab栏目切换时
                active也会被修改成切换到的栏目对应的索引值
                通过索引值找到栏目数组中的那一项，取到id值
            */
      this.cid = this.categories[this.active].id;
      this.onLoad()
   
    }
  },

  // 方法
  methods: {
    // 跳转到个人中心
    handlePersonal() {
      this.$router.push("/personal");
    },

    // 页面文章加载
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        console.log("到底部了");

        // 页面滚动到底部时，继续请求文章数据
        this.$axios({
          url: `/post?pageIndex=${this.categories[this.active].pageIndex}&pageSize=${this.pageSize}&category=${this.cid}`,
          method: "GET"
        }).then(res => {
          // 将数据从服务器但会的数据中解购出来
          const { data } = res.data;

          /* 
                        判断服务器是否没有更多的数据
                        一般来说，如果加载的数据的个数小于请求加载的数量，就是服务器没有数据了
                    */
          if (data.length < this.pageSize) {
            this.categories[this.active].finished = true;
          }

          // 赋值给post文章列表数组
          this.categories[this.active].posts = [
            ...this.categories[this.active].posts,
            ...data
          ];

          // 页面初始请求完毕后，让分页变量+1
          this.categories[this.active].pageIndex++;

          // 声明本次数据已经加载完毕
          this.categories[this.active].loading = false;
        });
      }, 1000);
    }
  },

  // 页面加载完毕时执行
  mounted() {
    // 判断是否有token，如果有就给头部加上token验证
    const config = {
      url: "/category"
    };
    if (localStorage.getItem("token")) {
      config.headers = {
        Authorization: localStorage.getItem("token")
      };
    }
    // 请求栏目列表
    this.$axios(config).then(res => {
      // 从服务器返回的数据中解购出需要的数据
      const { data } = res.data;

      // 声明数组对象，用于接收遍历的栏目数据
      const newData = [];

      // 遍历data，并为data中每一个栏目添加各自的属性，也就是初始化各栏目中的数据
      // 初始化完毕后，追加进数组
      data.forEach(item => {
        item.posts = [];
        item.loading = false;
        item.finished = false;
        item.pageIndex = 1;
        newData.push(item);
      });

      // 将新的栏目数据数组newData赋值给list数组
      this.categories = newData;

      // 先等待栏目请求完毕，再请求该头条的文章列表
      this.$axios({
        url: `/post?pageIndex=${this.categories[this.active].pageIndex}&pageSize=${this.pageSize}&category=${this.cid}`,
        method: "GET"
      }).then(res => {
        // 将数据从服务器但会的数据中解购出来
        const { data } = res.data;
        // 赋值给头条栏目的文章列表
        this.categories[this.active].posts = data;
        // 页面初始请求完毕后，分页变量+1，下次再发起头条栏目的文章数据请求时就请求第2页的数据
        this.categories[this.active].pageIndex++;
      });
    });
  }
};
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15/360 * 100vw;
  color: #fff;
  background: #f00;

  > span:first-child {
    font-size: 50/360 * 100vw;
  }

  .search {
    flex: 1;
    margin: 0 30/360 * 100vw 0 10/360 * 100vw;
    padding: 8/360 * 100vw;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 21/360 * 100vw;
    text-align: center;

    span {
      font-size: 20/360 * 100vw;
    }
  }

  > span:last-child {
    font-size: 20/360 * 100vw;
  }
}
</style>