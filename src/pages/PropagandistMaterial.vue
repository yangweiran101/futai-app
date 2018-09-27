<template>
    <div class="material">
      <Header v-if="!this.$store.state.isWeChat">宣传素材</Header>
      <!--分享块-->
      <div class="material-content">
        <div class="wrap">
          <div class="headline clearfix">
            <div class="img fleft"><img src="../assets/img/Promote/headportrait-0.png"></div>
            <div class="middle fleft">
              <div class="title">福泰通兑</div>
              <div class="time">2小时前</div>
            </div>
            <div class="btn fright"><i class="iconfont icon-fenxiang" style="font-size: 13px;font-weight: bold;"></i>分享</div>
          </div>
          <div class="word">与其羡慕别人成功，不如勇敢踏出第一步， 行动起来吧，种花生永远不晚！</div>
          <div class="poster"><img src="../assets/img/Promote/banner-bg.png"></div>
        </div>
        <div class="wrap">
          <div class="headline clearfix">
            <div class="img fleft"><img src="../assets/img/Promote/headportrait-0.png"></div>
            <div class="middle fleft">
              <div class="title">福泰通兑</div>
              <div class="time">2小时前</div>
            </div>
            <div class="btn fright"><i class="iconfont icon-fenxiang" style="font-size: 13px;font-weight: bold;"></i>分享</div>
          </div>
          <div class="word">与其羡慕别人成功，不如勇敢踏出第一步， 行动起来吧，种花生永远不晚！</div>
          <div class="poster"><img src="../assets/img/Promote/banner-bg.png"></div>
        </div>
        <div class="wrap">
          <div class="headline clearfix">
            <div class="img fleft"><img src="../assets/img/Promote/headportrait-0.png"></div>
            <div class="middle fleft">
              <div class="title">福泰通兑</div>
              <div class="time">2小时前</div>
            </div>
            <div class="btn fright"><i class="iconfont icon-fenxiang" style="font-size: 13px;font-weight: bold;"></i>分享</div>
          </div>
          <div class="word">与其羡慕别人成功，不如勇敢踏出第一步， 行动起来吧，种花生永远不晚！</div>
          <div class="poster"><img src="../assets/img/Promote/banner-bg.png"></div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "PropagandistMaterial",
      components:{
        Header
      }
    }
</script>

<style scoped lang="less" src="../assets/css/PropagandistMaterial.less">

</style>
