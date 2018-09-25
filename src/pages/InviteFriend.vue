<template>
    <div class="friend">
      <Header v-if="!this.$store.state.isWeChat">邀请好友</Header>
      <div class="content">
        <img src="../assets/img/Promote/InviteFriend.png">
        <div class="word">
          邀请好友加入本平台，只要
          <span>“被邀请人”</span>
          成功下卡，
          <span>“邀请人”</span>
          最高可获得190元
          奖励，邀请越多好友下卡成功，得到的 奖励越多。
        </div>
        <div class="share-btn">立即邀请</div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "InviteFriend",
      components:{
        Header
      }
    }
</script>

<style scoped lang="less" src="../assets/css/InviteFriend.less">

</style>
