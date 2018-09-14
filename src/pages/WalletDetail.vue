<template>
    <div class="detail">
      <Header v-if="!this.$store.state.isWeChat">我的钱包</Header>
      <!--内容板块-->
      <div class="content">
        <!--环形图模块-->
        <v-chart
          :data="data"
          :padding="[39, 'auto']">
          <v-tooltip disabled />
          <v-pie :radius="0.85" :inner-radius="0.7" series-field="name" :colors="['#FECB50','#FF9173','#3CA1F0','#2CD5B8']" />
          <v-legend disabled />
          <div class="total">
            <div class="name">总金额</div>
            <div class="count">{{total}}</div>
          </div>
        </v-chart>

        <!--详情板块-->
        <div class="plate">
          <div class="money">
            <div class="wrap">
              <div class="img fleft"><img src="../assets/img/WalletDetail/yellow.png"></div>
              <div class="tip fleft">积分兑换返佣 0.00</div>
            </div>
            <div class="wrap">
              <div class="img fleft"><img src="../assets/img/WalletDetail/red.png"></div>
              <div class="tip fleft">升级代理返佣 0.00</div>
            </div>
          </div>
          <div class="money">
            <div class="wrap">
              <div class="img fleft"><img src="../assets/img/WalletDetail/blue.png"></div>
              <div class="tip fleft">超级赚商城返佣 0.00</div>
            </div>
            <div class="wrap">
              <div class="img fleft"><img src="../assets/img/WalletDetail/green.png"></div>
              <div class="tip fleft">其它 0.00</div>
            </div>
          </div>
        </div>
      </div>


    </div>
</template>

<script>
  import Header from '../components/Header'
  import { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VGuide, VScale } from 'vux'

    export default {
      components: {
        VChart,
        VLine,
        VArea,
        VTooltip,
        VLegend,
        VBar,
        VPie,
        VGuide,
        VScale,
        Header
      },
      data () {
        return {
          data: [
            { name: '积分兑换返佣', percent: 15},
            { name: '升级代理返佣', percent: 35},
            { name: '超级赚商城返佣', percent: 20},
            { name: '其他', percent: 30}
          ],
          total:60,
        }
      },
        methods:{

        },
    }
</script>

<style scoped lang="less" src="../assets/css/WalletDetail.less">

</style>
