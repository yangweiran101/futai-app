<template>
    <div class="setpwd">
      <Header v-if="!this.$store.state.isWeChat">设置交易密码</Header>
      <div class="content">
        <div class="wrap border">
          <div class="phone-number fleft">手机号</div>
          <div class="userMobile fleft">{{userInfo.user_mobile}}</div>
        </div>
        <div class="wrap border">
          <div class="phone-number fleft">验证码</div>
          <input type="text" class="fleft" placeholder="输入收到的短信码" v-model="tradepassword.code">
          <div class="getcode fright" @click="getCode">点击获取</div>
        </div>
        <div class="wrap border">
          <div class="phone-number fleft">新密码</div>
          <input type="text" class="fleft" placeholder="输入6位交易密码" v-model="tradepassword.trade_password">
        </div>
        <div class="wrap">
          <div class="phone-number fleft">新密码</div>
          <input type="text" class="fleft" placeholder="再次输入交易密码" v-model="tradepassword.trade_password_confirmation">
        </div>
      </div>
      <div class="btn" @click="setTradePwd">确定</div>
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
          userInfo:{},
          tradepassword:{
            code:'',
            trade_password:'',
            trade_password_confirmation:''
          }
        }
      },
      methods:{
        getCode () {
          this.$axios.post('sendsms',
            {mobile:this.userInfo.user_mobile,type:changetradepassword }).then(res => {
              alert('短信验证码发送成功')
          })
        },
        getData () {
          this.$axios.get('v1/user').then(res => {
            // console.log(res);
            this.userInfo = res.data
          })
        },
        setTradePwd () {
          this.$axios.post('v1/user/change/tradepassword',this.tradepassword).then(res => {
            if (res.code == 200) {
              alert('交易密码设置成功')
            }
            this.$router.go(-1)
          })
        }
      },
      created () {
        this.getData()
      }
    }
</script>

<style scoped lang="less" src="../assets/css/SetTradePassword.less">

</style>
