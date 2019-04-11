<template>
    <div class="LatestNews">
        <div class="TitlePublic">
              <h3>最新消息</h3>
          </div>
          <div class="lastestThress">
              <div class="lastestContent" v-for="(item, index) in newsContent" :key="index">
                  <div class="lastestImg">
                      <img :src="item.imgUrl" alt="">
                  </div>
                  <div class="lastestTitle">
                     {{item.title}}
                  </div>
                  <div class="lastestText">
                     {{item.contents}}
                  </div>
                  <div class="lastestTime">
                      <div class="textTime"><i class=""></i>
                      {{item.time}}
                      </div>
                      <div class="textPeople">
                          <i class=""></i>
                          {{item.peopleNumber}}
                      </div>
                  </div>
              </div>
            <div class="lastestContent" id="panelDoubt">
                <div class="panelTitle">疑难解答</div>
<Collapse v-model="doubt" accordion>
        <Panel name="1">
            史蒂夫·乔布斯史蒂夫·乔布斯史蒂夫·乔布斯乔布斯史蒂夫·乔布斯乔布斯史蒂夫·乔布斯
            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
        </Panel>
        <Panel name="2">
            斯蒂夫·盖瑞·沃兹尼亚克
            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
        </Panel>
        <Panel name="3">
            乔纳森·伊夫
            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
                <Panel name="4">
            乔纳森·伊夫
            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
                <Panel name="5">
            乔纳森·伊夫
            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
                <Panel name="6">
            乔纳森·伊夫
            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
</Collapse>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'lastNews',
    data(){
        return {
            doubt: '1',
            newsContent:[
                {
                    id: '001',
                    title:'新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1',
                    imgUrl:require('../../../assets/images/2.jpg'),
                    contents:'新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻',
                    time:'2018-07-25',
                    peopleNumber:'999'
                },
                {
                    id: '002',
                    title:'新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1',
                    imgUrl:require('../../../assets/images/2.jpg'),
                    contents:'新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻新闻新闻新闻1新闻',
                    time:'2018-07-25',
                    peopleNumber:'888'
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
.panelTitle
    font-size 21px
    font-weight 600
    padding 20px
.LatestNews
    background #493c98
    height 760px
    & .TitlePublic
        color #fefefe
        padding-top 80px
.lastestThress
    display flex
    justify-content center
.lastestContent 
        width 380px
        height 550px
        max-width 380px
        max-height 550px
        margin-left 25px
        color #e1e1e1
    & .lastestImg
        width 380px
        height 330px;
        max-width 380px
        max-height 330px
        & img 
            width 100%
            height 100%
    & .lastestTitle
        font-size 18px
        padding 5px
        text-overflow: ellipsis;
        overflow: hidden; 
        max-height 78px
    & .lastestText
        text-overflow: ellipsis;
        overflow: hidden; 
        max-height 70px
        padding 5px
        text-indent 2em
    & .lastestTime
        display flex
        justify-content space-between
        padding 10px
#panelDoubt .ivu-collapse
    background-color #493c98
    border none
#panelDoubt >>> .ivu-collapse-content
    background-color #493c98
#panelDoubt >>> .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header
    color #dbd9e8
    text-overflow:ellipsis;
    overflow:hidden;
    max-width 370px
#panelDoubt >>> .ivu-collapse-content
    color #dbd9e8
#panelDoubt .ivu-collapse>.ivu-collapse-item
    border none
</style>
