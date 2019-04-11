<template>
<div class="teacherMess">
	  <div class="teachertodo">
             <div class="box" v-for="(item, index) in teacherUser" :key="index">
		                        <img :src="item.imgUrl">
		                        <div class="box-content">
		                            <h3 class="title">老师简介</h3>
		                            <span class="post">{{item.teacherText}}</span>
									
		                            <ul class="icon">
		                                <li><a href="#"><i class="fa fa-search"></i></a></li>
		                                <li><a href="#"><i class="fa fa-link"></i></a></li>
		                            </ul>
		                        </div>
		</div>
  </div>
  <div class="button"><router-link to="/classmate">讲师在线咨询</router-link></div>
</div>
</template>

<script>
  export default {
    data() {
      return {
          teacherUser:[
              {
				  teacherText:'卡通恶搞造型卡通恶搞造型卡通恶搞造型卡通恶搞造型卡通恶搞造型卡通恶搞造型卡通恶搞造型卡通恶搞造型卡通恶搞造型',
                  imgUrl:require('../../../../assets/images/teacher1.png')
              },
                {teacherText:'给我欧派给我欧派给我欧派给我欧派给我欧派给我欧派给我欧派给我欧派给我欧派给我欧派',
                  imgUrl:require('../../../../assets/images/teacher1.png')
			  },
			  {
				  teacherText:'卡通恶搞造型卡通恶搞造型卡通恶搞造型卡通恶搞造型卡通恶搞造型卡通恶搞造型卡通恶搞造型卡通恶搞造型卡通恶搞造型',
                  imgUrl:require('../../../../assets/images/teacher1.png')
              },
                {teacherText:'给我欧派给我欧派给我欧派给我欧派给我欧派给我欧派给我欧派给我欧派给我欧派给我欧派',
                  imgUrl:require('../../../../assets/images/teacher1.png')
              }
          ]
      }
    }
  }
</script>
<style scoped>
.teachertodo{
    display: flex;
    justify-content: center;
	margin-top: 30px;
}
.teacherMess .button{
	display: flex;
	border-radius: 30px;
	width: 180px;
	border:1px solid #9208c5;
	color:#9208c5;
	cursor: pointer;
	justify-content: center;
	margin: 30px auto;
	line-height: 40px;
	font-weight: 800
}
.teacherMess .button a{
	color:#9208c5;
}
.box{
		    text-align: center;
		    overflow: hidden;
		    position: relative;
            width: 250px;
            margin-right: 20px;
		}
.box img{
    width: 100%;
    height: 100%;
}
.box:before{
		    content: "";
		    width: 0;
		    height: 100%;
		    background: #000;
		    padding: 14px 18px;
		    position: absolute;
		    top: 0;
		    left: 50%;
		    opacity: 0;
		    transition: all 500ms cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
		}
.box:hover:before{
		    width: 100%;
		    left: 0;
		    opacity: 0.5;
		}
.box img{
		    width: 100%;
		    height: auto;
		}
.box .box-content{
		    width: 100%;
		    padding: 14px 18px;
		    color: #fff;
		    position: absolute;
		    top: 15%;
		    left: 0;
		}
.box .title{
		    font-size: 25px;
		    font-weight: 600;
		    line-height: 30px;
			padding :5px;
		    text-transform: uppercase;
		    margin: 0;
		    opacity: 0;
		    transition: all 0.5s ease 0s;
			max-height: 60px;
		}
.box .post{
		    font-size: 15px;
		    text-transform: capitalize;
		    opacity: 0;
		    transition: all 0.5s ease 0s;
		}
.box:hover .title,
.box:hover .post{
		    opacity: 1;
		    transition-delay: 0.7s;
}
.box .icon{
		    padding: 0;
		    margin: 0;
		    list-style: none;
		    margin-top: 15px;
		}
.box .icon li{
		    display: inline-block;
		}
.box .icon li a{
		    display: block;
		    width: 40px;
		    height: 40px;
		    line-height: 40px;
		    border-radius: 50%;
		    background: #f74e55;
		    font-size: 20px;
		    font-weight: 700;
		    color: #fff;
		    margin-right: 5px;
		    opacity: 0;
		    transform: translateY(50px);
		    transition: all 0.5s ease 0s;
		}
.box:hover .icon li a{
		    opacity: 1;
		    transform: translateY(0px);
		    transition-delay: 0.5s;
		}
.box:hover .icon li:last-child a{
		    transition-delay: 0.8s;
		}

</style>