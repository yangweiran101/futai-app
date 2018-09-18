<template>
    <div class="setting">
      <!--头部-->
      <Header v-if="!this.$store.state.isWeChat">设置</Header>

      <!--图标-->
      <div class="img"><img src="../assets/img/Login/ic_launcher.png"></div>

      <!--内容-->
      <div class="content">
        <div class="wrap">
          <div class="left fleft">版本信息</div>
          <div class="right fright">1.0.0</div>
        </div>
        <div class="wrap">
          <div class="left fleft">服务协议</div>
          <div class="reset fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
        </div>
        <div class="wrap">
          <div class="left fleft">技术支持</div>
          <div class="reset fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          <div class="right fright" style="font-size: 12px">河南捷付通电子科技有限公司</div>
        </div>
        <div class="wrap" @click="goNext('ProblemFeedback')">
          <div class="left fleft">用户反馈</div>
          <div class="reset fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
        </div>
      </div>

      <!--按钮-->
      <div class="btn">
        <div class="icon"><img src="../assets/img/My/icon_signout.png"></div>
        退出
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "Setting",
      components:{
        Header
      },
      methods:{
        goNext (page) {
          this.$router.push(`/${page}`)
        }
      }
    }
</script>

<style scoped lang="less" src="../assets/css/Setting.less">

</style>
