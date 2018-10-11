<template>
  <div class="myContainer">
    <!--标题栏-->
    <mt-header title="我的">
      <router-link to="/" slot="left">
        <mt-button>
          <img src="../assets/icon/titleBar/left_back_icon.png" height="20" width="20" slot="icon">
        </mt-button>
      </router-link>
      <mt-button slot="right">
        <img src="../assets/icon/titleBar/titile_bar_setting_icon.png" height="20" width="20" slot="icon">
      </mt-button>
      <!--<mt-button icon="more" slot="right">-->
        <!--<img src="../assets/icon/left_back_icon.png" height="20" width="20" slot="icon">-->
      <!--</mt-button>-->
    </mt-header>

    <!--个人信息-->
    <div class="personInfo">
      <img src="../assets/img/user_header_img.png"/>
      <section>
        <span>喜洋洋</span>
        <span>简介：喜洋洋有限公司喜洋洋有限公司喜洋洋有限公司喜洋洋有限公司喜洋洋有限公司喜洋洋有限公司喜洋洋有限公司喜洋洋有限公司</span>
      </section>
    </div>
    <!--个人拥有-->
    <div class="personHave">
      <ul>
        <li>
          <router-link :to="{name:'order'}">
            <i>2</i>
            <span>订单</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'order'}">
            <i>3</i>
            <span>消息</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'order'}">
            <i>4</i>
            <span>优惠券</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!--常用功能-->
    <div class="oftenFun">
      <header>常用功能</header>
      <ul>
        <li>
          <img src="../assets/icon/my/my_often_fun_icon1.png"/>
          <span>实名认证</span>
        </li>
        <li>
          <img src="../assets/icon/my/my_often_fun_icon2.png"/>
          <span>我的收藏</span>
        </li>
        <li>
          <img src="../assets/icon/my/my_often_fun_icon3.png"/>
          <span>我的足迹</span>
        </li>
        <li>
          <img src="../assets/icon/my/my_often_fun_icon4.png"/>
          <span>离线车票</span>
        </li>
        <li>
          <img src="../assets/icon/my/my_often_fun_icon5.png"/>
          <span>我的积分</span>
        </li>
        <li>
          <img src="../assets/icon/my/my_often_fun_icon6.png"/>
          <span>邀请活动</span>
        </li>
        <li>
          <img src="../assets/icon/my/my_often_fun_icon7.png"/>
          <span>帮助与反馈</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "My"
    }
</script>

<style scoped>
  .myContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f4f5f9;
  }
  /*个人信息-*/
  .personInfo{
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    background-color: #ffffff;
  }
  .personInfo>img{
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 0.6rem;
    /*display:inline-block;*/
    /*vertical-align:middle;*/
  }
  .personInfo>section{
    width: 5rem;
    padding-left: 0.2rem;
    display: flex;
    flex-direction: column;
    line-height: 0.4rem;
  }
  .personInfo>section>span:nth-of-type(1){
    padding-top: 0.2rem;
    font-size: 0.3rem;
    color: #797873;
  }
  .personInfo>section>span:nth-of-type(2){
    font-size: 0.2rem;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
  }

  /*个人拥有*/
  .personHave{
    border-top: #cfcece  0.015rem solid;
    border-bottom: #cfcece  0.015rem solid;
    background-color: #ffffff;
  }
  .personHave ul{
    overflow:hidden;
    padding: 0.25rem 0;
  }
  .personHave ul li{
    float: left;
    font-size: 0.2rem;
    text-align: center;
  }
  .personHave ul li a{
    display: flex;
    flex-direction: column;
  }
  .personHave ul li:nth-of-type(1), .personHave ul li:nth-of-type(3){
    width: 25%;
  }
  .personHave ul li:nth-of-type(2){
    width: 50%;
  }
  .personHave ul li i{
    color: #000000;
  }
  .personHave ul li span{
    padding-top: 0.1rem;
  }

  /*常用功能*/
  .oftenFun{
    margin-top: 0.2rem;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    border-bottom: #cfcece  0.015rem solid;
  }
  .oftenFun>header{
    font-size: 0.3rem;
    color: #797873;
    border-top: #cfcece  0.015rem solid;
    border-bottom: #cfcece  0.015rem solid;
    padding: 0.2rem;
  }
  .oftenFun>ul{
    overflow:hidden;
    padding: 0.3rem;
  }
  .oftenFun>ul>li{
    width: 25%;
    display: flex;
    flex-direction: column;
    float: left;

    /*text-align: center;*/
    justify-content: center;
    align-items: center;
    padding-top: 0.2rem;
    /*margin:0 auto;*/
  }
  .oftenFun>ul>li>img{
    /*transform: translate(-50%, 0);    !* 50%为自身尺寸的一半 *!*/
    width: 0.5rem;
    height: 0.5rem;
    margin-left: 0.1rem;
  }
  .oftenFun>ul>li>span{
    padding: 0.2rem 0;
    font-size: 0.25rem;
  }
</style>
