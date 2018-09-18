<template>
    <div class="feedback">
      <!--头部-->
      <Header v-if="!this.$store.state.isWeChat">问题反馈</Header>

      <!--问题意见板块-->
      <div class="title">问题和意见</div>
      <textarea name="question"
                class="question"
                cols="30"
                rows="10"
                placeholder="请输入您的遇到的问题，以便于我们为您提供更好的帮助">

      </textarea>

      <!--图片上传板块-->
      <div class="title">图片上传（选填，提供问题截图）</div>
      <div class="updata">
        <div class="img"><img src="../assets/img/My/feedback_updata.png"></div>
      </div>

      <!--联系电话板块-->
      <div class="title">联系电话</div>
      <input class="phone" placeholder="选填，便于与您联系" type="tel">

      <div class="btn">提交</div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "ProblemFeedback",
      components:{
        Header
      }
     }
</script>

<style scoped lang="less" src="../assets/css/ProblemFeedback.less">

</style>
