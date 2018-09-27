<template>
    <div class="appbenefit">
      <Header v-if="!this.$store.state.isWeChat">平台收益图</Header>
      <div class="banner"><img src="../assets/img/AppBenefit/bg-banner.png"></div>

      <!--积分板块-->
      <div class="wrap">
        <div class="img">
          <img src="../assets/img/AppBenefit/xingzhuang.png">
          <span class="title">为什么要做积分兑换</span>
        </div>
      </div>

      <div class="wrap">
        <div class="img">
          <img src="../assets/img/AppBenefit/xingzhuang.png">
          <span class="title">怎么做积分</span>
        </div>
      </div>

      <div class="wrap">
        <div class="img">
          <img src="../assets/img/AppBenefit/xingzhuang.png">
          <span class="title">怎么兑积分</span>
        </div>
      </div>

      <div class="wrap">
        <div class="img">
          <img src="../assets/img/AppBenefit/xingzhuang.png">
          <span class="title">怎么推广积分</span>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "AppBenefit",
      components:{
        Header
      }
    }
</script>

<style scoped lang="less" src="../assets/css/AppBenefit.less">

</style>
