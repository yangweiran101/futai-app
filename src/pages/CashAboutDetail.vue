<template>
  <div class="cash-detail">
    <!--头部-->
    <Header v-if="!this.$store.state.isWeChat">
      提现明细
      <span class="header-filter fright">筛选</span>
    </Header>

    <!--选项卡-->
    <div class="option">
      <div class="wrap" @click="getDetail(1)"><span :class="[option === 1?'active' :'']">审核中</span></div>
      <div class="wrap" @click="getDetail(2)"><span :class="[option === 2?'active' :'']">已通过</span></div>
      <div class="wrap" @click="getDetail(3)"><span :class="[option === 3?'active' :'']">未通过</span></div>
    </div>

    <!--详情板块(空)-->
    <div class="detail-none" v-if="isData">
      <div class="img"><img src="../assets/img/Message/img_fxtxmx_null.png"></div>
      <div class="tip">暂时没有此项数据哦~</div>
    </div>

    <!--详情板块-->
    <div class="detail" v-if="!isData">
      <div class="wrap" v-for="(item,index) in DetailData" :key="index">
        <div class="left fleft">
          <div class="title">订单编号：{{item.number}}</div>
          <div class="class">{{item.mode}}<span>{{item.count}}</span></div>
        </div>
        <div class="next fright" @click="goNext()">
          <img src="../assets/img/MyWallet/icon2.png">
        </div>
        <div class="right fright">
          <div class="time">{{item.time}}</div>
          <div class="status"
               :class="{'pass':item.status === '已通过','nopass':item.status === '未通过','check':item.status === '审核中'}">
            {{item.status}}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "CashAboutDetail",
      data () {
        return {
          isData:false,
          option: 1,
          DetailData:[{number:'购买XXXXXX商品',mode:'支付宝',time:'18/11/15',count:100,status:'已通过'},
            {number:'支付宝****3648提现',mode:'银行卡',time:'16/11/13',count:200,status:'未通过'},
            {number:'购买yyyyy商品',mode:'支付宝',time:'17/06/15',count:500,status:'已通过'},
            {number:'购买aaaa商品',mode:'银行卡',time:'18/08/06',count:100,status:'未通过'},
            {number:'购买666商品',mode:'支付宝',time:'17/11/15',count:100,status:'审核中'},
            {number:'购买XXXXXX商品',mode:'银行卡',time:'15/11/15',count:100,status:'已通过'},],
          total:[
            {number:'购买XXXXXX商品',mode:'支付宝',time:'18/11/15',count:100,status:'已通过'},
            {number:'支付宝****3648提现',mode:'银行卡',time:'16/11/13',count:200,status:'未通过'},
            {number:'购买yyyyy商品',mode:'支付宝',time:'17/06/15',count:500,status:'已通过'},
            {number:'购买aaaa商品',mode:'银行卡',time:'18/08/06',count:100,status:'未通过'},
            {number:'购买666商品',mode:'支付宝',time:'17/11/15',count:100,status:'审核中'},
            {number:'购买XXXXXX商品',mode:'银行卡',time:'15/11/15',count:100,status:'已通过'},
          ],
        }
      },
      components: {
        Header
      },
      methods:{
        getDetail (id) {
          this.option = id
          //选择全部时
          // if (id === 1) {
          //   this.DetailData = []
          //   this.DetailData = this.total
          //   // console.log(this.DetailData);
          // }
          // //选择收入时
          // if (id === 2) {
          //   this.DetailData = []
          //   this.total.forEach(val => {
          //     if (val.count > 0) {
          //       this.DetailData.push(val)
          //     }
          //   })
          //   // console.log(this.DetailData);
          // }
          // //选择支出时
          // if (id === 3) {
          //   this.DetailData = []
          //   this.total.forEach(val => {
          //     if (val.count < 0) {
          //       this.DetailData.push(val)
          //     }
          //   })
          //   // console.log(this.DetailData);
          // }
        },
        goNext () {
          this.$router.push('/Detail')
        }
      },
      created () {
        this.getDetail(1)
      }
    }
</script>

<style scoped lang="less" src="../assets/css/CashAboutDetail.less">

</style>
