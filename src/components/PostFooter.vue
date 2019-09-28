<template>
    <div class="wrap">
        <div class="footer" v-show="!isFocus">
            <div class="footer-left ">
                <input placeholder="写跟贴" @focus="handleFocus">
            </div>
            <div class="footer-right">
                <span class="iconfont iconpinglun-">
                    <i class="pinglun">1024</i>
                </span>
                <i class="iconfont iconshoucang"></i>
                <em class="iconfont iconfenxiang"></em>
            </div>
        </div>

        <div class="footer-focus" v-show="isFocus">
            <textarea placeholder="回复：@中国环球" @blur="handleUnFocus"></textarea>
            <span>发送</span>
        </div>
    </div>
</template>

<script>
export default {

    // 数据
    data(){
        return {
            isFocus: false
        }
    },

    // 方法
    methods:{
        // 单行文板框获得焦点时
        handleFocus(){
            this.isFocus = true;
        },
        handleUnFocus(){
            this.isFocus = false;
        }

    }

}
</script>

<style scoped lang="less">

    .wrap{
            position: fixed;
            left: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            width: 100%;
            height: 50px;
            padding: 20/360*100vw;
            box-sizing: border-box;
            background: #fff;
            
            .footer{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                
                box-sizing: border-box;
                .footer-left{
                    padding: 5px 20/360*100vw;
                    width: 55%;
                    background: #d7d7d7;
                    border-radius: 50px;
                    box-sizing: border-box;
                    font-size: 14/360*100vw;
                    input{
                        width: 100%;
                        background: none;
                    }
                }
                .footer-right{
                    display: flex;
                    justify-content: space-around;
                    width: 40%;
                    span,i,em{
                        font-size: 23/360*100vw;
                    }
                    >span{
                        position: relative;
                        .pinglun{
                            position: absolute;
                            left: 7px;
                            top: -3px;
                            padding: 2px 5px;
                            font-size: 10px;
                            border-radius: 50px;
                            background: red;
                            color: #fff;
                        }
                    }
                }
            }

            .footer-focus{
                display: flex;
                align-items: flex-end;
                textarea{
                    margin-right: 13px;
                    padding: 10px;
                    width: 75%;
                    height: 80/360*100vw;
                    font-size: 14/360*100vw;
                    box-sizing: border-box;
                    background: #d7d7d7;
                    border-radius: 10px;
                    border: none;
                    resize: none;
                }
                span{
                    font-size: 12/360*100vw;
                    padding: 5px 17/360*100vw;
                    background: red;
                    color: #fff;
                    border-radius: 50px;
                }
            }
            
        }

</style>