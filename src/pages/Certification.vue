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
            <span class="fright">长期</span><input type="checkbox" class="checkbox fright">
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
            <input type="text" class="fleft" placeholder="请选择银行">
            <div class="reset fright" ><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>
          <div class="wrap clearfix border">
            <div class="left fleft">地区</div>
            <input type="text" :focus="show" class="fleft" v-model="area" placeholder="请选择开户地区">
            <div class="reset fright" @click="show"><img src="../assets/img/MyWallet/icon2.png" ></div>
            <vue-city-picker ref="picker" @select="select"></vue-city-picker>
          </div>
          <div class="wrap clearfix">
            <div class="left fleft">开户行</div>
            <input type="text" class="fleft" placeholder="请选择开户行">
            <div class="reset fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
  import vueCityPicker from 'vue-city-bspicker'
    export default {
      name: "Certification",
      components:{
        Header,
        vueCityPicker
      },
      data () {
        return {
          area:''
        }
      },
      methods:{
        show: function(){
          this.$refs['picker'].show();
        },
        select: function(){
          this.area = arguments[2];
          console.log(this.area);
        }
      }
    }
</script>

<style scoped lang="less" src="../assets/css/Certification.less">

</style>
