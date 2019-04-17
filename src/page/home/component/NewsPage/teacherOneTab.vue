<template>
    <div class="teacherOneTab">
        <div class="teacherContent">
            <div class="teacherTxtImg">
                <div class="teacherImg">
                    <img src="../../../../assets/images/1.jpg" alt="">
                </div>
                <div class="teacherTxt">
                    <p>姓名</p>
                    <div class="teacherBottom">
                        <span>点赞9999</span>
                        <span>热度666</span>
                    </div>
                </div>
            </div>
        </div>
           <div class="teacherContent">
            <div class="teacherTxtImg">
                <div class="teacherImg">
                    <img src="../../../../assets/images/1.jpg" alt="">
                </div>
                <div class="teacherTxt">
                    <p>姓名</p>
                    <div class="teacherBottom">
                        <span>点赞9999</span>
                        <span>热度666</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="teacherContent">
            <div class="teacherTxtImg">
                <div class="teacherImg">
                    <img src="../../../../assets/images/teacher1.png" alt="">
                </div>
                <div class="teacherTxt">
                    <p>姓名</p>
                    <div class="teacherBottom">
                        <span>点赞9999</span>
                        <span>热度666</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="teacherContent">
            <div class="teacherTxtImg">
                <div class="teacherImg">
                    <img src="../../../../assets/images/1.jpg" alt="">
                </div>
                <div class="teacherTxt">
                    <p>姓名</p>
                    <div class="teacherBottom">
                        <span>点赞9999</span>
                        <span>热度666</span>
                    </div>
                </div>
            </div>
        </div>
            <div class="teacherContent">
            <div class="teacherTxtImg">
                <div class="teacherImg">
                    <img src="../../../../assets/images/1.jpg" alt="">
                </div>
                <div class="teacherTxt">
                    <p>姓名</p>
                    <div class="teacherBottom">
                        <span>点赞9999</span>
                        <span>热度666</span>
                    </div>
                </div>
            </div>
        </div>
            <div class="teacherContent">
            <div class="teacherTxtImg">
                <div class="teacherImg">
                    <img src="../../../../assets/images/1.jpg" alt="">
                </div>
                <div class="teacherTxt">
                    <p>姓名</p>
                    <div class="teacherBottom">
                        <span>点赞9999</span>
                        <span>热度666</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="pageNumber">
            <Page :total="100" />
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
.teacherOneTab
    display flex    
    flex-flow row wrap
.teacherContent
    display flex
    width 220px
    margin 10px
    max-width 220px
    max-height 400px
.teacherContent img
    width 100%
    max-height 300px
    overflow hidden
.teacherTxtImg
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
.teacherTxt p
    text-align center
    padding 10px
    font-size 18px
.teacherBottom
    display flex
    justify-content space-around
    background: #f5f5f5
    padding 10px
.pageNumber
    margin 30px auto
</style>