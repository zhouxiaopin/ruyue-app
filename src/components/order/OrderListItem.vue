<template>
    <div class="orderListItemContainer">
      <!--头部--订单编号-->
      <header>
        <ul>
          <li>
            <span>订单编号</span>
            <i>48846618985565588</i>
          </li>
          <li>
            <img src="../../assets/icon/order/order_item_bus_icon.png"/>
            <span>RY514</span>
          </li>
        </ul>
      </header>

      <!--起点和终点-->
      <section class="starAndEnd">
        <ol>
          <li>
            <i></i>
            <span>岑村红花岗站</span>
          </li>
          <li>
            <i></i>
            <span>石牌桥站</span>
          </li>
        </ol>
      </section>

      <!--数量、时间、状态-->
      <section class="numTimeState">
        <ul>
          <li>
            <span>订购数量：</span>
            <i>6</i>
            <span>张</span>
          </li>
          <li>
            <span>发车时间：</span>
            <span>08-09</span>
            <span>17:00</span>
          </li>
          <li>
            等待付款
          </li>
        </ul>
      </section>

      <!--底部--金额、按钮-->
      <footer>
        <ul>
          <li>
            <span>共计：</span>
            <i>456</i>
            <span>元</span>
          </li>
          <li>
            <div>
              <mt-button v-show="orderType == 'noPay'?true:false" size="small" type="default">
                取消订单
              </mt-button>
              <mt-button v-show="orderType == 'noPay'?true:false" size="small" type="danger">
                立即支付
              </mt-button>
              <mt-button class="refundBtn" v-show="orderType == 'refund'?true:false" size="small" type="primary">
                退  款
              </mt-button>
            </div>
          </li>
        </ul>
      </footer>
    </div>
</template>

<script>
    export default {
      name: "OrderListItem",
      props:['orderType'],
    }
</script>

<style scoped>
  .orderListItemContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    /*padding-top: 0.2rem;*/
    /*padding-bottom: 0.2rem;*/
    background-color: #ffffff;
    border-top: 0.01rem #D9D8D8 solid;
    border-bottom: 0.01rem #D9D8D8 solid;
  }
  .orderListItemContainer ul{
    overflow: hidden;
    padding-left: 0.2rem;
  }
  .orderListItemContainer ul li{
    float: left;
    font-size: 0.25rem;
  }

  /*头部--订单编号*/
  .orderListItemContainer>header>ul{
    margin-right: 0.1rem;
    padding-top: 0.3rem;
    padding-right: 0.1rem;
    padding-bottom: 0.2rem;
    /*border-top: 0.01rem #D9D8D8 solid;*/
    border-right: 0.01rem #D9D8D8 solid;
    border-bottom: 0.01rem #D9D8D8 solid;
  }
  .orderListItemContainer>header>ul>li{
    font-size: 0.3rem;
    /*color: #66655F;*/
  }
  .orderListItemContainer>header>ul>li:nth-of-type(1){
    width: 70%;
  }
  .orderListItemContainer>header>ul>li:nth-of-type(2){
    width: 30%;
    text-align: end;
  }
  .orderListItemContainer>header>ul>li:nth-of-type(2)>span{
    vertical-align: middle;
  }
  .orderListItemContainer>header>ul>li:nth-of-type(2)>img{
    width: 0.3rem;
    height: 0.3rem;
    vertical-align: middle;
  }

  /*起点和终点*/
  .starAndEnd>ol{
    padding-left: 0.2rem;
    padding-bottom: 0.2rem;
    border-bottom: 0.01rem #D9D8D8 solid;
  }
  .starAndEnd>ol>li{
    font-size: 0.25rem;
    padding-top: 0.2rem;
  }
  .starAndEnd>ol>li>i{
    width: 0.18rem;
    height: 0.18rem;
    border-radius: 0.09rem;
    display: inline-block;
  }
  .starAndEnd>ol>li:nth-of-type(1)>i{
    background-color: #A3C724;
  }
  .starAndEnd>ol>li:nth-of-type(2)>i{
    background-color: #EE6647;
  }

  /*数量、时间、状态-*/
  .numTimeState>ul{
    padding: 0.1rem 0.2rem 0.2rem 0.1rem;
/*    padding-top: 0.2rem;
    padding-right: 0.2em;
    padding-bottom: 0.2em;
    padding-left: 0.1rem;*/
    margin-left: 0.1rem;
    border-bottom: 0.01rem #D9D8D8 dashed;
  }
  .numTimeState>ul>li:nth-of-type(odd){
    width: 30%;
  }
  .numTimeState>ul>li:nth-of-type(even){
    width: 40%;
  }
  .numTimeState>ul>li:nth-of-type(3){
    text-align: end;
  }
  .numTimeState>ul>li:nth-of-type(2)>span,.numTimeState>ul>li:nth-of-type(3){
    color: #FC9A1D;
  }


  /*底部--金额、按钮*/
  .orderListItemContainer>footer li{
    width: 50%;
    height: 0.8rem;
    vertical-align: middle;
    line-height:0.8rem;
  }
  .orderListItemContainer>footer li:nth-of-type(1) i{
    color: #EC6723;
    font-size: 0.34rem;
  }
  .orderListItemContainer>footer li:nth-of-type(2){
    padding-right: 0.2rem;
    text-align: end;
  }
  footer .refundBtn{
    padding-left: 0.4rem;
    padding-right: 0.4rem;
  }
</style>
