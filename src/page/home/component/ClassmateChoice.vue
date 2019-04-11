<template>
    <div class="classmate">
        <div class="classmateChoice" v-for="classmateDates in classmateDate">
        <div class="classmateNumber">
            <div class="classmateImage">
                <img :src="classmateDates.imgUrl">
            </div>
            <p>{{classmateDates.programName}}</p>
            <div class="classmateIntro">
                <div class="classLook">108.6w</div>
                <div class="classPeople">咸鱼怎么翻身</div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'classmateChoice',
    data(){
      return {
          classmateDate:[
                      {
                          id:'001',
                          programName:'项目一案例测试',
                          imgUrl: require('../../../assets/images/1.jpg'),
                          //        imgUrl:tImg
                          LookNumber:'108.6w',
                          wirter:'咸鱼是怎么翻身的'
                      },
                        {
                          id:'002',
                          programName:'项目一案例测试',
                          imgUrl: require('../../../assets/images/1.jpg'),
                          //        imgUrl:tImg
                          LookNumber:'108.6w',
                          wirter:'咸鱼是怎么翻身的'
                      },
                        {
                          id:'003',
                          programName:'项目一案例测试',
                          imgUrl: require('../../../assets/images/1.jpg'),
                          //        imgUrl:tImg
                          LookNumber:'108.6w',
                          wirter:'咸鱼是怎么翻身的'
                      },
                                            {
                          id:'004',
                          programName:'项目一案例测试',
                          imgUrl: require('../../../assets/images/1.jpg'),
                          //        imgUrl:tImg
                          LookNumber:'108.6w',
                          wirter:'咸鱼是怎么翻身的'
                      }
          ]
      }
  },
}
</script>
<style lang="">
    
</style>