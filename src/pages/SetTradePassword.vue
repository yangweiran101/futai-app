<template>
    <div class="setpwd">
      <Header v-if="!this.$store.state.isWeChat">设置交易密码</Header>
      <div class="content">
        <div class="wrap border">
          <div class="phone-number fleft">手机号</div>
          <div class="userMobile fleft">13366669999</div>
        </div>
        <div class="wrap border">
          <div class="phone-number fleft">验证码</div>
          <input type="text" class="fleft" placeholder="输入收到的短信码">
          <div class="getcode fright">点击获取</div>
        </div>
        <div class="wrap border">
          <div class="phone-number fleft">新密码</div>
          <input type="text" class="fleft" placeholder="输入6位交易密码">
        </div>
        <div class="wrap">
          <div class="phone-number fleft">新密码</div>
          <input type="text" class="fleft" placeholder="再次输入交易密码">
        </div>
      </div>
      <div class="btn" @click="setPwd">确定</div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      components:{
        Header,
      },
      data () {
        return {
          userMobile:'13366669999'
        }
      },
      methods:{
        setPwd () {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped lang="less" src="../assets/css/SetPassword.less">

</style>
