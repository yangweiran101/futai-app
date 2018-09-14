<template>
  <div class="header">
    <div class="header-back" @click="goBack()"><img src="../assets/img/Agent/back.png"></div>
    <div class="header-title" ><slot></slot></div>
  </div>
</template>

<script>
    export default {
      data () {
        return{
          title: ''
        }

      },
      methods:{
        goBack () {
          this.$router.go(-1)
        },
      }
    }
</script>

<style scoped lang="less" src="../assets/css/Header.less">

</style>
