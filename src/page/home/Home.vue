<template>
  <div class="home">
        <div class="bannerImg"><img src="../../assets/images/home/banner1.png"></div>
        <!-- <home-swiper/> -->
        <home-summary/>
          <div class="TitlePublic">
              <h3>课程介绍</h3>
          </div>
        <SubjectBrief/>
        <div class="addStrip">
          已经有四千万人加入了我们的俱乐部，这是第一步！
          <div class="addBtn">点击加入</div>
        </div>
        <div class="TitlePublic">
              <h3>成功案例</h3>
          </div>
          <ClassmateChoice/>
          <CustomerReviews/>
          <LatestNews/>
          <div class="TitlePublic">
              <h3>师资力量</h3>
          </div>
          <TeacherPower/>
          <div class="TitlePublic">
              <h3>灵活选择</h3>
          </div>
          <Choice/>
        <HomeFooter/>
      <back-top :scrollmyself='true'></back-top>
  </div>  
  
</template>
<script scoped>
import HomeSwiper from './component/HomeSwiper'
import HomeSummary from './component/HomeSummary'
import SubjectBrief from './component/SubjectBrief'
import ClassmateChoice from './component/ClassmateChoice'
import CustomerReviews from './component/CustomerReviews'
import LatestNews from './component/LatestNews'
import TeacherPower from './component/TeacherPower'
import Choice from './component/Choice'
import HomeFooter from './component/HomeFooter'
// import Loading from './component/Loading'
import BackTop from './component/BackTop/src/BackTop'
export default {
  name:'Home',
  components:{
    // Loading,
    HomeSwiper,
    HomeSummary,
    SubjectBrief,
    ClassmateChoice,
    CustomerReviews,
    LatestNews,
    TeacherPower,
    Choice,
    HomeFooter,
    BackTop
  },
}
</script>
// 只在当前vue模板文件中有效
<style lang="stylus">
.bannerImg
    height 480px
.bannerImg img
    width 100%
    height 100%
    padding-top: 80px;
</style>