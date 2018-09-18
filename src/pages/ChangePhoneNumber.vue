<template>
    <div class="change">
      <!--头部-->
      <Header v-if="!this.$store.state.isWeChat">换绑手机号</Header>

      <!--输入框-->
      <div class="change-content">
        <div class="wrap">
          <div class="title fleft">手机号</div>
          <input class="fleft" type="tel" placeholder="请输入新的手机号">
        </div>
        <div class="wrap">
          <div class="title fleft">验证码</div>
          <input class="fleft" type="tel" placeholder="输入收到的验证码">
          <div class="code fright">点击获取</div>
        </div>
      </div>

      <!--确定按钮-->
      <div class="btn" @click="changeNumber()">立即换绑</div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "ChangePhoneNumber",
      components:{
        Header
      },
      methods:{
        changeNumber () {
          console.log(1);
        }
      }
    }
</script>

<style scoped lang="less" src="../assets/css/ChangePhoneNumber.less">

</style>
