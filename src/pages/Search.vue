<template>
  <div class="wrap">
      <div class="header">
            <span class="iconfont iconjiantou2" @click="$router.back()"></span>
            <div class="search">
              <span class="iconfont iconsearch"></span>
              <input placeholder="猜你喜欢" v-model="keyword">
            </div>
            <span @click="handleSearch">搜索</span>
      </div>

      <div class="list">
            <!-- 调用首页用过的文章模块的组件 -->
            <PostCard 
                v-for="(item, index) in list"
                :key="index"
                :post="item"
            />
      </div>

      <div class="history">
          <h3>历史记录</h3>
          <div class="history-box"
            v-show="history.length>0"
            v-for="(item,index) in history"
            :key="index">
                <p>{{item.keyword}}</p>
          </div>
      </div>
      
  </div>
</template>

<script>
    import PostCard from "@/components/PostCard";

export default {

    // 声明name属性
    name:"search",

    // 注册
    components:{
        PostCard
    },

    // 数据
    data(){
        return {
            keyword:"",
            list:[],
            history:[]
        }
    },

    // 方法
    methods:{
        handleSearch(){
            
            // 请求搜索的数据
            this.$axios({
                url:`/post_search?keyword=${this.keyword}`,
                method:"GET"
            }).then(res=>{
                const {data} = res.data;
                this.list = data;
            })

            // 将搜索历史记录加进数组中
            this.history.push({
                "keyword":this.keyword
            });
            this.keyword = "";

            let search = JSON.parse(localStorage.getItem("news-search")) || [];
            search = [...this.history];
            localStorage.setItem("news-search",JSON.stringify(search));
        }
    },

    // 页面加载完毕时执行
    mounted(){
        let search = JSON.parse(localStorage.getItem("news-search")) || [];
        this.history = search;
    }

}
</script>

<style scoped lang="less">

    .wrap{
        padding: 15/360 * 100vw;
    }

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20/360*100vw;


        .search {
            flex: 1;
            margin: 0 10/360 * 100vw;
            padding: 8/360 * 100vw;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 21/360 * 100vw;
            text-indent: 15px;
            border: 1px solid #aaa
        }
        span {
            font-size: 18/360 * 100vw;
        }
    }

    .history{
        margin: 20/360*100vw 0;
    }

</style>