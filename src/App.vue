<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods:{
      isWeChat () {
        function isWX(){
          var ua = navigator.userAgent.toLowerCase();
          return (/micromessenger/.test(ua)) ? true : false;
        }
        this.$store.commit("isWeChat", isWX());
      },
    },
    created () {
    this.isWeChat ()
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F0F2F4;
  width: 100%;
  height: 100vh;
}
a{
  text-decoration: none;
}
.fleft{
  float: left;
}
.fright{
  float: right;
}
img{
  width: 100%;
  height: 100%;
  display: block;
}
.clearfix::after {
  content: '';
  visibility: hidden;
  display: block;
  clear: both;
}
.Block{
  width: 100%;
  height: 49px;
}
</style>
