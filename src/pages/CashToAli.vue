<template>
    <div class="cashtoali">
      <Header v-if="!this.$store.state.isWeChat">提现</Header>
      <div class="content">
        <div class="content-title">到账支付宝</div>

        <div class="content-alipay" v-if="!isBinding">
          <div class="img fleft"><img src="../assets/img/Message/img_fxtxalipay.png" alt=""></div>
          <div class="left-tip fleft">未绑定支付宝</div>
          <div class="icon fright"><img src="../assets/img/MyWallet/icon2.png"></div>
          <div class="right-tip fright">去绑定</div>
        </div>

        <div class="content-alipay " v-if="isBinding">
          <div class="img fleft"><img src="../assets/img/Message/img_fxtxalipay.png" alt=""></div>
          <div class="left-tip fleft">
            <div class="name">{{AlipayInfo.payee_real_name}}</div>
            <div class="phone">{{AlipayInfo.payee_account}}</div>
          </div>
          <div class="icon fright"><img src="../assets/img/MyWallet/icon2.png"></div>
        </div>

        <div class="content-money clearfix">
          <div class="limit fleft">提现金额</div>
          <div class="use fleft">当前可提 <span>{{limit}}元</span></div>
          <div class="all fright">全部提现</div>
        </div>
        <input type="number" placeholder="请输入提现金额">
        <div class="service-money">手续费: <span>0.00</span>元</div>
        <Btn>提现</Btn>
        <div class="content-tips">
          <div class="tips-title">提示</div>
          <div class="tips-wrap">{{AlipayInfo.remark}}</div>
        </div>
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
          AlipayInfo:{},
          limit:362.23
        }
      },
      methods:{
        getData () {
          this.$axios.get('v1/user').then(res => {
            console.log(res.data);
            this.limit = res.data.credit2
            if (res.data.is_bind_alipay === 0) {
              this.isBinding = false
            } else {
              this.isBinding = true
            }
            this.$axios.get('v1/user/withdraw/alipay').then(res => {
              console.log(res);
              this.AlipayInfo = res.data
            })
          })

        }
      },
      created () {
        this.getData()
      }
    }
</script>

<style scoped lang="less" src="../assets/css/CashToAli.less">

</style>
