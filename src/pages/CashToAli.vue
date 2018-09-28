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
          <div class="all fright" @click="all()">全部提现</div>
        </div>
        <input type="number" placeholder="请输入提现金额" v-model="money">
        <div class="service-money">手续费: <span>{{ServiceCharge}}</span>元</div>

        <!--确定按钮-->
        <div class="btn" @click="goCash">提现</div>

        <div class="content-tips">
          <div class="tips-title">提示</div>
          <div class="tips-wrap">{{AlipayInfo.remark}}</div>
        </div>
      </div>

      <!--支付-->
      <div id="payPwd">
        <header>请输入交易密码</header>
        <ul class="pwd-wrap" @click="goCash">
          <li><i v-if="PayWord.length > 0"></i></li>
          <li><i v-if="PayWord.length > 1"></i></li>
          <li><i v-if="PayWord.length > 2"></i></li>
          <li><i v-if="PayWord.length > 3"></i></li>
          <li><i v-if="PayWord.length > 4"></i></li>
          <li><i v-if="PayWord.length > 5"></i></li>
        </ul>
        <input ref="tel" type="number" maxlength="6" v-model="PayWord" class="pwd" @keyup="show($event)"/>
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
          limit:0,
          PayWord: '',
          money: null,
          ServiceCharge: 1,
        }
      },
      methods:{
        all (){
          this.money = this.limit
          // if (this.money*this.BankInfo.withdraw_rate*0.01 > 25) {
          //   this.ServiceCharge = 25
          // } else if (this.money*this.BankInfo.withdraw_rate*0.01 < 1) {
          //   this.ServiceCharge = 1
          // } else {
          //   this.ServiceCharge = (this.money*this.BankInfo.withdraw_rate*0.01).toFixed(2)
          // }

        },
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

        },
        goCash () {
          if (this.money == '') {
            alert('请输入提现金额')
          }else if (Number(this.money) > this.limit) {
            alert('输入金额超出余额')
          } else {
            let payPwd = document.querySelector('#payPwd');
            payPwd.style.display = 'block';
            document.querySelector('.pwd').focus()
          }
        },
        show (ev){
          if(ev.keyCode == 13){
            this.$axios.post('v1/user/withdraw/create',{
              type:'alipay',
              money:this.money,
              trade_password:this.PayWord}).then(res => {
              console.log(res)
              if (res.status == 'success') {
                alert(res.message)
                this.$router.push({path:'/ReviewToCash',query:{count:this.money,rate:this.ServiceCharge}})
              } else {
                alert(res.message)
                this.getData()
              }
            })

          }
        },
      },
      watch:{
        money (newVal, oldVal) {
          if (this.money*this.AlipayInfo.withdraw_rate*0.01 > 25) {
            this.ServiceCharge = 25
          } else if (this.money*this.AlipayInfo.withdraw_rate*0.01 < 1) {
            this.ServiceCharge = 1
          } else {
            this.ServiceCharge = (this.money*this.AlipayInfo.withdraw_rate*0.01).toFixed(2)
          }
        }
      },
      created () {
        this.getData()
      }
    }
</script>

<style scoped lang="less" src="../assets/css/CashToAli.less">

</style>
