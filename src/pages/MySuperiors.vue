<template>
  <div class="mysuperiors">
    <!--我的上级页面-->
    <Header v-if="!this.$store.state.isWeChat">我的上级</Header>

    <!--个人信息-->
    <div class="self ">
      <div class="img fleft"><img :src="userInfo.avatar"></div>
      <div class="username fleft">{{userInfo.real_name}}<span>{{type}}</span></div>
      <div class="phone fleft">手机号码：{{userInfo.user_mobile}}</div>
      <div class="contact"><img src="../assets/img/My/superiors.png"></div>
    </div>

    <!--显示二维码-->
    <div class="display">
      <div class="word">用微信扫一扫联系上级</div>
      <div class="img"><img src="../assets/img/My/QRcode.png"></div>
      <div class="btn">保存至相册</div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "MySuperiors",
      components:{
        Header
      },
      data () {
        return {
          userInfo: {},
          type: ''
        }
      },
      methods:{
        getData () {
          this.$axios.get('user').then(res => {
            console.log(res);
            this.userInfo = res.data;
            if (this.userInfo.user_type == '2') {
              this.type = '黄金会员'
            } else if (this.userInfo.user_type == '3') {
              this.type = '钻石会员'
            } else {
              this.type = '普通会员'
            }
          })
        }
      },
      created () {
        this.getData()
      }
    }
</script>

<style scoped lang="less" src="../assets/css/MySuperiors.less">

</style>
