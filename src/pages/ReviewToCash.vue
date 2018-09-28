<template>
    <div class="review">
      <!--头部-->
      <Header v-if="!this.$store.state.isWeChat">提现</Header>

      <!--内容-->
      <div class="review-content">
        <!--提示图标-->
        <div class="tip">
          <div class="img"><img src="../assets/img/Message/img_icon_fxover.png"></div>
          <div class="word">提现审核中..</div>
        </div>
        <!--提现详情-->
        <div class="detail">
          <div class="wrap">
            <div class="left fleft">提现金额：</div>
            <div class="right fright">￥{{money}}</div>
          </div>
          <div class="wrap">
            <div class="left fleft">提现手续费：</div>
            <div class="right fright">￥{{rate}}</div>
          </div>
          <div class="wrap">
            <div class="left fleft">实际到账金额：</div>
            <div class="right fright">￥{{money}}</div>
          </div>
        </div>
        <!--按钮-->
        <div class="btn" @click="back">我知道了</div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "ReviewToCash",
      components:{
        Header
      },
      data () {
        return {
          money:0,
          rate:0,
        }
      },
      methods:{
        getData () {
          let money = this.$route.query.count;
          let rate = this.$route.query.rate;
          this.money = money;
          this.rate = rate;
        },
        back () {
          this.$router.push('/')
        }
      },
      created () {
        this.getData()
      }
    }
</script>

<style scoped lang="less" src="../assets/css/ReviewToCash.less">

</style>
