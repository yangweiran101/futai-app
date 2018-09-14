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

import Login from '../pages/Login' //登录页面
import Register from '../pages/Register' //注册页面




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

  {path: '/Login', component: Login,meta: {title:'登录',keepAlive: false}},
  {path: '/Register', component: Register,meta: {title:'快速注册',keepAlive: false}},
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

