<template>
    <div class="benefit">
      <!--标题栏，显示第一名的信息-->
      <div class="header">
        <img src="../assets/img/BenefitList/bg@1x.png" >
        <div class="back" @click="goBack()"><img src="../assets/img/BenefitList/icon@1x.png" ></div>
        <div class="img"><img src="../assets/img/BenefitList/Head1@1x.png"></div>
        <div class="username">兵来将挡</div>
        <div class="tip">摘得桂冠，占领封面</div>
      </div>

      <!--个人收益栏-->
      <div class="user">
        <div class="user-pic fleft"><img src="../assets/img/BenefitList/Head1@1x.png" ></div>
        <div class="user-info fleft">
          <div class="name">兵来将挡</div>
          <div class="detail">没有上榜，继续努力</div>
        </div>
        <div class="user-star fright">
          <div class="count">688</div>
          <div class="icon"><img src="../assets/img/BenefitList/icon1@1x.png"></div>
        </div>
        <div class="user-money fright">￥<span>255.6</span></div>
      </div>

      <!--收益排行榜-->
      <div class="rank">
        <div class="wrap" v-for="(item,index) in rankList" :key="index">
          <div class="number fleft">{{item.index}}</div>
          <div class="user-pic fleft"><img :src="item.avatar" ></div>
          <div class="user-info fleft">
            <div class="name">兵来将挡</div>
          </div>
          <div class="user-star fright">
            <div class="count">688</div>
            <div class="icon"><img src="../assets/img/BenefitList/icon1@1x.png"></div>
          </div>
          <div class="user-money fright">￥<span>{{item.credit2}}</span></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          rankList:[]
        }
      },
        methods:{
          goBack () {
            this.$router.go(-1)
          },
          getRank () {
            this.$axios.get('rank').then(res => {
              console.log(res);
              this.rankList = res.data
            })
          }
        },
      created () {
          this.getRank ()
      }
    }
</script>

<style scoped lang="less" src="../assets/css/BenefitList.less">

</style>
