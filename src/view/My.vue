<template>
    <div class="my">
      <!--头部板块-->
      <div class="header">
        <div class="header-title">
          <router-link to="/Message" class="title-news fright">
            <img src="../assets/img/My/message.png">
            <badge text="1" class="badge"></badge>
          </router-link>
          <div class="title-setting fright"><img src="../assets/img/My/setting.png"></div>
        </div>
        <div class="header-info">
          <div class="info-img fleft"><img src="../assets/img/Index/red.png" ></div>
          <div class="info-detail fleft">
            <div class="clearfix">
              <div class="name fleft">{{userInfo.real_name}}</div>
              <div class="star fleft"><img src="../assets/img/My/vip.png"></div>
            </div>
            <div class="phone">手机号码&nbsp: <span>{{userInfo.user_name}}</span></div>
          </div>
          <div class="info-more fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
        </div>
      </div>

      <!--内容板块-->
      <div class="content">
        <!--第一项4栏-->
        <div class="content-wrap">
          <!--我的钱包-->
          <div class="wrap">
            <div class="icon fleft one"><img src="../assets/img/My/wallet.png"></div>
            <span>我的钱包</span>
            <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>

          <!--我的订单-->
          <div class="wrap">
            <div class="icon fleft two"><img src="../assets/img/My/DingDan.png"></div>
            <span>我的订单</span>
            <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>

          <!--我的卡包-->
          <div class="wrap">
            <div class="icon fleft two"><img src="../assets/img/My/KaBao.png"></div>
            <span>我的卡包</span>
            <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>

          <!--支付宝绑定-->
          <div class="wrap">
            <div class="icon fleft two"><img src="../assets/img/My/alipay.png"></div>
            <span>支付宝绑定</span>
            <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>

        </div>

        <!--第二项3栏-->
        <div class="content-wrap">
          <!--专属客服-->
          <div class="wrap">
            <div class="icon fleft one"><img src="../assets/img/My/KeFu.png"></div>
            <span>专属客服</span>
            <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>

          <!--我的团队-->
          <div class="wrap">
            <div class="icon fleft two"><img src="../assets/img/My/team.png"></div>
            <span>我的团队</span>
            <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>

          <!--新手指引-->
          <div class="wrap">
            <div class="icon fleft two"><img src="../assets/img/My/XinShou.png"></div>
            <span>新手指引</span>
            <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>

        </div>

        <!--第三项3栏-->
        <div class="content-wrap">
          <!--微信客服-->
          <div class="wrap">
            <div class="icon fleft one"><img src="../assets/img/My/wechat.png"></div>
            <span>微信客服</span>
            <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>

          <!--关于我们-->
          <div class="wrap">
            <div class="icon fleft two"><img src="../assets/img/My/aboutus.png"></div>
            <span>关于我们</span>
            <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>

          <!--商务合作-->
          <div class="wrap">
            <div class="icon fleft two"><img src="../assets/img/My/ShangWu.png"></div>
            <span>商务合作</span>
            <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>

        </div>
      </div>

      <!--TableBar空格-->
      <div class="Block"></div>

      <!--底部选项卡-->
      <TableBar></TableBar>
    </div>
</template>

<script>
  import { Badge } from 'vux'
  import TableBar from '../components/TableBar'
    export default {
      components:{
        TableBar,
        Badge
      },
      data () {
        return {
          userInfo: {}
        }
      },
      methods:{
        getData () {
          this.$axios.get('user').then(res => {
            console.log(res);
            this.userInfo = res.data
          })
        }
      },
      created () {
        this.getData ()
      }
    }
</script>

<style scoped lang="less" src="../assets/css/My.less">

</style>
