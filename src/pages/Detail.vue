<template>
    <div class="detail">
      <!--头部组件-->
      <Header v-if="!this.$store.state.isWeChat">明细详情</Header>

      <!--提现总额-->
      <div class="detail-total">
        <div class="left fleft">提现</div>
        <div class="number fleft">{{DetailData.money}}元</div>
        <div class="right fright">{{DetailData.status}}</div>
      </div>

      <!--提现详情-->
      <div class="detail-content">
        <div class="wrap">
          <div class="left fleft">订单编号</div>
          <div class="right fright">{{DetailData.ordersn}}</div>
        </div>
        <div class="wrap">
          <div class="left fleft">提现方式</div>
          <div class="right fright">{{DetailData.type}}</div>
        </div>
        <div class="wrap">
          <div class="left fleft">账户</div>
          <div class="right fright">{{DetailData.bank_card_no}}</div>
        </div>
        <div class="wrap">
          <div class="left fleft">说明</div>
          <div class="right fright">{{DetailData.remark}}</div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "Detail",
      components:{
        Header
      },
      data () {
        return {
          DetailData:{}
        }
      },
      methods:{
        getDetail () {
          let id = this.$route.query.id;
          this.$axios.post(`v1/user/withdraw/${id}`).then(res => {
            console.log(res);
            this.DetailData = res.data;
            //把type类型数字变成汉字
            if (this.DetailData.type === 1){
              this.DetailData.type = '银行卡'
            } else if (this.DetailData.type === 2) {
              this.DetailData.type = '支付宝'
            } else{
              this.DetailData.type = '微信'
            }
            //把状态数字变成汉字
            if (this.DetailData.status === 1) {
              this.DetailData.status = '待结算'
            } else if (this.DetailData.status === 2) {
              this.DetailData.status = '已结算'
            } else if (this.DetailData.status === 3) {
              this.DetailData.status = '已驳回'
            } else if (this.DetailData.status === 4) {
              this.DetailData.status = '结算中'
            } else if (this.DetailData.status === 5) {
              this.DetailData.status = '结算失败'
            }
          })
        },
      },
      created () {
        this.getDetail()
      }
    }
</script>

<style scoped lang="less" src="../assets/css/Detail.less">

</style>
