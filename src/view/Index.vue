<template>
    <div id="box">
      <!--头部板块-->
      <div class="header">
        <!--收益榜，信息栏-->
        <div class="header-title">
          <router-link to="/BenefitList" class="title-img fleft">
            <img src="../assets/img/Index/ShouYiBang.png">
          </router-link>
          <router-link to="/Message" class="title-news fright">
            <img src="../assets/img/Index/btn_news.png">
            <badge text="1" class="badge"></badge>
          </router-link>
        </div>
        <!--总金额，立即提现-->
        <div class="header-money">
          <div class="money-total">
            <div class="total fleft">总金额</div>
            <div class="eye fleft" @click="handleShow()">
              <img src="../assets/img/Index/btn_eyesee.png" v-if="this.$store.state.isShowMoney">
              <img src="../assets/img/Index/btn_nosee.png" v-if="!this.$store.state.isShowMoney">
            </div>
          </div>
          <div class="money-number">
            <span v-if="this.$store.state.isShowMoney">16.85</span>
            <span v-if="!this.$store.state.isShowMoney">*******</span>
          </div>
          <router-link to="/MyWallet" class="money-tixian"><img src="../assets/img/Index/LiJiTiXian.png"></router-link>
        </div>
        <!--累计收益，今日收益，昨日收益栏-->
        <div class="header-earnings">
          <!--累计收益显示-->
          <div class="earings-box">
            <div class="earings-title">累计收益</div>
            <div class="earings-number ">116.56</div>
          </div>
          <!--今日收益显示-->
          <div class="earings-box">
            <div class="earings-title">今日收益</div>
            <div class="earings-number ">2.53</div>
          </div>
          <!--昨日收益显示-->
          <div class="earings-box">
            <div class="earings-title">昨日收益</div>
            <div class="earings-number">0.00</div>
          </div>
        </div>
      </div>

      <!--新闻滚动条-->
      <div class="swipe">
        <div class="swipe-icon fleft"><img src="../assets/img/Index/TouTiao.png"></div>
        <!--信息滚动部分-->
        <marquee class="swipe-message fleft">
          <marquee-item v-for="(item,val) in benifitHead" :key="val"  class="align-middle">
            <span>{{item.user_name}}</span>
            实时收益
            <span class="money">￥{{item.today_profit}}</span>,
            总收益
            <span class="money">￥{{item.total_profit}}</span>
          </marquee-item>
        </marquee>
      </div>

      <!--菜单选项栏-->
      <div class="tab">
        <!--选项卡-->
        <div class="tab-btns">
          <div class="btn">
            <div class="icon"><img src="../assets/img/Index/735.png"></div>
            <div class="title">信用卡</div>
          </div>
          <div class="btn">
            <div class="icon"><img src="../assets/img/Index/737.png"></div>
            <div class="title">超级赚商城</div>
          </div>
          <div class="btn">
            <div class="icon"><img src="../assets/img/Index/738.png"></div>
            <div class="title">POS机</div>
          </div>
          <div class="btn">
            <div class="icon"><img src="../assets/img/Index/739.png"></div>
            <div class="title">我要贷款</div>
          </div>
        </div>
        <div class="tab-btns">
          <div class="btn">
            <div class="icon"><img src="../assets/img/Index/740.png"></div>
            <div class="title">车险寿险</div>
          </div>
          <div class="btn">
            <div class="icon"><img src="../assets/img/Index/741.png"></div>
            <div class="title">城市服务</div>
          </div>
          <div class="btn">
            <div class="icon"><img src="../assets/img/Index/743.png"></div>
            <div class="title">无卡支付</div>
          </div>
          <div class="btn">
            <div class="icon"><img src="../assets/img/Index/744.png"></div>
            <div class="title">违章缴纳</div>
          </div>
        </div>
      </div>

      <!--新手指南板块-->
      <div class="guide">
        <!--新手指南头部栏-->
        <div class="guide-header">
          <div class="header-left fleft">新手指南</div>
          <div class="header-right fright" @click="display()">不再显示</div>
        </div>
        <!--新手指南内容-->
        <div class="guide-content">
          <!--左边图片盒子-->
          <div class="content-left fleft"><img src="../assets/img/Index/xinshouzhinan.png"></div>
          <!--右边选项栏-->
          <div class="content-right fright">
            <div class="right-title">
              新手指南
            </div>
            <div class="right-tips">
              完成实名认证，推荐好友有 <span id="redword">奖励</span>
            </div>
            <div class="right-img"><img src="../assets/img/Index/shimingrenzheng.png"></div>
          </div>
        </div>
      </div>

      <!--金融红包板块-->
      <div class="board">
        <div class="board-btn left">
          <div class="board-title">福泰金融</div>
          <div class="board-img"><img src="../assets/img/Index/futaijinrong.png" alt=""></div>
          <div class="board-tip">不仅仅是积分兑换</div>
        </div>
        <div class="board-btn middle">
          <div class="board-title">摇红包</div>
          <div class="board-img"><img src="../assets/img/Index/yaohongbao.png" alt=""></div>
          <div class="board-tip">海量现金红红包</div>
        </div>
        <div class="board-btn right">
          <div class="board-title">免费纸巾</div>
          <div class="board-img"><img src="../assets/img/Index/freepaper.png" alt=""></div>
          <div class="board-tip">海量纸巾免费送</div>
        </div>
      </div>

      <!--广告栏板块-->
      <div class="ads">
        <!--广告头部栏-->
        <div class="ads-header">
          <div class="header-left fleft">广告</div>
          <div class="header-right fright">{{swipeindex + 1}}/{{swipelist.length}}</div>
        </div>
        <!--广告栏内容-->
        <div class="ads-content">
          <swiper class="swiper content-img"
                  v-model="swipeindex"
                  height="111px"
                  :loop="true"
                  auto
                  :list="swipelist"
                  :show-dots="false"
                  :show-desc-mask="false">

          </swiper>
        </div>
      </div>

      <!--TableBar空格-->
      <div class="Block"></div>

      <!--底部选项卡-->
      <TableBar></TableBar>
    </div>
</template>

<script>
  import { Badge ,Swiper,Marquee,MarqueeItem} from 'vux'
  import TableBar from '../components/TableBar'
export default {
  components: {
    TableBar,
    Badge,
    Swiper,
    Marquee,
    MarqueeItem
  },
  data () {
    return {
      swipeindex: 0,
      swipelist:[
        {
        img: require('../assets/img/Index/index-ads.png'),
        },{
        img: require('../assets/img/Index/index-ads.png'),
        },{
        img: require('../assets/img/Index/index-ads.png'),
        },{
        img: '//inews.gtimg.com/newsapp_bt/0/5241931549/641',
        },
      ],
      benifitHead:[],
    }
  },
  methods:{
    handleShow () {
      let isShow = !this.$store.state.isShowMoney
      this.$store.commit("isShowMoney", isShow);
    },
    display () {
      let guide = document.querySelector('.guide');
      guide.style.display = 'none'
    },
    getHeadline () {
      this.$axios.get('headline').then(res => {
        // console.log(res);
        this.benifitHead = res.data
      })
    }

  },
  created () {
    this.getHeadline();
  }
}
</script>

<style scoped lang="less" src="../assets/css/index.less">

</style>
