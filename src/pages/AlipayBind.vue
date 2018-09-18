<template>
    <div class="alipaybind">
      <!--头部-->
      <Header v-if="!this.$store.state.isWeChat">支付宝绑定</Header>
      <!--输入部分-->
      <div class="content">
        <div class="wrap">
          <i class="iconfont icon-yonghu1 fleft"></i>
          <input type="text" class="fleft" v-model="userInfo.real_name">
          <div class="clear fright"><img src="../assets/img/Login/clear.png"/></div>
        </div>
        <div class="wrap">
          <i class="iconfont icon-shouji1 fleft" ></i>
          <input type="text" class="fleft" v-model="userInfo.user_name">
          <div class="clear fright"><img src="../assets/img/Login/clear.png"/></div>
        </div>
        <div class="wrap">
          <i class="iconfont icon-anquan fleft"></i>
          <input type="text" class="fleft">
          <div class="code fright">点击获取</div>
        </div>
      </div>

      <!--确定按钮-->
      <div class="btn" @click="bindAliPay()">立即绑定</div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "AlipayBind",
      components:{
        Header
      },
      data () {
        return {
          userInfo:[],
        }
      },
      methods:{
        bindAliPay () {

        },
        getData () {
          this.$axios.get('user').then(res => {
            this.userInfo = res.data
          })
        }
      },
      created () {
        this.getData()
      }
    }
</script>

<style scoped lang="less" src="../assets/css/AlipayBind.less">

</style>
