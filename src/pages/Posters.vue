<template>
    <div class="posters">
      <Header v-if="!this.$store.state.isWeChat" class="header">推广海报图</Header>
      <!--海报轮播图-->
      <swiper  @on-index-change=""
               v-model="swiperIndex"
               dots-position="center"
               height="360px"
               :loop="isLoop"
               :show-dots="show_dots">
        <swiper-item v-for="(data,index) in dataList" :key="index">
          <div class="swiper-box" :class="[index == swiperIndex ? 'index-box' : '']">
            <div class="img">
              <img src="http://e.hiphotos.baidu.com/image/h%3D300/sign=4a634faa022442a7b10efba5e143ad95/4d086e061d950a7bd63a3bed07d162d9f2d3c988.jpg">
            </div>
          </div>
        </swiper-item>
      </swiper>
      <!--按钮-->
      <div class="btns">
        <div class="btn fleft"><i class="iconfont icon-xiazai"></i>保存</div>
        <div class="btn fright"><i class="iconfont icon-fenxiang"></i>分享专属海报</div>
      </div>
    </div>
</template>

<script>
  import { Swiper, SwiperItem} from 'vux'
  import Header from '../components/Header'
    export default {
      name: "Posters",
      components:{
        Header,
        Swiper,
        SwiperItem,
      },
      data () {
        return {
          dataList: [{a:1},{a:1},{a:1},{a:1}],
          isLoop:true,
          show_dots:false,
          swiperIndex:0
        }
      },
      mounted(){
        this.getQrcodeList();
      },
      methods:{
        getQrcodeList(){
          let that = this;
          // this.$axios.post('/tissue/shareFollowList').then(res => {
          //   if(response.data.status ==='success'){
          //     that.dataList = response.data.data;
          //     console.log(that.dataList)
          //   }
          // })
        },
      }
    }
</script>

<style scoped lang="less" src="../assets/css/Posters.less">

</style>
