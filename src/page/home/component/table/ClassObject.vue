<template>
<div class="ClassObject">
        <div class="classObject">
                    <div class="classTitle">课程名称</div>
                    <div class="classDoing">
                        <div class="classDoingThree">
                            <div class="classGrade">
                                <span>学员满意度</span>
                                <Rate disabled v-model="valueDisabled"></Rate>
                                </div>
                            <div class="classTeach">讲师:某某某</div>
                            <div class="classEnter"><span>我要报名</span></div>
                        </div>
                    </div>
                    <p class="classPP">课程简介</p>
                    <div class="classText">
                        课程简介简介课程简介简介课程简介简介简介简介课程简介简介简介简介课程简介简介简介简介课程简介简介简介简介课程简介简介简介简介
                    </div>
                </div>
</div>
</template>
<script>
export default {
            data () {
            return {
                valueDisabled: 5
            }
        }
}
</script>
<style lang="stylus" scoped>
.classObject .classTitle
    font-size 18px
    color #000000
    text-align center
    padding 10px
.classDoing
    background #f5f5f5
    border 1px solid #e1e1e1
.classDoingThree
    display flex
    justify-content center
    margin: 8px
    & .classGrade,.classTeach,.classEnter
        flex 1
        display flex
        justify-content center
        align-items center
.classGrade >>>.ivu-rate-star
    margin-right 0
.classGrade span 
    padding-right 3px
.classEnter span
    padding 6px 18px 6px 18px
    border 1px solid #9208c5
    border-radius 5px
    color #9208c5
    cursor pointer
.classText
    padding 0 5px 0 5px
    text-indent 2em
.classPP
    padding 10px
    font-size 18px
</style>