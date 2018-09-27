<template>
    <div class="box">
      <!--头部板块-->
      <div class="header" v-if="!this.$store.state.isWeChat">
        <!--<div class="header-back"><img src="../../assets/img/Agent/back.png" ></div>-->
        <div class="header-title">代理</div>
      </div>

      <!--等级板块-->
      <div class="grade">
        <div class="grade-card"></div>
        <div class="tip">升级等级获得更多更好权益</div>
        <div class="grade-btn" @click="goNext('Upgrade')">立即升级</div>
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
              <th :class="[grade === 1?'current':'']">普通合伙人</th>
              <th :class="[grade === 2?'current':'']">黄金合伙人</th>
              <th :class="[grade === 3?'current':'']">钻石合伙人</th>
            </tr>
            </thead>
            <tbody>
              <tr class="td">
                <td>中国银行</td>
                <td :class="[grade === 1?'current':'']">14.30</td>
                <td :class="[grade === 2?'current':'']">16.30</td>
                <td :class="[grade === 3?'current':'']">18.30</td>
              </tr>
              <tr class="td">
                <td>中国银行</td>
                <td :class="[grade === 1?'current':'']">14.30</td>
                <td :class="[grade === 2?'current':'']">16.30</td>
                <td :class="[grade === 3?'current':'']">18.30</td>
              </tr>
              <tr class="td">
                <td>中国银行</td>
                <td :class="[grade === 1?'current':'']">14.30</td>
                <td :class="[grade === 2?'current':'']">16.30</td>
                <td :class="[grade === 3?'current':'']">18.30</td>
              </tr>
              <tr class="td">
                <td>中国银行</td>
                <td :class="[grade === 1?'current':'']">14.30</td>
                <td :class="[grade === 2?'current':'']">16.30</td>
                <td :class="[grade === 3?'current':'']">18.30</td>
              </tr>
              <tr class="td">
                <td>中国银行</td>
                <td :class="[grade === 1?'current':'']">14.30</td>
                <td :class="[grade === 2?'current':'']">16.30</td>
                <td :class="[grade === 3?'current':'']">18.30</td>
              </tr>
            </tbody>
          </x-table>
        </div>
      </div>

      <!--TableBar空格-->
      <div class="Block"></div>

      <!--底部选项卡-->
      <TableBar></TableBar>
    </div>
</template>

<script>
  import { XTable} from 'vux'
  import TableBar from '../components/TableBar'
    export default {
      components:{
        TableBar,
        XTable
      },
      data () {
        return {
          grade:1
        }
      },
      methods:{
        goNext (page) {
          this.$router.push(`/${page}`)
        },
      }
    }
</script>

<style scoped lang="less" src="../assets/css/Agent.less">

</style>
