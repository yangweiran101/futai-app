<template>
  <div class="tree" >
    <!--<button @click="refreash">刷新</button>-->

    <div class="movebox" >
      <!--第一行-->
      <div class="one" @click="handleMove">
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
        <div class="downline"></div>
      </div>

      <!--第二行-->
      <div class="two">

        <div class="wrap" @click="handleMove" :class="[first?'active' :'no']" >
          <!--上面的线-->
          <div class="upline"></div>
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
          <!--第三行（第二行分支）-->
          <div class="three-box" v-if="first">
            <div class="wrap">
              <!--上面的线-->
              <div class="upline"></div>
              <!--主体-->
              <div>
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

            </div>
            <div class="wrap"  >
              <!--上面的线-->
              <div class="upline"></div>
              <!--主体-->
              <div >
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

            </div>
            <div class="wrap" >
              <!--上面的线-->
              <div class="upline"></div>
              <!--主体-->
              <div >
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

            </div>

          </div>
          <!--下面的线-->
          <div class="downline" v-if="first"></div>
        </div>

        <div class="wrap" @click="handleMove" :class="[second?'active' :'no']" >
          <!--上面的线-->
          <div class="upline"></div>
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
          <!--第三行（第二行分支）-->
          <div class="three-box" @click="addBox" v-if="second">
            <div class="wrap">
              <!--上面的线-->
              <div class="upline"></div>
              <!--主体-->
              <div>
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

            </div>
            <div class="wrap"  >
              <!--上面的线-->
              <div class="upline"></div>
              <!--主体-->
              <div >
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

            </div>
            <div class="wrap" >
              <!--上面的线-->
              <div class="upline"></div>
              <!--主体-->
              <div >
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

            </div>

          </div>
          <!--下面的线-->
          <div class="downline" v-if="second"></div>
        </div>

        <div class="wrap" @click="handleMove" :class="[third?'active' :'no']" >
          <!--上面的线-->
          <div class="upline"></div>
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
          <!--第三行（第二行分支）-->
          <div class="three-box" v-if="third">
            <div class="wrap">
              <!--上面的线-->
              <div class="upline"></div>
              <!--主体-->
              <div>
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

            </div>
            <div class="wrap"  >
              <!--上面的线-->
              <div class="upline"></div>
              <!--主体-->
              <div >
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

            </div>
            <div class="wrap" >
              <!--上面的线-->
              <div class="upline"></div>
              <!--主体-->
              <div >
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

            </div>

          </div>
          <!--下面的线-->
          <div class="downline" v-if="third"></div>
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
          third:false,
          left:0,
          top:0
        }
      },
      methods:{
        getNext (id) {
          let two = document.querySelector('.two');
          two.style.width = `${3*375}px`
          if (id === 1) { //判断点击的是第二行哪一项
            // this.id = id;
            this.first = !this.first;
          } else if (id === 2) {
            // this.id = id;
            this.second = !this.second;
          } else if (id === 3) {
            // this.id = id;
            this.third = !this.third;
          }

          if (!this.first&&!this.second&&!this.third) {
            // two.style.width = '360px';
            this.$router.go(0)
            // let movebox = document.querySelector('.movebox'); // 获取整个页面盒子元素
            // movebox.style.top = 0//初始化
            // movebox.style.left = 0;
            // this.$router.go(0)
        }
        },
        handleMove (ev) {
          ev = ev || event; // 浏览器兼容处理
          console.log(ev.currentTarget);
          ev.currentTarget.style.marginRight = '250px'


          let moveX = - (ev.clientX - ev.layerX) + 265/2 ; // 变化宽度 为 负的点击的盒子相对于页面左边的距离 加上页面宽度的二分之一
          let moveY = - (ev.clientY - ev.layerY) + 200 ; // 变化高度 为 负的点击的盒子相对于页面上边的距离 加上页面高度的二分之一
          let movebox = document.querySelector('.movebox'); // 获取整个页面盒子元素

          let oldTop = this.top ; // movebox元素的原始值
          let oldLeft = this.left ;

          let newTop = oldTop + moveY // 盒子的新位置是原始值加上变化值
          let newLeft = oldLeft + moveX

          this.top = newTop // 将新top值存储
          this.left = newLeft

          movebox.style.position = 'absolute'; //定位变成绝对定位
          movebox.style.top = `${newTop}px`; //top值为新位置值
          movebox.style.left = `${newLeft}px`;//left值为新位置值
          // console.log(ev);

        },
        refreash () {
          this.$router.go(0)
        },
        addBox (ev) {
          ev = ev || event; // 浏览器兼容处理
          console.log(ev);
          // ev.target.innerHTML =
        }
      }
    }
</script>

<style scoped lang="less">
.tree{
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  position: relative;
  padding-left: 5px;
  .one{
    width: 110px;
    height: 123px;
    background-color: #FFFFFF;
    margin: 99px 0 0 0;
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
    .downline{
      width: 50%;
      height: 27px;
      position: absolute;
      bottom: -27px;
      left: 0;
      border-right: 2px solid #DCDCDC;
    }
  }

  .two{
    width: 360px;
    height: 125px;
    margin-top: 50px;
    .wrap:nth-child(1){
      width: 110px;
      height: 123px;
      float: left;
      margin-right: 10px;
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
      /*上面的线*/
      .upline{
        width: 50%;
        height: 27px;
        position: absolute;
        top: -27px;
        left: 0;
        border-right: 2px solid #DCDCDC;
        border-top: 0;
      }
      /*第三行*/
      .three-box{
        position: absolute;
        bottom: -177px;
        left: 0;
        width: 360px;
        height: 125px;
        .wrap:nth-child(1){
          width: 110px;
          height: 123px;
          margin-right: 10px;
          float: left;
          background-color: #FFFFFF;
          border-radius: 7px;
          box-shadow: 0 0 3px #c9c9c9;
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
          /*上面的线*/
          .upline{
            width: 50%;
            height: 27px;
            position: absolute;
            top: -27px;
            left: 0;
            border-right: 2px solid #DCDCDC;
            border-top: 0;
          }
          /*第三行*/
          .three-box{
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
                margin-right: 15px;
                float: left;
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
                /*上面的线*/
                .upline{
                  width: 50%;
                  height: 27px;
                  position: absolute;
                  top: -27px;
                  left: 0;
                  border-right: 2px solid #DCDCDC;
                  border-top: 0;
                }
              }
            }
          }

        }
        .wrap{
          width: 110px;
          height: 123px;
          background-color: #FFFFFF;
          margin-right: 10px;
          float: left;
          border-radius: 7px;
          box-shadow: 0 0 3px #c9c9c9;
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
          /*上面的线*/
          .upline{
            width: 122px;
            height: 27px;
            position: absolute;
            top: -27px;
            left: -65px;
            border-top: 2px solid #DCDCDC;
            border-right: 2px solid #DCDCDC;
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
      .downline{
        width: 50%;
        height: 27px;
        position: absolute;
        bottom: -27px;
        left: 0;
        border-right: 2px solid #DCDCDC;
      }
    }
    .wrap{
      width: 110px;
      height: 123px;
      background-color: #FFFFFF;
      float: left;
      margin-right: 10px;
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
      /*上面的线*/
      .upline{
        width: 122px;
        height: 27px;
        position: absolute;
        top: -27px;
        left: -65px;
        border-top: 2px solid #DCDCDC;
        border-right: 2px solid #DCDCDC;
      }
      /*第三行*/
      .three-box{
        position: absolute;
        bottom: -177px;
        left: 0;
        width: 360px;
        height: 125px;
        .wrap:nth-child(1){
          width: 110px;
          height: 123px;
          margin-right: 10px;
          float: left;
          background-color: #FFFFFF;
          border-radius: 7px;
          box-shadow: 0 0 3px #c9c9c9;
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
          /*上面的线*/
          .upline{
            width: 50%;
            height: 27px;
            position: absolute;
            top: -27px;
            left: 0;
            border-right: 2px solid #DCDCDC;
            border-top: 0;
          }
          /*第三行*/
          .three-box{
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
                margin-right: 15px;
                float: left;
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
                /*上面的线*/
                .upline{
                  width: 50%;
                  height: 27px;
                  position: absolute;
                  top: -27px;
                  left: 0;
                  border-right: 2px solid #DCDCDC;
                  border-top: 0;
                }
              }
            }
          }

        }
        .wrap{
          width: 110px;
          height: 123px;
          background-color: #FFFFFF;
          margin-right: 10px;
          float: left;
          border-radius: 7px;
          box-shadow: 0 0 3px #c9c9c9;
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
          /*上面的线*/
          .upline{
            width: 122px;
            height: 27px;
            position: absolute;
            top: -27px;
            left: -65px;
            border-top: 2px solid #DCDCDC;
            border-right: 2px solid #DCDCDC;
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
      .downline{
        width: 50%;
        height: 27px;
        position: absolute;
        bottom: -27px;
        left: 0;
        border-right: 2px solid #DCDCDC;
      }
    }
  }
  .no{
    box-shadow: 0 0 3px #c9c9c9;
  }
  .active{
    box-shadow: 0 0 11px #E5572B;
  }
  .three-box{
    position: absolute;
    bottom: -177px;
    left: 0;
    width: 414px;
    height: 125px;
    .wrap:nth-child(1){
      width: 110px;
      height: 123px;
      margin-right: 15px;
      float: left;
      background-color: #FFFFFF;
      border-radius: 7px;
      box-shadow: 0 0 3px #c9c9c9;
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
      /*上面的线*/
      .upline{
        width: 50%;
        height: 27px;
        position: absolute;
        top: -27px;
        left: 0;
        border-right: 2px solid #DCDCDC;
        border-top: 0;
      }
      /*第三行*/
      .three-box{
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
            margin-right: 15px;
            float: left;
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
            /*上面的线*/
            .upline{
              width: 50%;
              height: 27px;
              position: absolute;
              top: -27px;
              left: 0;
              border-right: 2px solid #DCDCDC;
              border-top: 0;
            }
          }
        }
      }

    }
    .wrap{
      width: 110px;
      height: 123px;
      background-color: #FFFFFF;
      margin-right: 15px;
      float: left;
      border-radius: 7px;
      box-shadow: 0 0 3px #c9c9c9;
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
      /*上面的线*/
      .upline{
        width: 122px;
        height: 27px;
        position: absolute;
        top: -27px;
        left: -65px;
        border-top: 2px solid #DCDCDC;
        border-right: 2px solid #DCDCDC;
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
}
</style>
