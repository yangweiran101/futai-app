<template>
  <div class="tree">
    <!--第一行-->
    <div class="one">
      <div class="img"><img src="../assets/img/Tree/Head1@1x.png"></div>
      <div class="user">
        <img src="../assets/img/Tree/user.png">
        <span>李小四</span>
      </div>
      <div class="money">
        <img src="../assets/img/Tree/money.png">
        <span>贡献￥3.52</span>
      </div>
      <div class="number">17600996101</div>
    </div>
    <!--线-->
    <div class="one-line">
      <div class="line"></div>
      <div class="line2">
        <div class="line-wrap"></div>
        <div class="line-wrap"></div>
      </div>
    </div>


    <!--第二行-->
    <div class="two">

      <div class="wrap" :class="[first?'active' :'no']" >
        <!--主体-->
        <div @click="getNext(1)">
          <div class="img"><img src="../assets/img/Tree/Head1@1x.png"></div>
          <div class="user">
            <img src="../assets/img/Tree/user.png">
            <span>李小四</span>
          </div>
          <div class="money">
            <img src="../assets/img/Tree/money.png">
            <span>贡献￥3.52</span>
          </div>
          <div class="number">17600996101</div>
        </div>
        <!--分支-->
        <div class="three-box" v-if="first">
          <!--线-->
          <div class="two-line">
            <div class="line"></div>
            <div class="line2">
              <div class="line-wrap"></div>
              <div class="line-wrap"></div>
            </div>
          </div>
          <!--第三行-->
          <div class="three">
            <div class="wrap" >
              <div class="img"><img src="../assets/img/Tree/Head1@1x.png"></div>
              <div class="user">
                <img src="../assets/img/Tree/user.png">
                <span>李小四</span>
              </div>
              <div class="money">
                <img src="../assets/img/Tree/money.png">
                <span>贡献￥3.52</span>
              </div>
              <div class="number">17600996101</div>
            </div>
            <div class="wrap" >
              <div class="img"><img src="../assets/img/Tree/Head1@1x.png"></div>
              <div class="user">
                <img src="../assets/img/Tree/user.png">
                <span>李小四</span>
              </div>
              <div class="money">
                <img src="../assets/img/Tree/money.png">
                <span>贡献￥3.52</span>
              </div>
              <div class="number">17600996101</div>
            </div>
            <div class="wrap" >
              <div class="img"><img src="../assets/img/Tree/Head1@1x.png"></div>
              <div class="user">
                <img src="../assets/img/Tree/user.png">
                <span>李小四</span>
              </div>
              <div class="money">
                <img src="../assets/img/Tree/money.png">
                <span>贡献￥3.52</span>
              </div>
              <div class="number">17600996101</div>
            </div>
          </div>
        </div>
      </div>

      <div class="wrap" :class="[second?'active' :'no']" >
        <!--主体-->
        <div @click="getNext(2)">
          <div class="img"><img src="../assets/img/Tree/Head1@1x.png"></div>
          <div class="user">
            <img src="../assets/img/Tree/user.png">
            <span>李小四</span>
          </div>
          <div class="money">
            <img src="../assets/img/Tree/money.png">
            <span>贡献￥3.52</span>
          </div>
          <div class="number">17600996101</div>
        </div>
        <!--分支-->
        <div class="three-box" v-if="second">
          <!--线-->
          <div class="two-line">
            <div class="line"></div>
            <div class="line2">
              <div class="line-wrap"></div>
              <div class="line-wrap"></div>
            </div>
          </div>
          <!--第三行-->
          <div class="three">
            <div class="wrap" >
              <div class="img"><img src="../assets/img/Tree/Head1@1x.png"></div>
              <div class="user">
                <img src="../assets/img/Tree/user.png">
                <span>李小四</span>
              </div>
              <div class="money">
                <img src="../assets/img/Tree/money.png">
                <span>贡献￥3.52</span>
              </div>
              <div class="number">17600996101</div>
            </div>
            <div class="wrap" >
              <div class="img"><img src="../assets/img/Tree/Head1@1x.png"></div>
              <div class="user">
                <img src="../assets/img/Tree/user.png">
                <span>李小四</span>
              </div>
              <div class="money">
                <img src="../assets/img/Tree/money.png">
                <span>贡献￥3.52</span>
              </div>
              <div class="number">17600996101</div>
            </div>
            <div class="wrap" >
              <div class="img"><img src="../assets/img/Tree/Head1@1x.png"></div>
              <div class="user">
                <img src="../assets/img/Tree/user.png">
                <span>李小四</span>
              </div>
              <div class="money">
                <img src="../assets/img/Tree/money.png">
                <span>贡献￥3.52</span>
              </div>
              <div class="number">17600996101</div>
            </div>
          </div>
        </div>
      </div>

      <div class="wrap" :class="[third?'active' :'no']" >
        <!--主体-->
        <div @click="getNext(3)">
          <div class="img"><img src="../assets/img/Tree/Head1@1x.png"></div>
          <div class="user">
            <img src="../assets/img/Tree/user.png">
            <span>李小四</span>
          </div>
          <div class="money">
            <img src="../assets/img/Tree/money.png">
            <span>贡献￥3.52</span>
          </div>
          <div class="number">17600996101</div>
        </div>
        <!--分支-->
        <div class="three-box" v-if="third">
          <!--线-->
          <div class="two-line">
            <div class="line"></div>
            <div class="line2">
              <div class="line-wrap"></div>
              <div class="line-wrap"></div>
            </div>
          </div>
          <!--第三行-->
          <div class="three">
            <div class="wrap" >
              <div class="img"><img src="../assets/img/Tree/Head1@1x.png"></div>
              <div class="user">
                <img src="../assets/img/Tree/user.png">
                <span>李小四</span>
              </div>
              <div class="money">
                <img src="../assets/img/Tree/money.png">
                <span>贡献￥3.52</span>
              </div>
              <div class="number">17600996101</div>
            </div>
            <div class="wrap" >
              <div class="img"><img src="../assets/img/Tree/Head1@1x.png"></div>
              <div class="user">
                <img src="../assets/img/Tree/user.png">
                <span>李小四</span>
              </div>
              <div class="money">
                <img src="../assets/img/Tree/money.png">
                <span>贡献￥3.52</span>
              </div>
              <div class="number">17600996101</div>
            </div>
            <div class="wrap" >
              <div class="img"><img src="../assets/img/Tree/Head1@1x.png"></div>
              <div class="user">
                <img src="../assets/img/Tree/user.png">
                <span>李小四</span>
              </div>
              <div class="money">
                <img src="../assets/img/Tree/money.png">
                <span>贡献￥3.52</span>
              </div>
              <div class="number">17600996101</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
      name: "Tree",
      data () {
        return {
          id: 0,
          move: '',
          first:false,
          second:false,
          third:false
        }
      },
      methods:{
        getNext (id) {
          // alert('点击一次')
          let tree = document.querySelector('.tree');
          let line = document.querySelector('.one-line');
          let two = document.querySelector('.two');

          tree.style.width = '1353px';
          line.style.width = '836px';
          two.style.width = '946px';
          // if (this.id === id) { // 判断是否展开，没展开的情况下id为0
          //       if (this.id === 1) { // 第三排已经有展开的部分，判断是哪一部分展开了
          //         this.first = false
          //       } else if (this.id === 2) {
          //         this.second = false
          //       } else {
          //         this.third = false
          //       }
          //   this.id = 0;
          //
          // }
          if (id === 1) { //判断点击的是第二行哪一项
            // this.id = id;
            this.first = !this.first
          } else if (id === 2) {
            // this.id = id;
            this.second = !this.second
          } else if (id === 3) {
            // this.id = id;
            this.third = !this.third
          }

          if (!this.first&&!this.second&&!this.third) {
            tree.style.width = '726px';
            line.style.width = '308px';
            two.style.width = '412px';
          }
        },
        handleMove (ev) {
          ev = ev || event;
          alert(1);

          var wh = document.documentElement.clientHeight; //可见窗口高
          var ww = document.documentElement.clientWidth;
          var st = (document.documentElement.scrollTop || document.body.scrollTop); //滚动条高
          var sl = (document.documentElement.scrollLeft || document.body.scrollLeft);
          // div.style.top = (wh - 100) / 2 + st; //定位
          // div.style.left = (ww - 300) / 2 + sl;
          console.log(wh)
          console.log(ww)
          console.log(st)
          console.log(sl)
          console.log(ev)
        }
      }
    }
</script>

<style scoped lang="less">
.tree{
  width: 726px;
  height: 100%;
  background-color: #FFFFFF;
  .one{
    width: 110px;
    height: 123px;
    background-color: #FFFFFF;
    margin: 99px auto 0;
    border-radius: 7px;
    padding-top: 6px;
    box-sizing: border-box;
    box-shadow: 0 0 11px #E5572B;
    position: relative;
    .img{
      width: 45px;
      height: 45px;
      margin: 0 auto;
    }
    .user{
      width: 56px;
      height: 14px;
      color: #242424;
      font-size: 14px;
      line-height: 14px;
      margin: 10px auto 0;
      img{
        width: 13px;
        height: 14px;
        display: block;
        float: left;
      }
      span{
        float: left;
      }
    }
    .money{
      width: 76px;
      height: 14px;
      color: #FF5224;
      font-size: 12px;
      line-height: 12px;
      margin: 10px auto 0;
      img{
        width: 12px;
        height: 12px;
        display: block;
        float: left;
      }
      span{
        float: left;
      }
    }
    .number{
      width: 100%;
      height: 21px;
      font-size: 12px;
      color: #010101;
      text-align: center;
      line-height: 21px;
      background-color: #E5F5FF;
      position: absolute;
      bottom: 0;
      border-bottom-right-radius:7px;
      border-bottom-left-radius:7px;
    }
  }
  .one-line{
    width: 308px;
    margin: 0 auto;
    .line{
      width: 50%;
      height: 27px;
      border-right: 2px solid #DCDCDC;
    }
    .line2{
      width: 100%;
      height: 27px;
      .line-wrap:nth-child(1){
        width: 50%;
        height: 27px;
        float: left;
        box-sizing: border-box;
        border-top: 2px solid #DCDCDC;
        border-left: 2px solid #DCDCDC;
        border-right: 1px solid #DCDCDC;
      }
      .line-wrap:nth-child(2){
        width: 50%;
        height: 27px;
        float: left;
        box-sizing: border-box;
        border-top: 2px solid #DCDCDC;
        border-left: 1px solid #DCDCDC;
        border-right: 2px solid #DCDCDC;
      }
    }
  }
  .two{
    width: 412px;
    height: 125px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .wrap{
      width: 110px;
      height: 123px;
      background-color: #FFFFFF;
      border-radius: 7px;
      padding-top: 6px;
      box-sizing: border-box;
      position: relative;
      .img{
        width: 45px;
        height: 45px;
        margin: 0 auto;
      }
      .user{
        width: 56px;
        height: 14px;
        color: #242424;
        font-size: 14px;
        line-height: 14px;
        margin: 10px auto 0;
        img{
          width: 13px;
          height: 14px;
          display: block;
          float: left;
        }
        span{
          float: left;
        }
      }
      .money{
        width: 76px;
        height: 14px;
        color: #FF5224;
        font-size: 12px;
        line-height: 12px;
        margin: 10px auto 0;
        img{
          width: 12px;
          height: 12px;
          display: block;
          float: left;
        }
        span{
          float: left;
        }
      }
      .number{
        width: 100%;
        height: 21px;
        font-size: 12px;
        color: #010101;
        text-align: center;
        line-height: 21px;
        background-color: #E5F5FF;
        position: absolute;
        bottom: 0;
        border-bottom-right-radius:7px;
        border-bottom-left-radius:7px;
      }
      /*第三行*/
      .three-box{
        .two-line{
          position: absolute;
          bottom: -54px;
          left: -100px;
          .line{
            width: 50%;
            height: 27px;
            border-right: 2px solid #DCDCDC;
          }
          .line2{
            width: 308px;
            height: 27px;
            margin: 0 auto;
            .line-wrap:nth-child(1){
              width: 50%;
              height: 27px;
              float: left;
              box-sizing: border-box;
              border-top: 2px solid #DCDCDC;
              border-left: 2px solid #DCDCDC;
              border-right: 1px solid #DCDCDC;
            }
            .line-wrap:nth-child(2){
              width: 50%;
              height: 27px;
              float: left;
              box-sizing: border-box;
              border-top: 2px solid #DCDCDC;
              border-left: 1px solid #DCDCDC;
              border-right: 2px solid #DCDCDC;
            }
          }
        }
        .three{
          position: absolute;
          bottom: -180px;
          left: -155px;
          width: 412px;
          height: 125px;
          display: flex;
          justify-content: space-between;
          .wrap{
            width: 110px;
            height: 123px;
            background-color: #FFFFFF;
            border-radius: 7px;
            padding-top: 6px;
            box-sizing: border-box;
            box-shadow: 0 0 3px #c9c9c9;
            position: relative;
            .img{
              width: 45px;
              height: 45px;
              margin: 0 auto;
            }
            .user{
              width: 56px;
              height: 14px;
              color: #242424;
              font-size: 14px;
              line-height: 14px;
              margin: 10px auto 0;
              img{
                width: 13px;
                height: 14px;
                display: block;
                float: left;
              }
              span{
                float: left;
              }
            }
            .money{
              width: 76px;
              height: 14px;
              color: #FF5224;
              font-size: 12px;
              line-height: 12px;
              margin: 10px auto 0;
              img{
                width: 12px;
                height: 12px;
                display: block;
                float: left;
              }
              span{
                float: left;
              }
            }
            .number{
              width: 100%;
              height: 21px;
              font-size: 12px;
              color: #010101;
              text-align: center;
              line-height: 21px;
              background-color: #E5F5FF;
              position: absolute;
              bottom: 0;
              border-bottom-right-radius:7px;
              border-bottom-left-radius:7px;
            }
          }
        }
      }

    }
  }
  .no{
    box-shadow: 0 0 3px #c9c9c9;
  }
  .active{
    box-shadow: 0 0 11px #E5572B;
  }
}
</style>
