<template>
  <div class="subjectBrief">
    <div class="subjectBriefA" v-for="item in textData">
      <div class="subjectOne">
        <div class="SubjectImg">
          <div class="SubjectImgBorder">
            <i class="iconfont" v-bind:class="[item.icons]"></i>
          </div>
        </div>
        <p>{{item.name}}</p>
        <div class="SubjectText">
          {{item.description}}
          <div class="SubjectTextS">Contact us
            <div></div>
            </div> 
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'subjectBrief',
  data(){
    return{
          textData:[
      {
        icons:'icon-peixun',
        name:'基础班',
        description:'应届生/转行无基础'
      },
      {
        icons:'icon-hua',
        name:'总裁班',
        description:'提升技能'
      },
      {
        icons:'icon-rencaizhongxin',
        name:'达人班',
        description:'脱颖而出'
      },
      {
        icons:'icon-quality',
        name:'实战班',
        description:'毕业择优进行推荐就业'
      }
    ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.active {
  background: red;
}

.subjectBrief {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom 20px
}

.subjectBriefA {
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.4s;
  max-height 400px
  min-height 300px
  display flex
  justify-content center
  align-items center
}

.subjectBriefA:hover {
  box-shadow: 0 0 10px 8px rgba(210, 210, 210, 0.21, 0.1);
  border-radius 5px
}

.SubjectImg:hover {
  border: 1px solid rgba(147, 8, 197, 1);
  box-shadow: 0 0 8px 3px rgba(147, 8, 197, 0.35);

  & .SubjectImgBorder {
    background: rgba(147, 8, 197, 1);
    border: 1px solid #fff;
  }
}

.subjectOne {
  width: 200px
  margin: 20px

  & p {
    text-align: center;
    color: black;
    font-size: 18px;
    font-weight: 600;
  }

  .SubjectText {
    font-size: 14px;
    text-align: center;
    letter-spacing: 1px;
    padding: 10px;
  }
}
.SubjectTextS
  padding 5px
  & div
      width 80px
      margin 0 auto
      margin-top 5px
      border-bottom 2px solid #e1e1e1
  
.SubjectImg {
  background: #ffffff;
  box-shadow: 0 0 5px 3px rgba(180, 180, 180, 0.18);
  border-radius: 50%;
  width: 81px;
  height: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  transition: all 0.7s;
}

.SubjectImgBorder {
  border-radius: 50%;
  width: 77px;
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.7s;
}
</style>