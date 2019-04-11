(function () {

  // 璺宠浆鏉ユ簮鍦板潃

  var search = "";

  var referrer1 = document.referrer;
  var referrer = decodeURIComponent(referrer1);
  var i = referrer.indexOf('?');
  if(i != -1){
      var http = referrer.substring( 0, i);
      var key = referrer.substring(i);

      if(http.indexOf("www.so.com") != -1){
          var x = 1;
          search = "360pc绔�";
      }else if(http.indexOf("m.so.com") != -1){
          var x = 1;
          search = "360绉诲姩绔�";
      }else if(http.indexOf("www.sogou.com") != -1){
          var x = 2;
          search = "鎼滅嫍pc绔�";
      }else if(http.indexOf("m.sogou.com") != -1){
          var x = 3;
          search = "鎼滅嫍绉诲姩绔�";
      }else if(http.indexOf("so.m.sm.cn") != -1){
          var x = 1;
          search = "绁為┈绉诲姩";
      }

      var params = key.substring(1);
      var paramsArr = params.split("&");
      for(var a = 0; a < paramsArr.length; a++) {
          // console.log(paramsArr);
          if(x = 1 && paramsArr[a].indexOf("q") != -1) {
              var keyword = paramsArr[a].split("=")[1];
          }else if(x = 2 && paramsArr[a].indexOf("query") != -1){
              var keyword = paramsArr[a].split("=")[1];
          }else if(x = 3 && paramsArr[a].indexOf("keyword") != -1){
              var keyword = paramsArr[a].split("=")[1];
          }
      }
  }else {
      var keyword = "鐩存帴璁块棶";
  }


  // 骞冲彴 PC iOS Android
  var browser={
      versions:function(){
          var u = window.navigator.userAgent;
          return {
              trident: u.indexOf('Trident') > -1, //IE鍐呮牳
              presto: u.indexOf('Presto') > -1, //opera鍐呮牳
              webKit: u.indexOf('AppleWebKit') > -1, //鑻规灉銆佽胺姝屽唴鏍�
              gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //鐏嫄鍐呮牳
              mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //鏄惁涓虹Щ鍔ㄧ粓绔�
              ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios缁堢
              android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android缁堢鎴栬€卽c娴忚鍣�
              iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //鏄惁涓篿Phone鎴栬€呭畨鍗換Q娴忚鍣�
              iPad: u.indexOf('iPad') > -1, //鏄惁涓篿Pad
              webApp: u.indexOf('Safari') == -1 ,//鏄惁涓簑eb搴旂敤绋嬪簭锛屾病鏈夊ご閮ㄤ笌搴曢儴
              weixin: u.indexOf('MicroMessenger') == -1 //鏄惁涓哄井淇℃祻瑙堝櫒
          };
      }()
  };
  var platform = "PC";
  console.log(browser.versions.mobile)
  if (browser.versions.mobile) {
      if (browser.versions.iPhone) {
          platform = "iPhone";
      } else if (browser.versions.iPad) {
          platform = "iPad";
      } else if (browser.versions.ios) {
          platform = "IOS";
      } else if (browser.versions.android) {
          platform = "Android";
      }
  }


  // 褰撳墠鏈嶅姟鍦板潃
  var pathname = window.location.pathname;



  var ip = returnCitySN["cip"];
  var  address = returnCitySN["cname"];

  if( address.indexOf("鐪�") != -1) {
      var provinces = address.substring(0,address.indexOf("鐪�")+1);
      var city = address.substring(address.indexOf("鐪�")+1);
  }else if(address.indexOf("鍖�") != -1) {
      var provinces = address.substring(0,address.indexOf("鍖�")+1);
      var city = address.substring(address.indexOf("鍖�")+1);
  }else {
      var provinces = address;
      var city = "";
  }





  // 灏佽娴忚瀵硅薄
  var record = new Object();
  record.platform = platform;
  record.referrer = referrer;
  record.pathname = pathname;
  record.keyword = keyword;
  record.ip = ip;
  record.provinces = provinces;
  record.city = city;
  record.search = search;
record.category = "1";
  $.ajax({
      type: 'post',
      //url: 'http://local.haowai.com/api/tool/click-record/save',
//		url: 'http://test.haowaisp.cn/api/tool/click-record/save',
  url: 'http://www.haowaisp.cn/api/tool/click-record/save',
      contentType: 'application/json;charset=utf-8',
      data: JSON.stringify(record),
      success: function(data){
      }
  });
})();

//鎻愪氦璋冪敤缁熻浠ｇ爜
//$(function(){

function adder() {

  // 璺宠浆鏉ユ簮鍦板潃
  var x = 0;
  var search = "";

  var referrer1 = document.referrer;
  var referrer = decodeURIComponent(referrer1);
  var i = referrer.indexOf('?');
  if(i != -1){
      var http = referrer.substring( 0, i);
      var key = referrer.substring(i);

      if(http.indexOf("www.so.com") != -1){
          x = 1;
          search = "360pc绔�";
      }else if(http.indexOf("m.so.com") != -1){
          x = 1;
          search = "360绉诲姩绔�";
      }else if(http.indexOf("www.sogou.com") != -1){
          x = 2;
          search = "鎼滅嫍pc绔�";
      }else if(http.indexOf("m.sogou.com") != -1){
          x = 3;
          search = "鎼滅嫍绉诲姩绔�";
      }else if(http.indexOf("so.m.sm.cn") != -1){
          x = 1;
          search = "绁為┈绉诲姩";
      }

      var params = key.substring(1);
      var paramsArr = params.split("&");
      console.log(paramsArr);
      for(var a = 0; a < paramsArr.length; a++) {
          // console.log(paramsArr);
          if(x = 1 && paramsArr[a].indexOf("q") != -1) {
              var keyword = paramsArr[a].split("=")[1];
          }else if(x = 2 && paramsArr[a].indexOf("query") != -1){
              var keyword = paramsArr[a].split("=")[1];
          }else if(x = 3 && paramsArr[a].indexOf("keyword") != -1){
              var keyword = paramsArr[a].split("=")[1];
          }
      }
  }else {
      var keyword = "鐩存帴璁块棶";
  }


  // 骞冲彴 PC iOS Android
  var browser={
      versions:function(){
          var u = window.navigator.userAgent;
          return {
              trident: u.indexOf('Trident') > -1, //IE鍐呮牳
              presto: u.indexOf('Presto') > -1, //opera鍐呮牳
              webKit: u.indexOf('AppleWebKit') > -1, //鑻规灉銆佽胺姝屽唴鏍�
              gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //鐏嫄鍐呮牳
              mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //鏄惁涓虹Щ鍔ㄧ粓绔�
              ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios缁堢
              android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android缁堢鎴栬€卽c娴忚鍣�
              iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //鏄惁涓篿Phone鎴栬€呭畨鍗換Q娴忚鍣�
              iPad: u.indexOf('iPad') > -1, //鏄惁涓篿Pad
              webApp: u.indexOf('Safari') == -1 ,//鏄惁涓簑eb搴旂敤绋嬪簭锛屾病鏈夊ご閮ㄤ笌搴曢儴
              weixin: u.indexOf('MicroMessenger') == -1 //鏄惁涓哄井淇℃祻瑙堝櫒
          };
      }()
  };
  var platform = "PC";
  console.log(browser.versions.mobile)
  if (browser.versions.mobile) {
      if (browser.versions.iPhone) {
          platform = "iPhone";
      } else if (browser.versions.iPad) {
          platform = "iPad";
      } else if (browser.versions.ios) {
          platform = "IOS";
      } else if (browser.versions.android) {
          platform = "Android";
      }
  }


  // 褰撳墠鏈嶅姟鍦板潃
  var pathname = window.location.pathname;



  var ip = returnCitySN["cip"];
  var  address = returnCitySN["cname"];

  if( address.indexOf("鐪�") != -1) {
      var provinces = address.substring(0,address.indexOf("鐪�")+1);
      var city = address.substring(address.indexOf("鐪�")+1);
  }else if(address.indexOf("鍖�") != -1) {
      var provinces = address.substring(0,address.indexOf("鍖�")+1);
      var city = address.substring(address.indexOf("鍖�")+1);
  }else {
      var provinces = address;
      var city = "";
  }





  // 灏佽娴忚瀵硅薄
  var record = new Object();
  record.platform = platform;
  record.referrer = referrer;
  record.pathname = pathname;
  record.keyword = keyword;
  record.ip = ip;
  record.provinces = provinces;
  record.city = city;
  record.search = search;
record.category = "2";
  console.log(record)
  $.ajax({
      type: 'post',
     // url: 'http://local.haowai.com/api/tool/click-record/save',
//		url: 'http://test.haowaisp.cn:9003/api/tool/click-record/save',
  url: 'http://www.haowaisp.cn:9003/api/tool/click-record/save',
      contentType: 'application/json;charset=utf-8',
      data: JSON.stringify(record),
      success: function(data){
          console.log(data);
      }
  });
};	


//)