<template>
    <div class="code">
      <Header v-if="!this.$store.state.isWeChat">
        微信二维码
        <span class="modify" v-if="isWXQRcode">修改</span>
      </Header>
      <!--个人信息-->
      <div class="self ">
        <div class="img fleft"><img :src="userInfo.avatar"></div>
        <div class="username fleft">{{userInfo.real_name}}<span>{{type}}</span></div>
        <div class="phone fleft">手机号码：{{userInfo.user_mobile}}</div>
      </div>

      <!--上传二维码-->
      <div class="updata" v-if="!isWXQRcode">
        <div class="img"><img src="../assets/img/My/WX_updata.png"></div>
        <div class="tip">点击上传二维码</div>
        <div class="word">下级用户可直接与您联系</div>
      </div>

      <!--显示二维码-->
      <div class="display" v-if="isWXQRcode">
        <div class="img"><img src="../assets/img/My/QRcode.png"></div>
        <div class="word">下级用户可直接与您联系</div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "WeChatQRCode",
      components:{
        Header
      },
      data () {
        return {
          userInfo: {},
          isWXQRcode: false,
          type: ''
        }
      },
      methods:{
        getData () {
          this.$axios.get('v1/user').then(res => {
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

<style scoped lang="less" src="../assets/css/WeChatQRCode.less">

</style>
