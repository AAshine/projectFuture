<template>
  <div class="caseMessage">
    <div class="bannerImg">
      <img src="../../assets/images/home/banner2.png">
    </div>
    <div class="TitlePublic">
      <h3>优秀案例</h3>
    </div>
    <div class="caseMessages">
      <div class="demo">
        <figure class="imghvr-reveal-right">
          <img src="../../assets/images/teacher1.png" alt="example-image">
          <figcaption>
            <h3>案例介绍</h3>
            <p>Life is too important to be taken seriously!</p>
          </figcaption>
          <a href="javascript:;"></a>
        </figure>
      </div>
      <div class="demo">
        <figure class="imghvr-reveal-right">
          <img src="../../assets/images/teacher1.png" alt="example-image">
          <figcaption>
            <h3>案例介绍</h3>
            <p>Life is too important to be taken seriously!</p>
          </figcaption>
          <a href="javascript:;"></a>
        </figure>
      </div>
      <div class="demo">
        <figure class="imghvr-reveal-right">
          <img src="../../assets/images/teacher1.png" alt="example-image">
          <figcaption>
            <h3>案例介绍</h3>
            <p>Life is too important to be taken seriously!</p>
          </figcaption>
          <a href="javascript:;"></a>
        </figure>
      </div>
      <div class="demo">
        <figure class="imghvr-reveal-right">
          <img src="../../assets/images/teacher1.png" alt="example-image">
          <figcaption>
            <h3>案例介绍</h3>
            <p>Life is too important to be taken seriously!</p>
          </figcaption>
          <a href="javascript:;"></a>
        </figure>
      </div>
    </div>
    <div class="TitlePublic">
      <h3>现有大V号</h3>
    </div>
    <div class="bigV">
      <bigVnumber/>
    </div>
  </div>
</template>
<script>
import "../../assets/css/caseMessage.css";
import bigVnumber from "../home/component/caseMessage/bigVnumber";
export default {
  components: {
    bigVnumber
  }
};
</script>
<style lang="css" scoped>
.caseMessages {
  width: 1200px;
  margin: 0 auto;
}
.demo {
  display: inline-block;
  width: 25%;

  -webkit-box-sizing: padding-box;
  box-sizing: padding-box;
}
.demo textarea {
  -webkit-box-sizing: padding-box;
  box-sizing: padding-box;
  font-family: "Roboto";
  font-size: 0.9em;
  height: 32px;
  padding: 6px 0px;
  resize: none;
  text-align: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
img {
  border: none;
}
.effects {
  margin: 3em 15em;
}
@media only screen and (max-width: 959px) {
  .demo {
    width: 32.5%;
  }
}
@media only screen and (max-width: 659px) {
  .demo {
    width: 49%;
  }
}
@media only screen and (max-width: 360px) {
  .demo {
    width: 100%;
  }
}
</style>
