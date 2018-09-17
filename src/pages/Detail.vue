<template>
    <div class="detail">
      <!--头部组件-->
      <Header v-if="!this.$store.state.isWeChat">明细详情</Header>

      <!--提现总额-->
      <div class="detail-total">
        <div class="left fleft">提现</div>
        <div class="number fleft">78954元</div>
        <div class="right fright">未通过</div>
      </div>

      <!--提现详情-->
      <div class="detail-content">
        <div class="wrap">
          <div class="left fleft">订单编号</div>
          <div class="right fright">ME589548565565554899</div>
        </div>
        <div class="wrap">
          <div class="left fleft">提现方式</div>
          <div class="right fright">银行卡</div>
        </div>
        <div class="wrap">
          <div class="left fleft">账户</div>
          <div class="right fright">6226123456780121113</div>
        </div>
        <div class="wrap">
          <div class="left fleft">说明</div>
          <div class="right fright">该银行卡号信息错误</div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "Detail",
      components:{
        Header
      }
    }
</script>

<style scoped lang="less" src="../assets/css/Detail.less">

</style>
