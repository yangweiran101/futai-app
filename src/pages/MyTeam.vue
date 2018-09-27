<template>
    <div class="team">
      <Header v-if="!this.$store.state.isWeChat">我的团队</Header>

      <!--团队成员-->
      <div class="wrap">
        <div class="user clearfix">
          <div class="img fleft"><img src="../assets/img/BenefitList/Head1@1x.png"></div>
          <div class="middle fleft">
            <div class="title">张三</div>
            <div class="tip">注册时间：2018-06-16 23:11:36</div>
          </div>
          <div class="btn fright">贡献2.36元</div>
        </div>
        <div class="status">
          <div class="phone"><img src="../assets/img/My/myteam-phone.png">131****5678</div>
          <div class="phone"><img src="../assets/img/My/myteam-grade.png">黄金会员</div>
        </div>
      </div>

      <div class="wrap">
        <div class="user clearfix">
          <div class="img fleft"><img src="../assets/img/BenefitList/Head1@1x.png"></div>
          <div class="middle fleft">
            <div class="title">张三</div>
            <div class="tip">注册时间：2018-06-16 23:11:36</div>
          </div>
          <div class="btn fright">贡献2.36元</div>
        </div>
        <div class="status">
          <div class="phone"><img src="../assets/img/My/myteam-phone.png">131****5678</div>
          <div class="phone"><img src="../assets/img/My/myteam-grade.png">黄金会员</div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "MyTeam",
      components:{
        Header
      }
    }
</script>

<style scoped lang="less" src="../assets/css/MyTeam.less">

</style>
