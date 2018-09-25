<template>
    <div class="certification">
      <Header v-if="!this.$store.state.isWeChat">实名认证</Header>

      <!--身份证上传-->
      <div class="updata">
        <div class="block">
          <div class="tip">拍摄身份证正面</div>
          <div class="img"><img src="../assets/img/Certification/front.png"></div>
        </div>
        <div class="block">
          <div class="tip">拍摄身份证反面</div>
          <div class="img"><img src="../assets/img/Certification/back.png"></div>
        </div>
      </div>

      <!--持卡人信息-->
      <div class="userinfo">
        <div class="title">*请填写持卡人信息（必填）</div>
        <div class="content">
          <div class="wrap clearfix border">
            <div class="left fleft">持卡人</div>
            <input type="text" class="fleft" placeholder="请填写身份证姓名">
          </div>
          <div class="wrap clearfix border">
            <div class="left fleft">身份证</div>
            <input type="text" class="fleft" placeholder="请填写身份证号码">
          </div>
          <div class="wrap clearfix border">
            <div class="left fleft">签发日期</div>
            <input type="text" class="fleft" placeholder="请填写签发日期">
          </div>
          <div class="wrap clearfix">
            <div class="left fleft">失效日期</div>
            <input type="text" class="fleft" placeholder="请填写失效日期">
            <span class="fright">长期</span>
            <div class="checkbox fright" @click="handleIsLong">
              <img src="../assets/img/Certification/yes.png" v-if="isLong">
              <img src="../assets/img/Certification/no.png" v-else>
            </div>
          </div>
        </div>
      </div>

      <!--绑定储蓄卡-->
      <div class="userinfo">
        <div class="title">*请填写银行卡信息（必填）</div>
        <div class="content">
          <div class="wrap clearfix border">
            <div class="left fleft">卡号</div>
            <input type="number" class="fleft" placeholder="请填写储蓄卡卡号">
          </div>
          <div class="wrap clearfix border">
            <div class="left fleft">手机号码</div>
            <input type="tel" class="fleft" placeholder="请填写银行预留号码">
          </div>
          <div class="wrap clearfix border">
            <div class="left fleft">所属银行</div>
            <input v-model="value1" type="text" class="fleft" placeholder="请选择银行">
            <div class="reset fright" ><img src="../assets/img/MyWallet/icon2.png" @click="handleShow"></div>
            <popup-picker class="picker" :data="list" v-model="value1" @on-hide="onHide" :show="isShow"></popup-picker>
          </div>
          <div class="wrap clearfix border">
            <div class="left fleft">地区</div>
            <input type="text" :focus="show" class="fleft" v-model="area" placeholder="请选择开户地区">
            <div class="reset fright" @click="show"><img src="../assets/img/MyWallet/icon2.png" ></div>
            <vue-city-picker ref="picker" @select="select"></vue-city-picker>
          </div>
          <div class="wrap clearfix">
            <div class="left fleft">开户行</div>
            <input type="text" class="fleft" placeholder="请填写开户行">
            <!--<div class="reset fright"><img src="../assets/img/MyWallet/icon2.png" ></div>-->
          </div>
        </div>
      </div>

      <!--确定按钮-->
      <div class="btn" @click="submit()">提交</div>
    </div>
</template>

<script>
  import Header from '../components/Header'
  import vueCityPicker from 'vue-city-bspicker'
  import { PopupPicker } from 'vux'
    export default {
      name: "Certification",
      components:{
        Header,
        vueCityPicker,
        PopupPicker
      },
      data () {
        return {
          area:'',
          isLong: false,
          list: [['招商银行','中国工商银行','中国建设银行', '浦东发展银行', '中国农业银行', '中国民生银行',
          '兴业银行', '平安银行', '交通银行', '中信银行', '中国光大银行', '华夏银行', '中国银行', '广发银行',
            '中国邮政储蓄银行']],
          value1:[],
          isShow:false
        }
      },
      methods:{
        getBank () {
          // this.$axios.get('v1/user/cards/banks').then(res => {
          //   for (let item in res.data) {
          //     console.log(res.data[item]);
          //     // this.list[0].push(res.data[item])
          //   }
          // })
        },
        show: function(){ // 显示地区选项卡触发函数
          this.$refs['picker'].show();
        },
        select: function(){ // 确定地区后触发函数
          this.area = arguments[2].join(',')

        },
        handleIsLong () { // 实名信息是否长期
          this.isLong = !this.isLong
        },
        handleShow () { // 银行选项卡显示触发函数
          this.isShow = true
        },
        onHide (type) { // 银行选项卡显示触发函数
          this.isShow = false
        },
        submit () { // 信息提交函数

        }
      },
      created () {
        // this.getBank()
      }
    }
</script>

<style scoped lang="less" src="../assets/css/Certification.less">

</style>
