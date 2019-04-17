<template>
    <div class="classMate">
        <div class="bannerImg"><img src="../../assets/images/home/banner2.png"></div>
       <div class="classTwo">
            <div class="classLeft">
                <ClassTab/>
                    <div class="classType">
                    <ClassTypeTab/>
                </div>
            </div>
            <div class="classRight">
                <panelDoubt/>
                <GetNow/>
                <ContactUs/>
            </div>
       </div>
    </div>
</template>
<script>
import ClassTab from '../home/component/classMate/ClassTab'
import CourseDetails from '../home/component/table/CourseDetails'
import ClassTypeTab from '../home/component/classMate/ClassTypeTab'
import panelDoubt from '../home/component/table/panelDoubt'
import GetNow  from '../../components/GetNow'
import ContactUs from '../../components/ContactUs'
export default {
    name:'ClassMate',
    data(){
        return {
            valueDisabled:5
        }
    },
    components:{
        ClassTab,//tab切换
        CourseDetails,//图片切换组件
        ClassTypeTab,//课程类型切换
        panelDoubt,//疑难解答
        GetNow,
        ContactUs
    }
}
</script>
<style lang="stylus" scoped>
.classType
    margin 30px 0 30px 0
.classRight
    padding 10px
</style>