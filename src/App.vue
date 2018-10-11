<template>
    <div style="background-color: #f4f5f9">
        <router-view name="main">
        </router-view>
    </div>
</template>

<script>
  // import utils from './assets/js/utils'
  export default {
    name:'App',

    data() {
      return {
      }
    },
    mounted(){
      // utils.zoom();
    },
    methods: {
    },
  }
</script>

<style>
  /*************************************************/
  /***************底部tab导航开始******************/

  .bottomTab a.mint-tab-item:nth-of-type(1) .mint-tab-item-icon{
    margin: 0 0 0.1rem;
  }
  .bottomTab a.mint-tab-item:nth-of-type(2) .mint-tab-item-icon{
    margin: 0 0 0.1rem auto;
  }

  /***************底部tab导航结束******************/

  /*************************************************/

  /***************index页面开始******************/
  /*如约模块*/

  /*如约水巴--车类型复选框*/
  .waterBusTypeCheck a.mint-cell{
    width: 33.33%;
  }
  .waterBusTypeCheck a.mint-cell:nth-of-type(2) .mint-checklist-label{
    text-align: center;
  }
  .waterBusTypeCheck a.mint-cell:nth-of-type(3) .mint-checklist-label{
    text-align: end;
  }

  /*如约城际--车类型复选框*/
  .cityBusTypeCheck a.mint-cell{
    width: 50%;
  }
  /*.cityBusTypeCheck a.mint-cell:nth-of-type(2){*/
    /*margin-left: 0.38rem;*/
  /*}*/
  .cityBusTypeCheck a.mint-cell:nth-of-type(2) .mint-checklist-label{
    padding-right: 0;
    text-align: end;
  }
  /***************index页面结束******************/

  /*************************************************/

  /***************南站专线页面开始******************/
  /*搜索框*/
  .southStationTargetLineContainer input::-webkit-input-placeholder{ /*WebKit browsers*/
    text-align: center;
  }
  .southStationTargetLineContainer .mintui-search:before{
    /*content: '12';*/
  }

  /*.southStationTargetLineContainer .mint-searchbar{*/
    /*background-color: #FFFFFF;*/
  /*}*/
  /*.southStationTargetLineContainer .mint-searchbar-inner{*/
    /*border: #D4D4D4 0.01rem solid;*/
    /*border-radius: 0.5rem;*/
  /*}*/
  /*.mint-searchbar-cancel{*/
    /*color: #A9A8A4;*/
  /*}*/
  /***************南站专线页面结束******************/

  /*************************************************/
</style>
