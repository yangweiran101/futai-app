<template>
  <div class="cashtobank">
    <!--头部-->
    <Header v-if="!this.$store.state.isWeChat">提现</Header>

    <!--内容-->
    <div class="content">
      <div class="content-title">到账银行卡</div>

      <div class="content-bank" v-if="isBinding">
        <div class="img fleft"><img src="../assets/img/Message/img_bankdefault2.png" alt=""></div>
        <div class="left-tip fleft">
          <div class="name">未绑定银行卡</div>
          <div class="card">储蓄卡</div>
          <div class="number">---</div>
        </div>
        <div class="icon fright"><img src="../assets/img/MyWallet/icon2.png"></div>
        <div class="right-tip fright">去绑定</div>
      </div>

      <div class="content-bank " v-if="!isBinding">
        <div class="img fleft"><img src="../assets/img/Message/img_bankdefault2.png" alt=""></div>
        <div class="left-tip fleft">
          <div class="name">张三</div>
          <div class="card">储蓄卡</div>
          <div class="number">****   ****    ****    6539</div>
        </div>
        <div class="icon fright"><img src="../assets/img/MyWallet/icon2.png"></div>
      </div>

      <div class="content-money clearfix">
        <div class="limit fleft">提现金额</div>
        <div class="use fleft">当前可提 <span>366.23元</span></div>
        <div class="all fright">全部提现</div>
      </div>
      <input type="number" placeholder="请输入提现金额">
      <div class="service-money" @click="goCash">手续费: <span>0.00</span>元</div>
      <!--确定按钮-->
      <Btn>提现</Btn>

      <div class="content-tips">
        <div class="tips-title">提示</div>
        <div class="tips-wrap">1.付款到账时效为1~3日，最快次日到账. 2.每笔按付款金额收取手续费，按金额0.1%收取，最低1元，最高25元</div>
      </div>
    </div>

    <!--支付-->
    <div id="payPwd">
      <header>支付密码设置</header>
      <ul class="pwd-wrap" @click="focus">
        <li><i v-if="PayWord.length > 0"></i></li>
        <li><i v-if="PayWord.length > 1"></i></li>
        <li><i v-if="PayWord.length > 2"></i></li>
        <li><i v-if="PayWord.length > 3"></i></li>
        <li><i v-if="PayWord.length > 4"></i></li>
        <li><i v-if="PayWord.length > 5"></i></li>
      </ul>
      <input ref="tel" type="number" maxlength="6" v-model="PayWord" class="pwd" :onfocus="isfocus" />
    </div>

  </div>
</template>

<script>
  import Header from '../components/Header'
  import Btn from '../components/blue-btn'
  export default {
    components: {
      Header,
      Btn,
    },
    data () {
      return {
        isBinding:true,
        PayWord:'',
        isfocus:false
      }
    },
    methods:{
      focus () {
        // this.$refs.pwd.focus();
      },
      goCash () {
        // console.log(1)
        let pwd = document.querySelector('#payPwd');
        pwd.style.display = 'block';
        this.isfocus = true


      }
    }
  }
</script>

<style scoped lang="less" src="../assets/css/CashToBank.less">

</style>
