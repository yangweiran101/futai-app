<template>
    <div class="promote">
      <!--头部栏-->
      <div class="header" v-if="!this.$store.state.isWeChat">
        <div class="header-title">推广</div>
      </div>

      <!--选项栏-->
      <div class="content">
        <!--邀请好友-->
        <div class="wrap" @click="goNext('InviteFriend')">
          <div class="img fleft"><img src="../assets/img/Promote/iconNovice@3x.png"></div>
          <div class="title fleft">邀请好友</div>
          <div class="next fright"><img src="../assets/img/Promote/icon1@3x.png" alt=""></div>
          <div class="tips fright">人越多，收益越多</div>
        </div>
        <!--推广海报-->
        <div class="wrap" @click="goNext('Posters')">
          <div class="img fleft"><img src="../assets/img/Promote/iconProfit@3x.png"></div>
          <div class="title fleft">推广海报</div>
          <div class="next fright"><img src="../assets/img/Promote/icon1@3x.png" alt=""></div>
          <div class="tips fright">分享二维码快速增粉</div>
        </div>
        <!--分享链接-->
        <div class="wrap" @click="goNext('ShareLink')">
          <div class="img fleft"><img src="../assets/img/Promote/iconFriends@3x.png"></div>
          <div class="title fleft">分享链接</div>
          <div class="next fright"><img src="../assets/img/Promote/icon1@3x.png" alt=""></div>
          <div class="tips fright">分享收益链接</div>
        </div>
        <!--宣传素材-->
        <div class="wrap" @click="goNext('PropagandistMaterial')">
          <div class="img fleft"><img src="../assets/img/Promote/iconposter@3x.png"></div>
          <div class="title fleft">宣传素材</div>
          <div class="next fright"><img src="../assets/img/Promote/icon1@3x.png" alt=""></div>
          <div class="tips fright">中央文案，一键转发</div>
        </div>
        <!--展业H5-->
        <div class="wrap" @click="goNext('ShowH5')">
          <div class="img fleft"><img src="../assets/img/Promote/iconSource@3x.png"></div>
          <div class="title fleft">展业H5</div>
          <div class="next fright"><img src="../assets/img/Promote/icon1@3x.png" alt=""></div>
          <div class="tips fright">好玩h5助您展业</div>
        </div>
        <!--物料下载-->
        <div class="wrap">
          <div class="img fleft"><img src="../assets/img/Promote/iconh5@3x.png"></div>
          <div class="title fleft">物料下载</div>
          <div class="next fright"><img src="../assets/img/Promote/icon1@3x.png" alt=""></div>
          <div class="tips fright">海量宣传资料</div>
        </div>
      </div>

      <!--TableBar空格-->
      <div class="Block"></div>

      <!--底部选项卡-->
      <TableBar></TableBar>
    </div>
</template>

<script>
  import TableBar from '../components/TableBar'
    export default {
      components:{
        TableBar,
      },
      methods:{
        goNext (page) {
          this.$router.push(`/${page}`)
        }
      }
    }
</script>

<style scoped lang="less" src="../assets/css/Promote.less">

</style>
