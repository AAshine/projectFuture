<template>
    <Tabs value="name1" id="classTab">
        <Tab-pane label="新闻中心" name="name1">
          <div class="douyin">
          <teacherOneTab/>
          </div>
        </Tab-pane>
        <Tab-pane label="疑问解答" name="name2">22222222</Tab-pane>
    </Tabs>
</template>
<script>
import teacherOneTab from '../NewsPage/teacherOneTab'
    export default {
        name:'ClassTab',
        components:{
          teacherOneTab//切换内容
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
