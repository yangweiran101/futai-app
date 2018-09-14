<template>
    <div class="msgdetail">
      <Header v-if="!this.$store.state.isWeChat">消息中心</Header>
      <div class="content">
        <div class="detail">
          <div class="detail-title">您有新粉丝啦~</div>
          <div class="detail-time">2018-12-11 23:14:25</div>
          <div class="detail-img"><img src="../assets/img/Message/pic.png"></div>
          <div class="detail-read">
            阅读全文
            <img class="fright" src="../assets/img/MyWallet/icon2.png">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
        name: "MessageDetail",
      components:{
          Header
      }
    }
</script>

<style scoped lang="less" src="../assets/css/MessageDetail.less">

</style>
