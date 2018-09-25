<template>
    <div class="my">
      <!--头部板块-->
      <div class="header">
        <div class="header-title">
          <router-link to="/Message" class="title-news fright">
            <img src="../assets/img/My/message.png">
            <badge text="1" class="badge"></badge>
          </router-link>
          <div class="title-setting fright" @click="goNext('Setting')"><img src="../assets/img/My/setting.png"></div>
        </div>
        <div class="header-info" @click="goNext('PersonalData')">
          <div class="info-img fleft" ><img :src="userInfo.avatar"></div>
          <div class="info-detail fleft">
            <div class="clearfix">
              <div class="name fleft" >{{userInfo.real_name}}</div>
              <div class="star fleft"><img src="../assets/img/My/vip.png"></div>
            </div>
            <div class="phone" >手机号码&nbsp: <span>{{userInfo.user_name}}</span></div>
          </div>
          <div class="info-more fright" ><img src="../assets/img/MyWallet/icon2.png" ></div>
        </div>
      </div>

      <!--内容板块-->
      <div class="content">
        <!--第一项4栏-->
        <div class="content-wrap">
          <!--我的钱包-->
          <div class="wrap" @click="goNext('MyWallet')">
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
          <div class="wrap" @click="goNext('MyCardBag')">
            <div class="icon fleft two"><img src="../assets/img/My/KaBao.png"></div>
            <span>我的卡包</span>
            <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>

          <!--支付宝绑定-->
          <div class="wrap" @click="goNext('AlipayBind')">
            <div class="icon fleft two"><img src="../assets/img/My/alipay.png"></div>
            <span>支付宝绑定</span>
            <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>

        </div>

        <!--第二项4栏-->
        <div class="content-wrap">
          <!--专属客服-->
          <div class="wrap" @click="goNext('MySuperiors')">
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

          <!--平台收益图-->
          <div class="wrap">
            <div class="icon fleft two"><img src="../assets/img/My/team.png"></div>
            <span>平台收益图</span>
            <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>

          <!--新手指引-->
          <div class="wrap" @click="goNext('NoviceGuidance')">
            <div class="icon fleft two"><img src="../assets/img/My/XinShou.png"></div>
            <span>新手指引</span>
            <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>

        </div>

        <!--第三项3栏-->
        <div class="content-wrap">
          <!--微信客服-->
          <div class="wrap" @click="showWindow">
            <div class="icon fleft one"><img src="../assets/img/My/wechat.png"></div>
            <span>微信客服</span>
            <div class="nextpage fright"><img src="../assets/img/MyWallet/icon2.png" ></div>
          </div>

          <!--关于我们-->
          <div class="wrap" @click="goNext('AboutUs')">
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

      <!--微信客服弹窗-->
      <div class="WeChatWindow" v-if="isShowWindow">
        <div class="closebtn" @click="showWindow"><img src="../assets/img/My/btn_closehelp.png"></div>
        <div class="tip">扫码识别二维码联系我们</div>
        <div class="QRcode"><img :src="config.qrcode"></div>
        <div class="word">保存二维码至相册</div>
        <div class="worktime border">
          <div class="title">工作时间:</div>
          <div class="week">{{config.date}}</div>
          <div class="week">{{config.time}}</div>
        </div>
        <div class="worktime">
          <div class="title">联系方式:</div>
          <div class="week">电话：{{config.phone}}</div>
        </div>
        <div class="tips">若非工作时间，请耐心等待</div>
      </div>
      <!--弹窗遮罩-->
      <div class="mask" v-if="isShowWindow">
      </div>

      <!--TableBar空格-->
      <div class="Block"></div>

      <!--底部选项卡-->
      <TableBar v-if="!isShowWindow"></TableBar>
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
          userInfo: {},
          config:{},
          isShowWindow:false
        }
      },
      methods:{
        getData () {
          this.$axios.get('v1/user').then(res => {
            console.log(res);
            this.userInfo = res.data
          })
        },
        getConfig () {
          this.$axios.post('config').then(res => {
            this.config = res.data
          })
        },
        goNext (page) {
          this.$router.push(`/${page}`)
        },
        showWindow () {
          this.isShowWindow = !this.isShowWindow
        }
      },
      created () {
        this.getData()
        this.getConfig()
      }
    }
</script>

<style scoped lang="less" src="../assets/css/My.less">

</style>
