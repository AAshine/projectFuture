<template>
  <div class="collegeDiv">
    <div class="specialzhe" :style="backnote">
      <div class="collegeSpecial" :style="backnotecc">
        <div class="TitlePublic">
          <h3>优秀案例</h3>
        </div>
        <div class="specialImg">
          <div class="demo specialDeom" v-for="(item, index) in specialImg" :key="index">
            <figure class="imghvr-push-down">
              <img :src="item.imgUrl" alt="example-image">
              <figcaption>
                <h3>Hello World</h3>
                <p>Life is too important to be taken seriously!</p>
              </figcaption>
              <a href="javascript:;"></a>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="TitlePublic">
      <h3>合作机构</h3>
    </div>
    <div class="pictureImg">
      <div class="demo" v-for="(item, index) in hezuo" :key="index">
        <figure class="imghvr-slide-up">
          <img :src="item.imgUrl" alt="example-image">
          <figcaption>
            <div class="txt">{{item.name}}</div>
          </figcaption>
        </figure>
      </div>
    </div>
    <div class="TitlePublic">
      <h3>联系我们</h3>
    </div>
    <div class="contactMessage">
        <div class="messageLeft">
            <collegeMessage/>
        </div>
        <div class="mapRight">
  <baidu-map class="bm-view" ak="Q6IDvIAnUWcKgx3qIE6kABLwlnrEfq8B" 
          :center="center"
          :zoom="zoom"
          @ready="handler"

          >
  </baidu-map>
        </div>
    </div>
  </div>
</template>
<script>
import collegeMessage from '../about/collegeMessage'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
// import BmGeolocation from 'vue-baidu-map/components/controls/Geolocation.vue'; //定位
// import BmMapType from 'vue-baidu-map/components/controls/MapType.vue'; //地图类型
// import BmCityList from 'vue-baidu-map/components/controls/CityList.vue'; //城市列表
// import BmMarker from 'vue-baidu-map/components/overlays/Marker.vue'; //标记 点
export default {
  name: "collegeSpecial",
  components:{
      collegeMessage,
      BaiduMap
  },
  
  data() {
    return {
        center:{lang:1,lat:0},
        zoom:3,
      backnote: {
        backgroundImage:
          "url(" +
          require("../../../../assets/images/home/collegeSecipal.png") +
          ")"
      },
      backnotecc: {
        backgroundImage:
          "url(" + require("../../../../assets/images/home/zhezhao.png") + ")"
      },
      specialImg: [
        {
          imgUrl: require("../../../../assets/images/home/special1.png")
        },
        {
          imgUrl: require("../../../../assets/images/home/special2.png")
        },
        {
          imgUrl: require("../../../../assets/images/home/special3.png")
        },
        {
          imgUrl: require("../../../../assets/images/home/special4.png")
        }
      ],
      hezuo: [
        {
          name: "值得买",
          imgUrl: require("../../../../assets/images/home/ke1.png")
        },
        {
          name: "浙江大学",
          imgUrl: require("../../../../assets/images/home/ke1.png")
        },
        {
          name: "小红书",
          imgUrl: require("../../../../assets/images/home/ke1.png")
        },
        {
          name: "博多集团",
          imgUrl: require("../../../../assets/images/home/ke1.png")
        },
        {
          name: "值得买",
          imgUrl: require("../../../../assets/images/home/ke1.png")
        },
        {
          name: "浙江大学",
          imgUrl: require("../../../../assets/images/home/ke1.png")
        },
        {
          name: "小红书",
          imgUrl: require("../../../../assets/images/home/ke1.png")
        },
        {
          name: "博多集团",
          imgUrl: require("../../../../assets/images/home/ke1.png")
        },
        {
          name: "值得买",
          imgUrl: require("../../../../assets/images/home/ke1.png")
        },
        {
          name: "浙江大学",
          imgUrl: require("../../../../assets/images/home/ke1.png")
        },
        {
          name: "小红书",
          imgUrl: require("../../../../assets/images/home/ke1.png")
        },
        {
          name: "博多集团",
          imgUrl: require("../../../../assets/images/home/ke1.png")
        }
      ]
    };
  },
  methods:{
       handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 120.110812
      this.center.lat = 30.361959
      this.zoom = 15
    }
  }
};
</script>
<style lang="stylus" scoped>
.bm-view {
  width: 100%;
  height: 100%;
}
.txt {
  text-align: center;
}

.specialImg {
  display: flex;
  justify-content: center;
  padding-bottom: 100px;

  & img {
    max-width;
    300px;
  }
}

.caseMessages {
  width: 1200px;
  margin: 0 auto;
}

.demo {
  display: inline-block;
  -webkit-box-sizing: padding-box;
  box-sizing: padding-box;
}

.demo textarea {
  -webkit-box-sizing: padding-box;
  box-sizing: padding-box;
  font-family: 'Roboto';
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

.pictureImg {
  max-width: 960px;
  margin: 0 auto;
}
.contactMessage
    display flex
    justify-content center
.mapRight
    width 600px
    margin-left 100px

</style>