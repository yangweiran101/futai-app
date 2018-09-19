<template>
  <div class="cardbag">
    <Header v-if="!this.$store.state.isWeChat">我的卡包</Header>

    <!--选项卡-->
    <div class="option">
      <div class="wrap" @click="getDetail(1)"><span :class="[option === 1?'active' :'']">信用卡</span></div>
      <div class="wrap" @click="getDetail(2)"><span :class="[option === 2?'active' :'']">储蓄卡</span></div>
    </div>

    <div class="content">
      <!--信用卡有卡-->
      <div class="exist" v-if="isCredit&&option === 1">
        <!--信用卡-->
        <Slider>
          <div class="card">
            <img src="../assets/img/MyCardBag/gongshang.png">
            <div class="logo"><img src="../assets/img/MyCardBag/logo/gongshang.png"></div>
            <div class="bank">工商银行</div>
            <div class="type">信用卡</div>
            <div class="card-number">**** **** **** 6539</div>
          </div>
        </Slider>
        <Slider>
          <div class="card">
            <img src="../assets/img/MyCardBag/zhongguo.png">
            <div class="logo"><img src="../assets/img/MyCardBag/logo/zhongguo.png"></div>
            <div class="bank">中国银行</div>
            <div class="type">信用卡</div>
            <div class="card-number">**** **** **** 6539</div>
          </div>
        </Slider>

        <!--添加信用卡-->
        <div class="addcard" @click="goNext('AddCard')">
          <div class="icon fleft"><img src="../assets/img/MyCardBag/addcard.png"></div>
          <span class="fleft">添加信用卡</span>
          <div class="next fright"><img src="../assets/img/MyWallet/icon2.png"></div>
        </div>
      </div>

      <!--信用卡无卡-->
      <div class="none" v-if="!isCredit&&option === 1">
        <div class="img"><img src="../assets/img/MyCardBag/none.png"></div>
        <div class="tip">暂时没有银行卡哦~</div>
        <div class="add-btn" @click="goNext('AddCard')">+ 添加信用卡</div>
      </div>

      <!--储蓄卡有卡-->
      <div class="exist" v-if="isDeposit&&option === 2">
        <!--储蓄卡-->
        <Slider>
          <div class="card" v-if="option === 2">
            <img src="../assets/img/MyCardBag/youzheng.png">
            <div class="logo"><img src="../assets/img/MyCardBag/logo/youzheng.png"></div>
            <div class="bank">中国邮政</div>
            <div class="type">储蓄卡</div>
            <div class="card-number">**** **** **** 6539</div>
          </div>
        </Slider>

        <!--更换储蓄卡-->
        <div class="addcard" v-if="option === 2" @click="goNext('ReplaceCard')">
          <div class="icon fleft"><img src="../assets/img/MyCardBag/addcard.png"></div>
          <span class="fleft">更换储蓄卡</span>
          <div class="next fright"><img src="../assets/img/MyWallet/icon2.png"></div>
        </div>
      </div>

      <!--储蓄卡无卡-->
      <div class="none" v-if="!isDeposit&&option === 2">
        <div class="img"><img src="../assets/img/MyCardBag/none.png"></div>
        <div class="tip">暂时没有银行卡哦~</div>
        <div class="add-btn" @click="goNext('ReplaceCard')">+ 添加储蓄卡</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Slider from '../components/Slider'

  export default {
    name: "MyCardBag",
    components: {
      Header,
      Slider
    },
    data() {
      return {
        isDeposit: true,
        isCredit: true,
        option: 1,
      }
    },
    methods: {
      getDetail(id) {
        this.option = id
      },
      goNext (page) {
        this.$router.push(`/${page}`)
      }
    },
    created() {
      this.getDetail(1)
    }
  }
</script>

<style scoped lang="less" src="../assets/css/MyCardBag.less">

</style>
