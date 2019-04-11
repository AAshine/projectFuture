<template>
<div class="banner">
      <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
      <swiper-slide v-for='item of swiperList' :key="item.id">
                <img :src="item.imgUrl" class="swiper-img">
            </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
</div>
</template>
<script>
import {swiper,swiperSlider} from "vue-awesome-swiper";
export default{
    name:"HomeSwiper",
    components:{
        swiper,
        swiperSlider
    },
    data() {
      return {
        swiperOption: {
            pagination:{
                el:".swiper-pagination",
                loop:true,
            }         
        },
        autoplay:{
            delay:2500,
            disableOnInteraction:false
        },
              swiperList:[{
       id:"0001",
      imgUrl:require('../../../assets/images/home/banner1.png')
      },{
      id:"0002",
      imgUrl:"http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
      },{
      id:"0003",
      imgUrl:"http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
      },{
      id:"0004",
      imgUrl:"http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
      }
      ]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
}
</script>
<style lang="stylus" scoped>
.banner
    text-align center
    margin-bottom 5px
    border-radius 3px
    overflow:hidden
    width:100%
    height:0
    padding-bottom:30.48%
    background: #eee
    padding-top:80px
@media screen and (max-width:420px){
  .banner{
    padding-top: 55px;
  }
}
  & .swiper-img
      width:100%
.banner >>> .swiper-pagination-bullet-active
    background:#fff
</style>
