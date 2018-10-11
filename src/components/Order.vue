<template>
    <div class="orderContainer">
      <!--标题栏-->
      <mt-header title="订单" fixed>
        <router-link to="/" slot="left">
          <mt-button>
            <img src="../assets/icon/titleBar/left_back_icon.png" height="20" width="20" slot="icon">
          </mt-button>
        </router-link>
<!--        <mt-button slot="right">
          <img src="../assets/icon/titleBar/titile_bar_setting_icon.pnfg" height="20" width="20" slot="icon">
        </mt-button>-->
      </mt-header>
      <!--订单列表-->
      <div class="order">
        <mt-navbar class="orderTabItemContainer" v-model="orderTypeSelected" fixed>
          <mt-tab-item id="all">全部</mt-tab-item>
          <mt-tab-item id="noPay">未支付</mt-tab-item>
          <mt-tab-item id="refund">退款</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="orderTypeSelected" class="orderTabContainer">
          <mt-tab-container-item id="all">
            <mt-loadmore>
              <OrderListItem :orderType="n%2==0?'refund':'noPay'" v-for="n in 4" style="margin-top: 0.5rem"/>
            </mt-loadmore>
          </mt-tab-container-item>
          <mt-tab-container-item id="noPay">
            <mt-loadmore>
              <OrderListItem orderType="noPay" v-for="n in 4" style="margin-top: 0.5rem"/>
            </mt-loadmore>
          </mt-tab-container-item>
          <mt-tab-container-item id="refund">
            <mt-loadmore>
              <OrderListItem orderType="refund" v-for="n in 4" style="margin-top: 0.5rem"/>
            </mt-loadmore>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
</template>

<script>
  import OrderListItem from './order/OrderListItem';

  export default {
    name: "Order",
    components: {
      OrderListItem
    },
    data:function () {
      return {
        orderTypeSelected:'all'
      }
    }
  }
</script>

<style scoped>
  .orderContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    /*background-color: #f4f5f9;*/
  }

  .order{
    margin-top: 0.9rem;
  }
  .order .orderTabContainer{
    margin-top: 1rem;
    margin-bottom: 1rem;
    /*background-color: #F4F5F9;*/
  }
  .order .orderTabItemContainer{
    top: 0.94rem;
  }
</style>
