<template>
    <div class="sharelink">
      <Header v-if="!this.$store.state.isWeChat">分享链接</Header>
      <div class="share-banner"><img src="../assets/img/Promote/banner-bg.png"></div>
      <div class="share-content">
        <!--标题-->
        <div class="headline"><span>分享链接</span> <span class="right">得收益</span></div>
        <!--分享栏-->
        <div class="wrap border clearfix">
          <div class="img fleft"><img src="../assets/img/Promote/headportrait-0.png"></div>
          <div class="middle fleft">
            <div class="title">分享app</div>
            <div class="tip">这里是专业的积分兑换平台。</div>
          </div>
          <div class="btn fright">分享</div>
        </div>
        <div class="wrap border clearfix">
          <div class="img fleft"><img src="../assets/img/Promote/headportrait-0.png"></div>
          <div class="middle fleft">
            <div class="title">积分兑换</div>
            <div class="tip">你的银行积分过期了吗？来这里兑换现金吧！</div>
          </div>
          <div class="btn fright">分享</div>
        </div>
        <div class="wrap border clearfix">
          <div class="img fleft"><img src="../assets/img/Promote/headportrait-0.png"></div>
          <div class="middle fleft">
            <div class="title">积分兑换</div>
            <div class="tip">你的银行积分过期了吗？来这里兑换现金吧！</div>
          </div>
          <div class="btn fright">分享</div>
        </div>
        <div class="wrap border clearfix">
          <div class="img fleft"><img src="../assets/img/Promote/headportrait-0.png"></div>
          <div class="middle fleft">
            <div class="title">积分兑换</div>
            <div class="tip">你的银行积分过期了吗？来这里兑换现金吧！</div>
          </div>
          <div class="btn fright">分享</div>
        </div>
        <div class="wrap clearfix">
          <div class="img fleft"><img src="../assets/img/Promote/headportrait-0.png"></div>
          <div class="middle fleft">
            <div class="title">积分兑换</div>
            <div class="tip">你的银行积分过期了吗？来这里兑换现金吧！</div>
          </div>
          <div class="btn fright">分享</div>
        </div>
      </div>
      <div class="share-net">
        <div class="title">专属收益链接</div>
        <div class="net fleft">http://www.jiefutong.net/</div>
        <div class="btn fright">复制</div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "ShareLink",
      components:{
        Header
      }
    }
</script>

<style scoped lang="less" src="../assets/css/ShareLink.less">

</style>
