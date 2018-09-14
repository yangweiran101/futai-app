<template>
    <div class="register">
      <!--头部标题-->
      <Header>快速注册</Header>
      <!--内容板块-->
      <div class="content">
          <form  novalidate @submit.prevent="register()" >
            <div class="input-wrap">
              <i class="iconfont icon-shouji"></i>
              <input type="text" placeholder="请输入手机号码" name="userMobile" v-model="userMobile">
            </div>
            <div class="input-wrap">
              <i class="iconfont icon-yanzhengma"></i>
              <input type="text" placeholder="请输入图形验证码" class="verify" name="code" v-model="code">
              <img src="../assets/img/Index/red.png" alt="img-code" class="img-code" @click="register()">
            </div>
            <div class="input-wrap">
              <i class="iconfont icon-yanzhengma"></i>
              <input  type="number" id="regCode" class="verify" placeholder="请输入验证码" name="regCode" v-model="regCode" >
              <button class="getcode-btn" type="button"  @click="register()" :disabled="disabled">获取验证码</button>
            </div>
            <div class="input-wrap">
              <i class="iconfont icon-mima"></i>
              <input type="password" placeholder="请输入密码" name="password" v-model="password">
            </div>
            <div class="input-wrap">
              <i class="iconfont icon-yonghu"></i>
              <input type="text" placeholder="请输入邀请码" class="ref" v-model="ref">
            </div>
            <div class="input-wrap ck-wrap">
              <div class="Agreement-check fleft">
                <input type="checkbox" class="checkBox" v-model="checkBox">
              </div>
              <div class="Agreement-msg">
                <span>我已阅读并同意</span>
                <div @click="register()">
                  <span class="msg-content">《会员注册协议》</span>
                </div>
              </div>
            </div>
            <div class="input-wrap submitbtn-wrap">
              <button class="subbtn" type="submit">确 定</button>
            </div>
            <div class="input-wrap login-wrap">
              <!--<div class="login-link" v-if="appKindType > 0" @click="GoDownApp">已有账号，下载APP登录</div>-->
              <router-link to="/Login" class="login-link fright" >已有账号，直接登录</router-link>
            </div>
          </form>
        </div>

    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      components:{
        Header
      },
      data () {
        return {
          baseUrl: '',
          userMobile: '',
          imgCodeUrl: '',
          disabled:false,
          second:60,
          time:0,
          code: '',
          regCode: '',
          password: '',
          checkBox:'',
          appId:'',
          FtAppId:'',
          ref: '',
          appKindType:'',
          userArray:[],
        }
      },
      methods:{
        register () {

        }
      }
    }
</script>

<style scoped lang="less" src="../assets/css/Register.less">

</style>
