<template>
    <div class="h5">
      <!--<Header v-if="!this.$store.state.isWeChat">展业H5</Header>-->

      <!--展业板块-->
      <div class="show">
        <div class="swiper-container" id="swiper1">
          <div class="swiper-wrapper" >
            <div class="swiper-slide">
              <img src="../assets/img/ShowH5/AllBackground-1@2x.png" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../assets/img/ShowH5/AllBackground-2@2x.png" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../assets/img/ShowH5/AllBackground-3@2x.png" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../assets/img/ShowH5/AllBackground-4@2x.png" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../assets/img/ShowH5/AllBackground-5@2x.png" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../assets/img/ShowH5/AllBackground-6@2x.png" alt="">
            </div>
          </div>
        </div>
        <div class="downPage" @click="downPage">
        </div>
        <!--<div class="share" @click="share">-->
        <!--</div>-->
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
    export default {
      name: "ShowH5",
      components:{
        Header,
        Swiper
      },
      data(){
        return{
          index:0,
          swiper:null
        }
      },
      mounted(){
        this.swiper = this.mySwiper();
      },
      methods:{
        mySwiper(){
          return new Swiper('.swiper-container', {
            direction : 'vertical',
            width: window.innerWidth,
            height: window.innerHeight,
            setWrapperSize :true,
          })
        },
        downPage(){
          if(this.index < 5){
            this.swiper.slideNext();
            this.index++
          }else{
            console.log(111)
            history.back()
          }
        },
        share () {

        }
      }
    }
</script>

<style scoped lang="less" src="../assets/css/ShowH5.less">

</style>
