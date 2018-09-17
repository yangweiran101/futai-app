<template>
  <div id="payPwd">
    <header>支付密码设置</header>
    <ul class="pwd-wrap" @click="focus">
      <li><i v-if="msg.length > 0"></i></li>
      <li><i v-if="msg.length > 1"></i></li>
      <li><i v-if="msg.length > 2"></i></li>
      <li><i v-if="msg.length > 3"></i></li>
      <li><i v-if="msg.length > 4"></i></li>
      <li><i v-if="msg.length > 5"></i></li>
    </ul>
    <input ref="tel" type="number" maxlength="6" v-model="msg" class="pwd" unselectable="on" />
  </div>
</template>

<script>
    export default {
      data() {
        return {
          msg: '',
        }
      },
      watch: {
        msg(curVal) {
          if(/[^\d]/g.test(curVal)) {
            this.msg = this.msg.replace(/[^\d]/g, '');
          }
        },
      },
      methods: {
        focus() {
          this.$refs.pwd.focus();
        },
      },
    }
</script>

<style scoped lang="less" src="../assets/css/Pay.less">

</style>
