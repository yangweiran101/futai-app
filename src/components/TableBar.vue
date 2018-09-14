<template>
    <div class="bar">
      <!--首页按钮-->
      <router-link to="/" class="btn">
        <div class="img">
          <img src="../assets/img/TableBar/Index2.png" v-if="$route.path =='/'">
          <img src="../assets/img/TableBar/Index.png" v-else="$route.path !=='/'">
        </div>
        <div class="name">
          <span class="Y" v-if="$route.path =='/'">首页</span>
          <span class="N" v-else="$route.path !=='/'">首页</span>
        </div>
      </router-link>
      <!--代理页按钮-->
      <router-link to="/Agent" class="btn">
        <div class="img">
          <img src="../assets/img/TableBar/Agent2.png" v-if="$route.path =='/Agent'">
          <img src="../assets/img/TableBar/Agent.png" v-else="$route.path !=='/Agent'">
        </div>
        <div class="name">
          <span class="Y" v-if="$route.path =='/Agent'">代理</span>
          <span class="N" v-else="$route.path !=='/Agent'">代理</span>
        </div>
      </router-link>
      <!--推广页按钮-->
      <router-link to="/Promote" class="btn">
        <div class="img">
          <img src="../assets/img/TableBar/Promote2.png" v-if="$route.path =='/Promote'">
          <img src="../assets/img/TableBar/Promote.png" v-else="$route.path !=='/Promote'">
        </div>
        <div class="name">
          <span class="Y" v-if="$route.path =='/Promote'">推广</span>
          <span class="N" v-else="$route.path !=='/Promote'">推广</span>
        </div>
      </router-link>
      <!--我的页按钮-->
      <router-link to="/My" class="btn">
        <div class="img">
          <img src="../assets/img/TableBar/My2.png" v-if="$route.path =='/My'">
          <img src="../assets/img/TableBar/My.png" v-else="$route.path !=='/My'">
        </div>
        <div class="name">
          <span class="Y" v-if="$route.path =='/My'">我的</span>
          <span class="N" v-else="$route.path !=='/My'">我的</span>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'TableBar'
}
</script>

<style scoped lang="less" src="../assets/css/TableBar.less">

</style>
