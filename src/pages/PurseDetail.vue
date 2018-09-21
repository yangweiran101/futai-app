<template>
    <div class="purse">
      <!--头部板块-->
      <Header v-if="!this.$store.state.isWeChat">
        钱包明细
        <span class="header-filter fright">筛选</span>
      </Header>

      <!--选项卡-->
      <div class="option">
        <div class="wrap" @click="getDetail(1)"><span :class="[option === 1?'active' :'']">全部</span></div>
        <div class="wrap" @click="getDetail(2)"><span :class="[option === 2?'active' :'']">收入</span></div>
        <div class="wrap" @click="getDetail(3)"><span :class="[option === 3?'active' :'']">支出</span></div>
      </div>

      <!--详情板块(空)-->
      <div class="detail-none" v-if="isData">
        <div class="img"><img src="../assets/img/Message/img_fxtxmx_null.png"></div>
        <div class="tip">暂时没有此项数据哦~</div>
      </div>

      <!--详情板块-->
      <div class="detail" v-if="!isData">
        <div class="wrap" v-for="(item,key) in DetailData" :key="key">
          <div class="left fleft">
            <div class="title">{{item.remark}}</div>
            <div class="time">{{item.created_at}}</div>
          </div>
          <div class="right fright">{{item.num}}</div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "PurseDetail",
      components:{
        Header
      },
      data () {
        return {
          option: 1,
          isData: false,
          DetailData:[]
        }
      },
      methods: {
        getDetail (id) {
          this.option = id
          let status = null
          if (id === 2) {
            status = 1
          }else if (id === 3) {
            status = 2
          }
          this.$axios.get(`v1/user/finance/log/credit2?status=${status}`).then(res => {
            // console.log(res);
            if (res.total == 0) {
              this.isData = true
            }
            this.DetailData = res.data.data
          })

        }
      },
      created () {
        this.getDetail(1)
      }
    }
</script>

<style scoped lang="less" src="../assets/css/PurseDetail.less">

</style>
