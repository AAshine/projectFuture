<template>
  <div id="slider">
    <div class="window" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
<li>
          <div class="contentTEXT">
            <div class="customerDiv">
            <div class="customerContent">
                <div class="customerTxt">
                    <div class="teacherImg">
                        <img :src="sliders[sliders.length - 1].img" alt="">
                    </div>
                    <div class="teacherWill">
                        <div class="iconColonT"></div>
                        <div class="teacherWillText">
                            <p>{{sliders[sliders.length - 1].willText}}</p>
                        </div>
                        <div class="iconColonB"></div>
                        </div>
                </div>
            </div>
        </div>
          </div>
</li>
        <li v-for="(item, index) in sliders" :key="index" >
          <div class="contentTEXT">
            <div class="customerDiv">
            <div class="customerContent">
                <div class="customerTxt">
                    <div class="teacherImg">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="teacherWill">
                        <div class="iconColonT"></div>
                        <div class="teacherWillText">
                            <p>{{item.willText}}</p>
                        </div>
                        <div class="iconColonB"></div>
                        </div>
                </div>
            </div>
        </div>
          </div>
        </li>
<li>
          <div class="contentTEXT">
            <div class="customerDiv">
            <div class="customerContent">
                <div class="customerTxt">
                    <div class="teacherImg">
                        <img :src="sliders[0].img" alt="">
                    </div>
                    <div class="teacherWill">
                        <div class="iconColonT"></div>
                        <div class="teacherWillText">
                            <p>{{sliders[0].willText}}</p>
                        </div>
                        <div class="iconColonB"></div>
                        </div>
                </div>
            </div>
        </div>
          </div>
        </li>
      </ul>
      <ul class="direction">
        <li class="left" @click="move(800, 1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  /></svg>          
        </li>
        <li class="right" @click="move(800, -1, speed)">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"  /></svg>          
        </li>
      </ul>
      <ul class="dots">
        <li v-for="(dot, i) in sliders" :key="i" 
        :class="{dotted: i === (currentIndex-1)}"
        @click = jump(i+1)
        >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: {
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
      sliders:[
        {
          willText:'大家好我是古巨基000，我是谁谁谁你们要怎么做我教你们怎么做大家一起怎么做共同进步共同发家致富走中国特色社会注意可持续',
          img:require('../../../assets/images/1.jpg')
        },
        {
          willText:'大家好我是喳喳辉111，我是谁谁谁你们要怎么做我教你们怎么做大家一起怎么做共同进步共同发家致富走中国特色社会注意可持续',
          img:require('../../../assets/images/1.jpg')
        },
        {
          willText:'大家好我是古巨基222，我是谁谁谁你们要怎么做我教你们怎么做大家一起怎么做共同进步共同发家致富走中国特色社会注意可持续',
          img:require('../../../assets/images/1.jpg')
        },
        {
          willText:'大家好我是古巨基333，我是谁谁谁你们要怎么做我教你们怎么做大家一起怎么做共同进步共同发家致富走中国特色社会注意可持续',
          img:require('../../../assets/images/1.jpg')
        },
        {
          willText:'大家好我是古巨基444，我是谁谁谁你们要怎么做我教你们怎么做大家一起怎么做共同进步共同发家致富走中国特色社会注意可持续',
          img:require('../../../assets/images/1.jpg')
        }
      ],
      currentIndex:1,
      distance:-800,
      transitionEnd: true,
      speed: this.initialSpeed
    }
  },
  computed:{
    containerStyle() {
      return {
        transform:`translate3d(${this.distance}px, 0, 0)`
      }
    },
    interval() {
      return this.initialInterval * 1000
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init() {
      this.play()
      window.onblur = function() { this.stop() }.bind(this)
      window.onfocus = function() { this.play() }.bind(this)
    },
    move(offset, direction, speed) {
      if (!this.transitionEnd) return
      this.transitionEnd = false
      direction === -1 ? this.currentIndex += offset/800 : this.currentIndex -= offset/800
      if (this.currentIndex > 5) this.currentIndex = 1
      if (this.currentIndex < 1) this.currentIndex = 5

      const destination = this.distance + offset * direction
      this.animate(destination, direction, speed)
    },
    animate(des, direc, speed) {
      if (this.temp) { 
        window.clearInterval(this.temp)
        this.temp = null 
      }
      this.temp = window.setInterval(() => {
        if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
          this.distance += speed * direc
        } else {
          this.transitionEnd = true
          window.clearInterval(this.temp)
          this.distance = des
          if (des < -4000) this.distance = -800
          if (des > -800) this.distance = -4000
        }
      }, 20)
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1
      const offset = Math.abs(index - this.currentIndex) * 800
      const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed 
      this.move(offset, direction, jumpSpeed)
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer)
        this.timer = null
      }
      this.timer = window.setInterval(() => {
        this.move(800, -1, this.speed)
      }, this.interval)
    },
    stop() {
      window.clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>
<style lang="stylus" scoped>
#slider{
    background #ededed;
    margin 40px 0 0 0;
}
.contentTEXT{
    width: 800px;
    box-sizing: border-box;
    height: 300px;
}
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}
#slider{
  text-align: center;
}
.window{
  position:relative;
  width:800px;
  height:300px;
  margin:0 auto;
  overflow:hidden;
}
.container{
  display:flex;
  position:absolute;
}
.left, .right{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  width:50px;
  height:50px;
  background-color:rgba(0,0,0,.3);
  border-radius:50%;
  cursor:pointer;
}
.left{
  left:1%;
  padding-left:12px;
  padding-top:10px;
}
.right{
  right:1%;
  padding-right:12px;
  padding-top:10px;
}
img{
  user-select: none;
}
.dots{
    position:absolute;
    bottom:10px;
    left:50%;
    transform:translateX(-50%);
  }
.dots li{
  display:inline-block;
  width:15px;
  height:15px;
  margin:0 3px;
  border:1px solid white;
  border-radius:50%;
  background-color:#333;
  cursor:pointer;
}
.dots .dotted{
  background-color:orange;
}
.customerDiv
    background #ededed
    min-height 300px
    display flex
    justify-content space-around
.customerContent
    display flex
    justify-content space-between
    align-items center
    & .customerTxt
        display flex
        justify-content center 
        padding 10px
        & .teacherWill
            padding-left 10px
.teacherImg
    & img 
        width 120px
        height 120px
        border-radius 50%
.teacherWill
    display flex
    align-items center
    text-indent 1em
.teacherWillText
    padding 5px
.iconColonT,.iconColonB
    width 50px
    height 150px
    border 1px solid red
.teacherWillText
    max-width 500px;
</style>