<template>
    <div class="guidance">
      <Header v-if="!this.$store.state.isWeChat">新手指引</Header>
      <div class="content">
        <div class="wrap" v-for="(item,index) in video" :key="index">
          <video controls="controls"
                 height="185px"
                 width="329px"
                 preload="metadata" poster="../assets/img/My/alipay.png">
            <source :src="item.url">
          </video>
          <div class="title">三步教你快速兑换</div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
    export default {
      name: "NoviceGuidance",
      components:{
        Header,
      },
      data () {
        return {
          video:[
            {url: 'http://bpic.588ku.com/video_listen/588ku_video/18/08/27/14/58/05/video5b83a0fdeb8de.mp4'},
            {url: 'http://bpic.588ku.com/video_listen/588ku_video/18/08/27/14/58/05/video5b83a0fdeb8de.mp4'},
            {url: 'http://bpic.588ku.com/video_listen/588ku_video/18/08/27/14/58/05/video5b83a0fdeb8de.mp4'},
            {url: 'http://bpic.588ku.com/video_listen/588ku_video/18/08/27/14/58/05/video5b83a0fdeb8de.mp4'},
              ]
        }
      },
      methods: {

      }
    }
</script>

<style scoped lang="less" src="../assets/css/NoviceGuidance.less">

</style>
