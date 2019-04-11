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
        <div class="SubjectText">{{item.description}}</div>
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
        name:'抖音培训',
        description:'个人和机构都不容错过的抖音运营实战课程个人和机构都不容错过的抖音'
      },
      {
        icons:'icon-hua',
        name:'委托培养',
        description:'您的需求我们提供,您的未来我们保障'
      },
      {
        icons:'icon-rencaizhongxin',
        name:'人才预定',
        description:'您的需求我们提供,您的未来我们保障'
      },
      {
        icons:'icon-quality',
        name:'达人输出',
        description:'您的高度我们制定您的热度我们制定输出'
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
}

.subjectBriefA {
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.4s;
  max-height 350px
  min-height 250px
  display: flex;
  align-items center
}

.subjectBriefA:hover {
  box-shadow: 0 0 7px 5px rgba(210, 210, 210, 0.21, 0.1);
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
  width: 220px;
  margin: 20px;

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