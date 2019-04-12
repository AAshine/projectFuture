<template>
    <Tabs value="name1" id="classTab">
        <Tab-pane label="抖音培训" name="name1">
          <teahcerOneTab/>
        </Tab-pane>
        <Tab-pane label="委托培养" name="name2">22222222</Tab-pane>
        <Tab-pane label="人才预定" name="name3">3</Tab-pane>
        <Tab-pane label="达人输出" name="name4">4</Tab-pane>
    </Tabs>
</template>
<script>
import CouserDetails from '../table/CourseDetails'
import ClassObject from '../table/ClassObject'
import teahcerOneTab from '../TeacherPage/teacherOneTab'
    export default {
        name:'ClassTab',
        components:{
          CouserDetails,//图片切换
          ClassObject,//切换内容
          teahcerOneTab
        }
    }
</script>
<style lang="stylus">
#classTab .ivu-tabs-nav-scroll
  width 720px
  display flex
#classTab .ivu-tabs-bar
  width 720px
  margin 0 auto
#classTab .ivu-tabs-tabpane
  display flex
  justify-content center
#classTab .ivu-tabs-ink-bar
  background-color #9208c5
</style>
