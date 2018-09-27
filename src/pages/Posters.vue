<template>
    <div class="posters">
      <Header v-if="!this.$store.state.isWeChat">推广海报图</Header>
      <div class="content">
        <!--海报轮播图-->
        <swiper  @on-index-change="" v-model="swiperIndex" dots-position="center" height="360px"
                 :loop="isLoop" :show-dots="show_dots">
          <swiper-item v-for="(data,index) in dataList" :key="index">
            <div class="swiper-box" :class="[index == swiperIndex ? 'index-box' : '']">
              <div class="img">
                <img :src="data.url">
              </div>
            </div>
          </swiper-item>
        </swiper>

        <!--按钮-->
        <div class="btns">
          <div class="btn fleft" @click="downloadImg"><i class="iconfont icon-xiazai"></i>保存</div>
          <div class="btn fright"><i class="iconfont icon-fenxiang"></i>分享专属海报</div>
        </div>
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
          dataList: [
            {url:require('../assets/img/Promote/poster.png'),id:1},
            {url:require('../assets/img/Promote/poster1.png'),id:2},
            {url:require('../assets/img/Promote/poster2.png'),id:3},
            {url:require('../assets/img/Promote/poster3.png'),id:4},
            ],
          isLoop:true,
          show_dots:false,
          swiperIndex:0
        }
      },
      mounted(){
        this.getQrcodeList();
      },
      methods:{
        getQrcodeList (){
          let that = this;
          // this.$axios.post('/tissue/shareFollowList').then(res => {
          //   if(response.data.status ==='success'){
          //     that.dataList = response.data.data;
          //     console.log(that.dataList)
          //   }
          // })
        },
        downloadImg () {      //必须同源才能下载
          let alink = document.createElement("a");
          alink.href = this.dataList[this.swiperIndex].url;
          alink.download = "福泰海报"; //图片名
          alink.click();
        }
      }
    }
</script>

<style scoped lang="less" src="../assets/css/Posters.less">

</style>
