import Vue from 'vue'
import Router from 'vue-router'
//四个主页面
import Index from '../view/Index'
import Agent from '../view/Agent'
import Promote from '../view/Promote'
import My from '../view/My'

//其他分页面
import MyWallet from '../pages/MyWallet' //首页我的钱包页面
import BenefitList from '../pages/BenefitList' //首页收益榜页面
import WalletDetail from '../pages/WalletDetail' //我的钱包页面
import Message from '../pages/Message' //首页消息中心页面
import MessageDetail from '../pages/MessageDetail' //消息中心详情页面
import SetPassword from '../pages/SetPassword' //我的钱包交易密码设置页面

import CashToAli from '../pages/CashToAli' //提现到支付宝页面
import CashToBank from '../pages/CashToBank' //提现到银行卡页面
import PurseDetail from '../pages/PurseDetail' //钱包明细页面
import CashAboutDetail from '../pages/CashAboutDetail' //提现明细页面
import Detail from '../pages/Detail' //明细详情页面
import ReviewToCash from '../pages/ReviewToCash' //提现审核中页面

import Login from '../pages/Login' //登录页面
import Register from '../pages/Register' //注册页面

import Pay from '../components/Pay'



Vue.use(Router)

let routes = [
  //四个主页面
  {path: '/', component: Index,meta: {title:'首页',keepAlive: false}},
  {path: '/Agent', component: Agent,meta: {title:'代理',keepAlive: false}},
  {path: '/Promote', component: Promote,meta: {title:'推广',keepAlive: false}},
  {path: '/My', component: My,meta: {title:'个人中心',keepAlive: false}},
  // 其他分页面
  {path: '/MyWallet', component: MyWallet,meta: {title:'我的钱包',keepAlive: false}},
  {path: '/BenefitList', component: BenefitList,meta: {title:'收益榜',keepAlive: false}},
  {path: '/WalletDetail', component: WalletDetail,meta: {title:'我的钱包',keepAlive: false}},
  {path: '/Message', component: Message,meta: {title:'消息中心',keepAlive: false}},
  {path: '/MessageDetail', component: MessageDetail,meta: {title:'消息中心',keepAlive: false}},
  {path: '/SetPassword', component: SetPassword,meta: {title:'交易密码设置',keepAlive: false}},

  {path: '/CashToBank', component: CashToBank,meta: {title:'提现',keepAlive: false}},
  {path: '/CashToAli', component: CashToAli,meta: {title:'提现',keepAlive: false}},
  {path: '/PurseDetail', component: PurseDetail,meta: {title:'钱包明细',keepAlive: false}},
  {path: '/CashAboutDetail', component: CashAboutDetail,meta: {title:'提现明细',keepAlive: false}},
  {path: '/Detail', component: Detail,meta: {title:'明细详情',keepAlive: false}},
  {path: '/ReviewToCash', component: ReviewToCash,meta: {title:'提现',keepAlive: false}},

  {path: '/Login', component: Login,meta: {title:'登录',keepAlive: false}},
  {path: '/Register', component: Register,meta: {title:'快速注册',keepAlive: false}},

  {path: '/Pay', component: Pay,meta: {title:'zhifu',keepAlive: false}},
]

const router = new Router({
  mode: 'history',
  routes
});
router.beforeEach((to,from,next) => {
  // console.log(to);
//  路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next ()
});

export default router

