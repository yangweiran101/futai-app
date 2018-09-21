<template>
    <div class="personaldata">
      <Header v-if="!this.$store.state.isWeChat">个人资料</Header>

      <!--修改头像-->
      <div class="personal-avatar">
        <div class="left fleft">修改头像</div>
        <div class="reset fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
        <div class="right fright"><img :src="userInfo.avatar"></div>
      </div>

      <!--修改信息-->
      <div class="personal-info">
        <div class="wrap">
          <div class="left fleft">修改昵称</div>
          <div class="reset fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          <div class="right fright">{{userInfo.real_name}}</div>
        </div>
        <div class="wrap" @click="goNext('ChangePhoneNumber')">
          <div class="left fleft">手机号码</div>
          <div class="reset fright" ><img src="../assets/img/MyWallet/icon2.png" ></div>
          <div class="right fright">{{userInfo.user_name}}</div>
        </div>
        <div class="wrap">
          <div class="left fleft">登陆密码</div>
          <div class="reset fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          <div class="right fright">修改</div>
        </div>
        <div class="wrap" @click="goNext('AlipayBind')">
          <div class="left fleft">支付宝绑定</div>
          <div class="reset fright" ><img src="../assets/img/MyWallet/icon2.png" ></div>
          <div class="right noset fright" v-if="userInfo.is_bind_alipay == 0">未绑定</div>
          <div class="right fright" v-else >修改</div>
        </div>
        <div class="wrap" @click="goNext('SetTradePassword')">
          <div class="left fleft">交易密码</div>
          <div class="reset fright" ><img src="../assets/img/MyWallet/icon2.png" ></div>
          <div class="right noset fright" v-if="userInfo.is_setting_trade_password == 0">未设置</div>
          <div class="right fright" v-else>修改</div>
        </div>
        <div class="wrap" @click="goNext('Certification')">
          <div class="left fleft">实名认证</div>
          <div class="reset fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          <div class="right noset fright" v-if="userInfo.is_real_name == 0">未认证</div>
          <div class="right fright" v-else>已认证</div>
        </div>
      </div>

      <!--微信二维码-->
      <div class="wechat" @click="goNext('WeChatQRCode')">
        <div class="left fleft">微信二维码</div>
        <div class="reset fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
        <div class="right noset fright">未上传</div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "PersonalData",
      components:{
        Header
      },
      data () {
        return {
          userInfo: {}
        }
      },
      methods:{
        getData () {
          this.$axios.get('v1/user').then(res => {
            console.log(res);
            this.userInfo = res.data
          })
        },
        goNext (page) {
          this.$router.push(`/${page}`)
        }
      },
      created () {
        this.getData()
      }
    }
</script>

<style scoped lang="less" src="../assets/css/PersonalData.less">

</style>
