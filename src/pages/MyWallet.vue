<template>
    <div class="wallet">
      <!--头部部分-->
      <div class="wallet-header" >
        <!--返回按钮，标题栏-->
        <div class="header-title" v-if="!this.$store.state.isWeChat">
          <div class="header-back" @click="goBack()"><img src="../assets/img/MyWallet/icon@3x.png"></div>
          <div class="title">我的钱包</div>
        </div>

        <!--总金额-->
        <div class="header-money">
          <div class="money-total">
            <div class="total fleft">总金额</div>
            <div class="eye fleft" @click="handleShow()">
              <img src="../assets/img/Index/btn_eyesee.png" v-if="this.$store.state.isShowMoney">
              <img src="../assets/img/Index/btn_nosee.png" v-if="!this.$store.state.isShowMoney">
            </div>
          </div>
          <div class="money-number">
            <span v-if="this.$store.state.isShowMoney">{{userInfo.credit2}}</span>
            <span v-if="!this.$store.state.isShowMoney">*******</span>
            <!--总金额详情-->
            <router-link to="/WalletDetail" class="detail"><img src="../assets/img/MyWallet/icon1@3x.png" ></router-link>
          </div>
        </div>

        <!--累计收益，今日收益，昨日收益栏-->
        <div class="header-earnings">
          <!--累计收益显示-->
          <div class="earings-box">
            <div class="earings-title">累计收益</div>
            <div class="earings-number ">{{profit.total_profit}}</div>
          </div>
          <!--今日收益显示-->
          <div class="earings-box">
            <div class="earings-title">今日收益</div>
            <div class="earings-number ">{{profit.today_profit}}</div>
          </div>
          <!--昨日收益显示-->
          <div class="earings-box">
            <div class="earings-title">昨日收益</div>
            <div class="earings-number">{{profit.yesterday_profit}}</div>
          </div>
        </div>
      </div>

      <!--选项卡部分-->
      <div class="wallet-content">
        <!--提现到银行-->
        <div class="wrap" @click="WithdrawCash('CashToBank')">
          <div class="icon fleft one"><img src="../assets/img/MyWallet/icon_fxtxbankcd.png"></div>
          <span>提现到银行</span>
          <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
        </div>

        <!--提现到支付宝-->
        <div class="wrap" @click="WithdrawCash('CashToAli')">
          <div class="icon fleft two"><img src="../assets/img/MyWallet/icon_fxtxalipay.png"></div>
          <span>提现到支付宝</span>
          <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
        </div>
      </div>
      <div class="wallet-content">
        <!--钱包明细-->
        <div class="wrap" @click="WithdrawCash('PurseDetail')">
          <div class="icon fleft three"><img src="../assets/img/MyWallet/icon_fxtxmx.png"></div>
          <span>钱包明细</span>
          <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
        </div>

        <!--提现明细-->
        <div class="wrap" @click="WithdrawCash('CashAboutDetail')">
          <div class="icon fleft three"><img src="../assets/img/MyWallet/iconPut@3x.png"></div>
          <span>提现明细</span>
          <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
        </div>
      </div>

      <!--弹框-->
      <confirm v-model="show"
               title="设置交易密码"
               theme="ios"
               @on-cancel="onCancel"
               @on-confirm="onConfirm"
               confirm-text="去设置"
               >
        <p style="text-align:center;">请先设置交易密码</p>
      </confirm>

    </div>
</template>

<script>
  import { Confirm } from 'vux'
    export default {
      components: {
        Confirm
      },
      data () {
        return {
          show: false,
          userInfo:{},
          profit:{}
        }
      },
       methods:{
         goBack(){
           this.$router.go(-1)
         },
         handleShow () {
           let isShow = !this.$store.state.isShowMoney
           this.$store.commit("isShowMoney", isShow);
         },
         getData() {
           this.$axios.get('v1/user').then(res => {
             console.log(res);
             this.userInfo = res.data
             if (res.data.is_setting_trade_password == 1) {
               this.show = false
             } else {
               this.show = true
             }
           })
         },
         getProfit () {
           this.$axios.get('v1/profit').then(res => {
             console.log(res);
             this.profit = res.data
           })
         },
         onCancel () {

         },
         onConfirm () {
           this.$router.push('/SetPassword')
         },
         WithdrawCash (page) {
           this.$router.push(`/${page}`)
         }
       },
       created () {
        this.getData();
         this.getProfit();
       }
    }
</script>

<style scoped lang="less" src="../assets/css/MyWallet.less">

</style>
