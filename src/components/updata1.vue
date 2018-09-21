<template>
  <div>
    <imgCut  @callback="callback" :width="200" :height="200">
      <div>上传按钮</div>
    </imgCut>
    <img :src="imgsrc">
  </div>
</template>

<script>
  import {imgCut} from 'vue-imgcut'
    export default {
      name: "updata1",
      data(){
        return{
          imgsrc:'',
        }
      },
      components:{
        imgCut
      },
      methods:{
        callback(img){
          this.imgsrc=img
          console.log(this.imgsrc)
        }
      }
    }
</script>

<style scoped>

</style>
