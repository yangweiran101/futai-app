<template>
    <div class="promote">
      <!--头部栏-->
      <div class="header" v-if="!this.$store.state.isWeChat">
        <div class="header-title">推广</div>
      </div>

      <!--选项栏-->
      <div class="content">
        <!--新手指引-->
        <div class="wrap">
          <div class="img fleft"><img src="../assets/img/Promote/iconNovice@3x.png"></div>
          <div class="title fleft">新手指引</div>
          <div class="next fright"><img src="../assets/img/Promote/icon1@3x.png" alt=""></div>
          <div class="tips fright">帮你快速走出新手区</div>
        </div>
        <!--平台收益-->
        <div class="wrap">
          <div class="img fleft"><img src="../assets/img/Promote/iconProfit@3x.png"></div>
          <div class="title fleft">平台收益</div>
          <div class="next fright"><img src="../assets/img/Promote/icon1@3x.png" alt=""></div>
          <div class="tips fright">稳定增长，收益无忧</div>
        </div>
        <!--邀请好友-->
        <div class="wrap">
          <div class="img fleft"><img src="../assets/img/Promote/iconFriends@3x.png"></div>
          <div class="title fleft">邀请好友</div>
          <div class="next fright"><img src="../assets/img/Promote/icon1@3x.png" alt=""></div>
          <div class="tips fright">人越多，收益越多</div>
        </div>
        <!--推广海报-->
        <div class="wrap">
          <div class="img fleft"><img src="../assets/img/Promote/iconposter@3x.png"></div>
          <div class="title fleft">推广海报</div>
          <div class="next fright"><img src="../assets/img/Promote/icon1@3x.png" alt=""></div>
          <div class="tips fright">分享二维码，快速增粉</div>
        </div>
        <!--宣传素材-->
        <div class="wrap">
          <div class="img fleft"><img src="../assets/img/Promote/iconSource@3x.png"></div>
          <div class="title fleft">宣传素材</div>
          <div class="next fright"><img src="../assets/img/Promote/icon1@3x.png" alt=""></div>
          <div class="tips fright">中央文案，一键转发</div>
        </div>
        <!--展业H5-->
        <div class="wrap">
          <div class="img fleft"><img src="../assets/img/Promote/iconh5@3x.png"></div>
          <div class="title fleft">展业H5</div>
          <div class="next fright"><img src="../assets/img/Promote/icon1@3x.png" alt=""></div>
          <div class="tips fright">好玩H5助你展业</div>
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
      }
    }
</script>

<style scoped lang="less" src="../assets/css/Promote.less">

</style>
