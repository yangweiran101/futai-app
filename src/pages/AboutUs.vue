<template>
    <div class="aboutus">
      <!--关于我们页面-->
      <Header v-if="!this.$store.state.isWeChat">关于我们</Header>

      <!--logo-->
      <div class="logo"><img src="../assets/img/Login/ic_launcher.png"></div>
      <div class="name">福泰通兑APP</div>
      <div class="version">版本号：V1.10</div>
      <div class="support">技术支持：河南捷付通电子科技有限公司</div>

    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "AboutUs",
      components:{
        Header
      },
      data () {
        return {
          config:{}
        }
      },
      methods:{
        getConfig () {
          this.$axios.post('config').then(res => {
            console.log(res);
            this.config = res.data
          })
        }
      },
      created () {
        this.getConfig()
      }
    }
</script>

<style scoped lang="less" src="../assets/css/AboutUs.less">

</style>
