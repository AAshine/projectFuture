<template>
    <div class="hotCourse">
        <div class="courseRecom">
            <span>热点课程推荐</span>
            <span>查看更多</span>
        </div>
        <div class="courseContent">
            <div class="courseLeft">
                 <img src="../../../../assets/images/home/ke1.png" alt="">
            </div>
            <div class="courseRight">
                <p>课程名称</p>
                课程简介简介简介简介简介课程简介简介简介简介简介介简介简介介简介简介介简介简介介简介简介介简介简介课程简介简介课程简介简介简介简介简介
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus">
.hotCourse
    border 1px solid red
.courseRecom
    display flex
    justify-content space-between
    & span:first-child
        font-size 18px
        color #333333
    & span:nth-child(2)
        font-size 14px
        display flex
        align-items center
.courseContent
    display flex
    padding:5px
.courseLeft img 
    max-width 120px
.courseRight
    margin-left 5px
    font-size 14px
    max-height 80px
    overflow hidden
    text-overflow: ellipsis
.courseRight p
    font-size 16px
    font-weight 600
    color #333333
</style>