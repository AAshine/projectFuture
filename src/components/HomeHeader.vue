<template>
  <div class="header">
<nav class="navbar home1_menu navbar-fixed navbar-default navbar-mobile bootsnav is-visible xsaa on menu-center" data-nav-status="toggle">
            <div class="container-fluid"> 
                <div class="row"> 
                    <!-- Start Top Search -->
                    <div class="top-search">
                        <div class="container">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-search"></i></span>
                                <input type="text" class="form-control" placeholder="Search">
                                <span class="input-group-addon close-search"><i class="fa fa-times"></i></span>
                            </div>
                        </div>
                    </div>
                    <!-- End Top Search -->
                    <div class="container">
                        <div class="row">
                            <div class="attr-nav">
                                <ul>
                                    <li class="search"><a href="#" class="hv1"><i class="fa fa-search"></i></a></li>
                                    <li id="open-button" class="side-menu">
                                        <a href="#">
                                            <span class="icon-01"></span>
                                            <span class="icon-02"></span>
                                            <span class="icon-03"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- Start Header Navigation -->
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i class="fa fa-bars"></i>
                                </button>
                                <a class="navbar-brand" href="#brand"><img src="../assets/images/home/logo.png" class="logo" alt=""></a>
                            </div>
                            <!-- End Header Navigation -->

                            <!-- Collect the nav links, forms, and other content for toggling -->
                            <div class="collapse navbar-collapse" id="navbar-menu">

                                <ul class="nav navbar-nav navbar-center" data-in="fadeIn" data-out="fadeOut">
									<li><router-link to="/">首页</router-link></li>
									<li><router-link to="/classmate">课程介绍</router-link></li>
									<li><router-link to="/talent">人才培养</router-link></li>
									<li><router-link to="/teacher">师资力量</router-link></li>
                                    <li><router-link to="/news">新闻资讯</router-link></li>
                                    <li><router-link to="/casedo">优秀案例</router-link></li>
                                    <li><router-link to="/about">关于我们</router-link></li>
                                </ul>

                            </div><!-- /.navbar-collapse -->
                        </div>

                    </div>
                </div>   
            </div>   

            <!-- Start Side Menu -->
            <div class="side">
                <a href="#" id="close-button" class="close-side text-center">
                    <span class="icon-01"></span>
                    <span class="icon-02"></span>
                    <span class="icon-03"></span>
                </a>
                <div class="side-menu-area fix">
                    <div class="text-center">
                        <a href="" class="side-brand"><img src="assets/images/logov2.png" alt=""></a>
                    </div>
                    <p class="m-top-40 text-black">We’re a leading Internet Digital Marketing Company who offers SEO, 
                        Paid Search, Social Media, ConsultingLead Generation, Brand Reputation 
                        Management, and Web Design Services.</p>

                    <div class="title m-top-70">
                        <h2 class="text-black">Sign in to your account</h2>
                        <div class="separator"><span></span><span></span><span></span></div>
                    </div>
                    <form class="m-top-40">
                        <div class="form-group">
                            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Username or Email">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-round">Login</button>
                            <div class="checkbox pull-right m-top-20">
                                <label>
                                    <input type="checkbox"> Check me out
                                </label>
                            </div>
                            <div class="checkbox p-top-40">
                                <label>
                                    <input type="checkbox"> Forgot my Password?
                                </label>
                            </div>
                        </div>
                        <div class="divider"></div>
                        <p class="text-center">Don't have an account yet? <a href="">Register an account</a></p>
                    </form>
                    <div class="socail-bookmark">
                        <div class="col-md-12 m-top-80">
                            <div class="title">
                                <h4 class="text-black">Socails</h4>
                                <div class="separator"><span></span><span></span><span></span></div>
                            </div>
                            <div class="contact-boxv1-item m-top-30">
                                <ul class="list-inline">
                                    <li><a href=""><i class="icon icon-social-2"></i></a></li>
                                    <li><a href=""><i class="icon icon-social-1"></i></a></li>
                                    <li><a href=""><i class="icon icon-social-network"></i></a></li>
                                    <li><a href=""><i class="icon icon-social"></i></a></li>
                                </ul>
                            </div>
                        </div><!-- End off col-md-4 -->
                        <div class="col-md-12 m-top-80">
                            <div class="title">
                                <h4 class="text-black">Address</h4>
                                <div class="separator"><span></span><span></span><span></span></div>
                            </div>
                            <div class="contact-boxv1-item m-top-30">
                                <div class="boxv1-item-img">
                                    <img src="assets/images/location-img.png" alt="">
                                </div>
                                <div class="boxv1-item-content text-black">
                                    <p class="m-top-10 text-black">1877 Perry Street Swartz Creekson,
                                        MI 48473</p>
                                </div>
                            </div>
                        </div><!-- End off col-md-4 -->
                        <div class="col-md-12 m-top-80">
                            <div class="title">
                                <h4 class="text-black">Our Phone &amp; Fax</h4>
                                <div class="separator"><span></span><span></span><span></span></div>
                            </div>
                            <div class="contact-boxv1-item m-top-30">
                                <div class="boxv1-item-img">
                                    <img src="assets/images/phone-fax-img.png" alt="">
                                </div>
                                <div class="boxv1-item-content text-black">
                                    <p class="m-top-10">Phone:  (012) 345 - 6789 <br>
                                        Fax:  555 - 675 0037</p>
                                </div>
                            </div>
                        </div><!-- End off col-md-4 -->
                        <div class="col-md-12 m-top-80">
                            <div class="title">
                                <h4 class="text-black">Email</h4>
                                <div class="separator"><span></span><span></span><span></span></div>
                            </div>
                            <div class="contact-boxv1-item m-top-30">
                                <div class="boxv1-item-img">
                                    <img src="assets/images/envelop-img-02.png" alt="">
                                </div>
                                <div class="boxv1-item-content text-black">
                                    <p class="m-top-10">Info:  seo@info.com <br>
                                        Salse:  seo@salse.com</p>
                                </div>
                            </div>
                        </div><!-- End off col-md-4 -->
                        <div class="col-md-12 m-top-80">
                            <div class="title">
                                <h4 class="text-black">Working Hours</h4>
                                <div class="separator"><span></span><span></span><span></span></div>
                            </div>
                            <div class="contact-boxv1-item m-top-30">
                                <div class="boxv1-item-img">
                                    <img src="assets/images/clock-img.png" alt="">
                                </div>
                                <div class="boxv1-item-content text-black">
                                    <p class="">Monday to Saturday: 8:00am - 9:00pm
                                        Sunday: Closed</p>
                                </div>
                            </div>
                        </div><!-- End off col-md-4 -->
                    </div>
                </div>

            </div>
            <!-- End Side Menu -->

        </nav>
  </div>
</template>
<script scoped>
export default{
    data(){
        return{
            theme1: 'light'
        }
    }
} 
</script>
<style lang="stylus" scoped>
.navbar-header img
    width 110px
.navbar-brand
    margin-top -10px
</style>
