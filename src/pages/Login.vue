<template>
    <div class="login">
      <div class="login_img">
        <img src="../assets/img/Login/xinjue.png" >
      </div>

      <form novalidate @submit.prevent="login" >
        <div class="input-wrap">
          <i class="iconfont icon-shouji"></i>
          <input type="text" placeholder="请输入手机号码" name="userMobile" v-model="form.userMobile">
          <img id="clear" src="../assets/img/Login/clear.png" width="18" @click="clearMobile" v-show="form.userMobile !== ''"/>
        </div>
        <div class="input-wrap">
          <i class="iconfont icon-mima"></i>
          <input :type="inputType" placeholder="请输入密码" name="password" v-model="form.password" >
          <img class="eye" src="../assets/img/Login/hidepassword.png"  width="20" v-show="isHide" @click="isHidePass">
          <img class="eye" src="../assets/img/Login/showpassword.png"  width="20" v-show="!isHide" @click="isHidePass">
        </div>
        <div class="other-operate">
          <router-link to="/Login" class="forget-pwd fright">忘记密码</router-link>
          <router-link to="/Register" class="forget-pwd fright">快速注册</router-link>
        </div>
        <div class="input-wrap submitbtn-wrap">
          <button class="subbtn" type="submit">确 定</button>
        </div>
      </form>

    </div>
</template>

<script>
    export default {
      data () {
        return {
          form:{
            userMobile:'15737345975',
            password:'123456'
          },
          inputType:'password',
          isHide:true,
        }
      },
      methods:{
        //清空手机号码
        clearMobile () {
          this.form.userMobile = '';
        },
        //密码是否可见
        isHidePass () {
          this.isHide = !this.isHide;
          if(this.isHide){
            this.inputType = 'password'
          }else{
            this.inputType = 'text'
          }
        },
        getIndex () {
          this.$router.push('/')
        },
        login () {
          this.$axios.post('/login',this.form).then(res => {
            let token = `${res.data.token_type} ${res.data.access_token}`
            this.$store.commit("getLoginToken",token)
            console.log('登陆成功')
          })
          this.getIndex()
          }
      }
    }
</script>

<style scoped lang="less" src="../assets/css/Login.less">

</style>
