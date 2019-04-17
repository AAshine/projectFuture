<template>
    <div class="NewsPage">
        <div class="bannerImg"><img src="../../assets/images/home/banner4.png"></div>
        <div class="classTwo">
            <div class="classLeft">
                <NewsTab/>
            </div>
            <div class="classRight">
                <HotCourse/>
                <GetNow/>
                <ContactUs/>
            </div>
       </div>
    </div>
</template>
<script>
import NewsTab from '../home/component/NewsPage/NewsTab'
import HotCourse from '../home/component/NewsPage/HotCourse'
import GetNow from '../../components/GetNow'
import ContactUs from '../../components/ContactUs'
export default {
    components:{
        NewsTab,
        HotCourse,
        GetNow,
        ContactUs
    }
}
</script>
<style lang="stylus">

</style>
