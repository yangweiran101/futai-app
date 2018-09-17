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
            <div class="title">{{item.title}}</div>
            <div class="time">{{item.time}}</div>
          </div>
          <div class="right fright">{{item.count}}</div>
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
          DetailData:[
            {title:'购买XXXXXX商品',time:'2018-10-21 15:32:35',count:-100},
            {title:'支付宝****3648提现',time:'2018-10-21 15:32:35',count:-200},
            {title:'购买yyyyy商品',time:'2018-10-21 15:32:35',count:+500},
            {title:'购买aaaa商品',time:'2018-10-21 15:32:35',count:-100},
            {title:'购买666商品',time:'2018-10-21 15:32:35',count:+100},
            {title:'购买XXXXXX商品',time:'2018-10-21 15:32:35',count:-100},
          ],
          total:[
            {title:'购买XXXXXX商品',time:'2018-10-21 15:32:35',count:-100},
            {title:'支付宝****3648提现',time:'2018-10-21 15:32:35',count:-200},
            {title:'购买yyyyy商品',time:'2018-10-21 15:32:35',count:+500},
            {title:'购买aaaa商品',time:'2018-10-21 15:32:35',count:-100},
            {title:'购买666商品',time:'2018-10-21 15:32:35',count:+100},
            {title:'购买XXXXXX商品',time:'2018-10-21 15:32:35',count:-100},
          ],
        }
      },
      methods: {
        getDetail (id) {
          this.option = id
          //选择全部时
          if (id === 1) {
            this.DetailData = []
            this.DetailData = this.total
            // console.log(this.DetailData);
            }
          //选择收入时
          if (id === 2) {
            this.DetailData = []
            this.total.forEach(val => {
              if (val.count > 0) {
                this.DetailData.push(val)
              }
            })
            // console.log(this.DetailData);
          }
          //选择支出时
          if (id === 3) {
            this.DetailData = []
            this.total.forEach(val => {
              if (val.count < 0) {
                this.DetailData.push(val)
              }
            })
            // console.log(this.DetailData);
          }
        }
      },
      created () {
        this.getDetail(1)
      }
    }
</script>

<style scoped lang="less" src="../assets/css/PurseDetail.less">

</style>
