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
          <div class="title">订单编号：{{item.ordersn}}</div>
          <div class="class">{{item.type}}<span>{{item.money}}</span></div>
        </div>
        <div class="next fright" @click="goNext(item.id)">
          <img src="../assets/img/MyWallet/icon2.png">
        </div>
        <div class="right fright">
          <!--<div class="time">{{item.updated_at}}</div>-->
          <div class="status"
               :class="{'pass':item.status === '已结算','nopass':item.status === '已驳回'||'结算失败','check':item.status === '结算中'||'待结算'}">
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
          DetailData:[],
          page:1,
          last_page: 0,
          scroll:0
        }
      },
      components: {
        Header
      },
      methods:{
        handleScroll () {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          // console.log(scrollTop);
          if (scrollTop > 800&&this.page < this.last_page) {
            this.page ++;
            this.getDetail(1)
          }
        },
        getDetail (id) {
          this.option = id
          if (this.option === 1) {
            this.$axios.post(`v1/user/withdraw/log?page=${this.page}&status=${2}`).then(res => {
              this.last_page = res.data.last_page;
              this.DetailData = [...this.DetailData,...res.data.data];
              console.log(this.DetailData);
              this.DetailData.forEach(item => {
                //把type类型数字变成汉字
                if (item.type === 1) {
                  item.type = '银行卡'
                } else if (item.type === 2) {
                  item.type = '支付宝'
                } else if (item.type === 3){
                  item.type = '微信'
                }
                //把状态数字变成汉字
                if (item.status === 1) {
                  item.status = '待结算'
                } else if (item.status === 2) {
                  item.status = '已结算'
                } else if (item.status === 3) {
                  item.status = '已驳回'
                } else if (item.status === 4) {
                  item.status = '结算中'
                } else if (item.status === 5) {
                  item.status = '结算失败'
                }
                //把审核日期时间变成日期

              })
            })
          } else {
            // this.DetailData = []
          }

        },
        goNext (id) {
          this.$router.push({path:'/Detail',query:{id}})
        }
      },
      mounted () {
        window.addEventListener('scroll',this.handleScroll)
      },
      created () {
        this.getDetail(1)
      }
    }
</script>

<style scoped lang="less" src="../assets/css/CashAboutDetail.less">

</style>
