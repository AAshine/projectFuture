import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import BackTop from './page/home/component/BackTop/src/BackTop'
import Vuelidate from 'vuelidate'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
Vue.use(Vuelidate)
Vue.use(VueAwesomeSwiper)
Vue.use(BackTop)

import "../src/assets/icon/iconfont.css";
import "swiper/dist/css/swiper.min.css";
import "../src/assets/css/plugins.css";
import "../src/assets/css/style.css";
import '../src/assets/css/public.styl'
import '../src/assets/css/index.styl'
import jq from '../src/assets/js/vendor/jquery1.11.2.min'  
import bootstrap from '../src/assets/js/vendor/bootstrap' 
import jquerymagnific from '../src/assets/js/jquery.magnific.popup' 
import jqueryeasing from '../src/assets/js/jquery.easing.1.3' 
import jquerytouchSwipe from '../src/assets/js/jquery.touchSwipe.min'
import bootsnav from '../src/assets/js/bootsnav' 
import jqueryformchimp from '../src/assets/js/jquery.formchimp'
Vue.prototype.$ = $;  
Vue.prototype.$jq = jq;   
Vue.prototype.$bootstrap = bootstrap; 
Vue.prototype.$jquerymagnific = jquerymagnific; 
Vue.prototype.$jqueryeasing = jqueryeasing; 
Vue.prototype.$jquerytouchSwipe = jquerytouchSwipe; 
Vue.prototype.$bootsnav = bootsnav;
Vue.prototype.$jqueryformchimp = jqueryformchimp;
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
