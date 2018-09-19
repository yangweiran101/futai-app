<template>
  <div class="addcard">
    <Header v-if="!this.$store.state.isWeChat">更换储蓄卡</Header>

    <!--内容-->
    <div class="content">
      <div class="wrap border">
        <div class="phone-number fleft">真实姓名</div>
        <div class="userMobile fleft">张三</div>
      </div>
      <div class="wrap border">
        <div class="phone-number fleft">身份证号</div>
        <div class="userMobile fleft">411******1098</div>
      </div>
      <div class="wrap border">
        <div class="phone-number fleft">银行卡号</div>
        <input type="text" class="fleft" placeholder="输入银行卡卡号">
      </div>
      <div class="wrap border">
        <div class="phone-number fleft">开户银行</div>
        <input type="text" class="fleft" placeholder="点击获取发卡行名称">
      </div>
      <div class="wrap">
        <div class="phone-number fleft">手机号码</div>
        <input type="text" class="fleft" placeholder="输入银行预留手机号码">
      </div>
    </div>
    <div class="btn" @click="addCard">立即添加</div>

  </div>
</template>

<script>
  import Header from '../components/Header'
  export default {
    name: "ReplaceCard",
    components:{
      Header
    },
    methods:{
      addCard () {

      }
    }
  }
</script>

<style scoped lang="less" src="../assets/css/AddCard.less">

</style>
