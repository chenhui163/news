<template>
  <!-- 使用v-bind绑定属性，将props接受到的值动态赋给对应的属性
        @input是指每当输入框的值发生改变时，调用handleInput事件方法
        @change是指每当输入框失去焦点时触发handleChange事件方法
        :class的值是对象时，key代表类名，若key的值是true，就加上该类名
  -->
  <input
    class="input"
    :placeholder="placeholder"
    :value="value"
    :type="type"
    :class="{
            success: status==='success',
            error: status==='error'
        }"
    @input="handleInput"
    @change="handleChange"
  />
</template>

<script>
export default {
  /* 定义可以接受的属性
        placeholder 输入框的提示文字
        value       输入框的值
        type        输入框的类型
        rule        输入框的正则表达式
        error_message   // 正则表达式校验失败提示信息
    */
  props: ["placeholder", "value", "type", "rule", "error_message"],

  // 数据
  data() {
    // status存放的是输入框校验正则表达式的结果
    return {
      status: ""
    };
  },

  // 方法
  methods: {
    // 输入框的值发生改变时，触发事件
    handleInput(event) {
      // 从事件对象中解购出输入框的值
      const { value } = event.target;

      // 触发父组件的user-Input事件，返回输入框的值
      this.$emit("input", value);

      /* 判断正则表达式的结果，并根据结果给 status 赋值
                如果校验成功，则为success，如果失败，则为error
            */
      if (this.rule) {
        if (this.rule.test(value)) {
          this.status = "success";
        } else {
          this.status = "error";
        }
      }
    },

    // 每当输入框失去交焦点时触发此方法
    handleChange() {
      // 如果输入框失去焦点时正则表达式校验结果是错误，就弹出提示框
      if (this.error_message && this.status === "error") {
        // alert(this.error_message)
        // 使用vant-ui组件实现弹窗效果
        this.$toast.fail(this.error_message);
      }
    }
  }
};
</script>

<style scoped lang="less">
/* scoped 是防止样式冲突， lang="less"是声明使用的是less语法 */

// 输入框的基本样式
.input {
  box-sizing: border-box;
  padding: 10px 0;
  width: 100%;
  border-bottom: 1.5px solid #757575;
  font-size: 18/320 * 100vw;
}

// 输入框验证正则表达式的样式，成功为绿色，失败为红色
.success {
  border-color: green;
}
.error {
  border-color: red;
}
</style>