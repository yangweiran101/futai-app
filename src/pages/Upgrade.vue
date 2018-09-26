<template>
    <div class="up">
      <Header v-if="!this.$store.state.isWeChat">升级</Header>

      <!--升级选框-->
      <div class="up-swipe">
        <swiper  @on-index-change="" v-model="swiperIndex" dots-position="center" height="150px"
                 :loop="isLoop" :show-dots="show_dots" @on-index-change="changeIndex">
          <swiper-item v-for="(data,index) in dataList" :key="index">
            <div class="swiper-box">
              <div class="img">
                <img src="../assets/img/Agent/normal.png" v-if="data.type == 'normal'">
                <img src="../assets/img/Agent/normal2.png" class="current" v-if="data.type == 'normal'&&swiperIndex == index">
                <img src="../assets/img/Agent/gold.png" v-if="data.type == 'gold' ">
                <img src="../assets/img/Agent/gold2.png" class="current" v-if="data.type == 'gold'&&swiperIndex == index">
                <img src="../assets/img/Agent/diamond.png" v-if="data.type == 'diamond' ">
                <img src="../assets/img/Agent/diamond2.png" class="current" v-if="data.type == 'diamond'&&swiperIndex == index">
              </div>
            </div>
          </swiper-item>
        </swiper>
        <div class="btn">{{title}}</div>
      </div>

      <!--等级权益板块-->
      <div class="rank">
        <div class="rank-title">
          <div class="img fleft"><img src="../assets/img/Agent/border.png" alt=""></div>
          <span>等级权益</span>
        </div>
        <div class="rank-content">
          <div class="wrap">
            <div class="question">
              <div class="img fleft"><img src="../assets/img/Agent/wenhao.png"></div>
              <span>如何成为用户?</span>
            </div>
            <div class="answer">注册即成为用户</div>
          </div>
          <div class="wrap">
            <div class="question">
              <div class="img fleft"><img src="../assets/img/Agent/wenhao.png"></div>
              <span>会员有什么权益?</span>
            </div>
            <div class="answer">积分收益：自己可按照用户价兑换积分</div>
          </div>
        </div>
      </div>

      <!--列表板块-->
      <div class="list">
        <!--价格总表-->
        <div class="list-title">
          <div class="img fleft"><img src="../assets/img/Agent/border.png" alt=""></div>
          <span>价格总表</span>
        </div>
        <div class="list-table">
          <x-table :cell-bordered="false" :content-bordered="false" class="table">
            <thead>
            <tr class="thead">
              <th colspan="4">价格总表(单位：元/万分)</th>
            </tr>
            <tr class="td">
              <th>兑换渠道</th>
              <th>普通合伙人</th>
              <th>黄金合伙人</th>
              <th>钻石合伙人</th>
            </tr>
            </thead>
            <tbody>
            <tr class="td">
              <td>中国银行</td>
              <td>14.30</td>
              <td>16.30</td>
              <td>18.30</td>
            </tr>
            <tr class="td">
              <td>中国银行</td>
              <td>14.30</td>
              <td>16.30</td>
              <td>18.30</td>
            </tr>
            <tr class="td">
              <td>中国银行</td>
              <td>14.30</td>
              <td>16.30</td>
              <td>18.30</td>
            </tr>
            <tr class="td">
              <td>中国银行</td>
              <td>14.30</td>
              <td>16.30</td>
              <td>18.30</td>
            </tr>
            <tr class="td">
              <td>中国银行</td>
              <td>14.30</td>
              <td>16.30</td>
              <td>18.30</td>
            </tr>
            </tbody>
          </x-table>
        </div>
      </div>
    </div>
</template>

<script>
  import { Swiper, SwiperItem,XTable} from 'vux'
  import Header from '../components/Header'
    export default {
      name: "Upgrade",
      components:{
        Header,
        Swiper,
        SwiperItem,
        XTable
      },
      data () {
        return {
          dataList: [
            {type:'normal'},
            {type:'gold'},
            {type:'diamond'},
          ],
          isLoop:true,
          show_dots:false,
          swiperIndex:0,
          title:'当前等级'
        }
      },
      methods:{
        changeIndex (currentIndex) {
          if (currentIndex == 1) {
            this.title = '支付升级  ￥99'
          } else if (currentIndex == 2 ) {
            this.title = '支付升级  ￥199'
          } else {
            this.title = '当前等级'
          }
        }
      }
    }
</script>

<style scoped lang="less" src="../assets/css/Upgrade.less">

</style>
