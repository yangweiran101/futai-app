<template>
    <div class="message">
      <Header v-if="!this.$store.state.isWeChat">消息中心</Header>
      <div class="contont">
        <div class="wrap" @click="gotoMsgDetail()">
          <div class="img fleft"><img src="../assets/img/Message/img_notice.png"></div>
          <div class="detail fleft">
            <div class="title">公司公告</div>
            <div class="tip">APP2.0项目上线了，快来体验吧~</div>
          </div>
          <div class="time fright">18:32</div>
        </div>
        <div class="wrap" @click="gotoMsgDetail()">
          <div class="img fleft">
            <img src="../assets/img/Message/img_notice.png">
            <badge class="badge"></badge>
          </div>
          <div class="detail fleft">
            <div class="title">公司公告</div>
            <div class="tip">APP2.0项目上线了，快来体验吧~</div>
          </div>
          <div class="time fright">18:32</div>
        </div>
      </div>
    </div>
</template>

<script>
  import { Badge } from 'vux'
  import Header from '../components/Header'
    export default {
      components:{
        Header,
        Badge
      },
      data () {
        return {
          id: 1
        }
      },
      methods:{
        gotoMsgDetail () {
          let badge = document.querySelector('.badge');
          badge.style.display = 'none';
          this.$router.push(`/MessageDetail?id=${this.id}`);
        }
      }
    }
</script>

<style scoped lang="less" src="../assets/css/Message.less">

</style>
